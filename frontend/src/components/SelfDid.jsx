'use client';

import React, { useState, useEffect } from 'react';
import SelfQRcodeWrapper, { SelfAppBuilder } from '@selfxyz/qrcode';
import { v4 as uuidv4 } from 'uuid';

function VerificationPage({ onResult }) {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(uuidv4());
  }, []);

  useEffect(() => {
    // Optional: fallback timeout after 60s
    const timeout = setTimeout(() => {
      if (typeof onResult === 'function') {
        onResult('timeout');
      }
    }, 60000);
    return () => clearTimeout(timeout);
  }, [onResult]);

  if (!userId) return null;

  const selfApp = new SelfAppBuilder({
    appName: "My Application",
    scope: "my-application-scope",
    endpoint: "http://localhost:3000/api/verify", // replace with your actual domain in production
    userId,
    disclosures: {
      minimumAge: 18,
      excludedCountries: ['IRN', 'PRK'],
      ofac: true,
      name: true,
      nationality: true,
    }
  }).build();

  return (
    <div className="verification-container">
      <h1>Verify Your Identity</h1>
      <p>Scan this QR code with the Self app to verify your identity</p>

      <SelfQRcodeWrapper
        selfApp={selfApp}
        onSuccess={() => {
          console.log("Verification successful!");
          if (typeof onResult === 'function') {
            onResult("success");
          }
        }}
        onError={(err) => {
          console.error("Verification error:", err);
          if (typeof onResult === 'function') {
            onResult("error");
          }
        }}
        size={350}
      />

      <p className="text-sm text-gray-500">
        User ID: {userId.substring(0, 8)}...
      </p>
    </div>
  );
}

export default VerificationPage;
