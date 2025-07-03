import { NextApiRequest, NextApiResponse } from 'next';
import { 
  SelfBackendVerifier, 
  AttestationId, 
  UserIdType,
  IConfigStorage,
  ConfigMismatchError 
} from '@selfxyz/core';

// Configuration storage implementation
class ConfigStorage {
  async getConfig(configId) {
    return {
      olderThan: 18,
      excludedCountries: ['IRN', 'PRK'],
      ofac: true
    };
  }
  
  async getActionId(userIdentifier, userDefinedData) {
    return 'default_config';
  }
}

// Initialize verifier once
const allowedIds = new Map();
allowedIds.set(1, true); // Accept passports

const selfBackendVerifier = new SelfBackendVerifier(
  'my-application-scope',
  'https://735e-2405-201-e06a-2023-e0ba-a24d-4ca9-4a40.ngrok-free.app/api/verify',
  false,
  allowedIds,
  new ConfigStorage(),
  UserIdType.UUID
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { attestationId, proof, pubSignals, userContextData } = req.body;

      if (!attestationId || !proof || !pubSignals || !userContextData) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Verify the proof
      const result = await selfBackendVerifier.verify(
        attestationId,
        proof,
        pubSignals,
        userContextData
      );
      
      if (result.isValidDetails.isValid) {
        // Return successful verification response
        return res.status(200).json({
          status: 'success',
          result: true,
          credentialSubject: result.discloseOutput
        });
      } else {
        // Return failed verification response
        return res.status(400).json({
          status: 'error',
          result: false,
          message: 'Verification failed',
          details: result.isValidDetails
        });
      }
    } catch (error) {
      if (error instanceof ConfigMismatchError) {
        return res.status(400).json({
          status: 'error',
          result: false,
          message: 'Configuration mismatch',
          issues: error.issues
        });
      }
      
      console.error('Error verifying proof:', error);
      return res.status(500).json({
        status: 'error',
        result: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}