import React, { useState } from 'react';
import { ethers } from 'ethers';
import '../styles/donatecelo.css'; // Assuming you have a CSS file for styles

const DonateCelo = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [status, setStatus] = useState('');

  // Replace with your actual CELO wallet address
  const recipientAddress = '0xC67a716fAbC3F351Fa50b055f60AA8C0d9fDcBf2';

  const handleDonate = async () => {
    try {
      if (!window.ethereum) {
        setStatus('MetaMask not detected.');
        return;
      }

      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new ethers.providers.Web3Provider(window.ethereum); // ✅ ethers v5
      const signer = provider.getSigner();

      const tx = await signer.sendTransaction({
        to: recipientAddress,
        value: ethers.utils.parseEther(donationAmount),
      });

      setStatus('Transaction sent. Waiting for confirmation...');
      await tx.wait();
      setStatus('Thank you for your donation!');
    } catch (err) {
      console.error(err);
      setStatus('Transaction failed or cancelled.');
    }
  };

  return (
    <div className='donate-celo-container'>
      <h2 className='page-title'>Fuel the Future: <span>Donate CELO,</span> Empower Decentralization</h2>
      <p>Help us build a decentralized future. Donate CELO directly to our wallet.</p>

      <input
        type="number"
        placeholder="Enter amount in CELO"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        
      />

      <button onClick={handleDonate} className='donate-button'>
        Donate CELO
      </button>

      <p>{status}</p>
    </div>
  );
};

export default DonateCelo;
