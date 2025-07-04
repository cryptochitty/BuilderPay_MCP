import React, { useState, useEffect } from "react";
import "../styles/registerbuilder.css";
import VerificationPage from "../components/SelfDid";
import { getContract } from "../utils/contract";
import { uploadToIPFS } from "../utils/pinata";

const RegisterBuilder = () => {
  const [step, setStep] = useState(1);
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [ipfsUrl, setIpfsUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({});

  const API_TOKEN = "bc5370e1.194aa0685eaa4efc9d0e787720e1fa65"; // Replace this with your token

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsMetaMaskConnected(true);
      } catch (err) {
        alert("MetaMask connection failed.");
      }
    } else {
      alert("MetaMask not detected.");
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const client = new Web3Storage({ token: API_TOKEN });
      const cid = await client.put([file]);
      const url = `https://ipfs.io/ipfs/${cid}/${file.name}`;
      setIpfsUrl(url);
      console.log("Uploaded to IPFS:", url);
    } catch (err) {
      alert("Image upload failed");
      console.error("IPFS Upload Error:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ipfsUrl) {
      alert("Please wait for the image upload to finish.");
      return;
    }

    const data = Object.fromEntries(new FormData(e.target).entries());
    setFormData(data);

    try {
      const contract = await getContract();
      const tx = await contract.registerBuilder(
        data.displayName,
        data.username || "",
        data.bio || "",
        data.github || "",
        data.twitter || "",
        data.website || "",
        data.skills || "",
        ipfsUrl || "" // ✅ Pass the actual IPFS URL here
      );

      await tx.wait();
      console.log("Registration successful on-chain");
      setStep(2);
    } catch (err) {
      alert("Smart contract interaction failed");
      console.error(err);
    }
  };

  return (
    <div className="register-builder">
      <div className="register-left">
        <h1>
          Join BuilderPay: Get Paid for <span>Building Decentralized</span>
        </h1>
        <img src="../src/assets/signup.svg" alt="Builder" />
      </div>

      <div className="register-right">
        {step === 1 && (
          <form className="builder-form-step1" onSubmit={handleSubmit}>
            <label htmlFor="displayName">Name / Display Name</label>
            <input type="text" id="displayName" name="displayName" required />

            <label htmlFor="username">Username / Handle (optional)</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="@buildwithali"
            />

            <input
              type="file"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const cid = await uploadToIPFS(file);
                  alert(`File uploaded! IPFS CID: ${cid}`);
                }
              }}
            />

            <label htmlFor="bio">Short Bio / About You</label>
            <textarea
              id="bio"
              name="bio"
              rows="4"
              placeholder="Tell us about yourself..."
            ></textarea>

            <label htmlFor="github">GitHub</label>
            <input
              type="url"
              id="github"
              name="github"
              placeholder="https://github.com/yourhandle"
            />

            <label htmlFor="twitter">Twitter</label>
            <input
              type="url"
              id="twitter"
              name="twitter"
              placeholder="https://twitter.com/yourhandle"
            />

            <label htmlFor="website">Personal Website</label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="https://yourwebsite.com"
            />

            <label htmlFor="skills">Tags / Skills (comma-separated)</label>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="e.g. Solidity, Frontend, DevRel"
            />

            <button
              type="button"
              onClick={connectMetaMask}
              disabled={isMetaMaskConnected}
              className="metamask-button"
            >
              {isMetaMaskConnected ? "MetaMask Connected" : "Connect MetaMask"}
            </button>

            <button
              type="submit"
              disabled={!isMetaMaskConnected || isUploading || !ipfsUrl}
              className="next-button"
            >
              Next
            </button>
          </form>
        )}

        {step === 2 && (
          <div>
            <VerificationPage
              onResult={(result) => {
                if (result === "0101" || result !== "success") {
                  setStep(3);
                }
              }}
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <img
              src="../src/assets/verified.svg"
              alt="Success"
              className="successimg"
            />
            <h6 className="register-success">Registration Complete!</h6>
            <button className="next-button">Go to Dashboard</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterBuilder;
