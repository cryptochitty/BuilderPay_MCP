import React, { useState } from "react";
import "../styles/registerbuilder.css"; // Assuming you have a CSS file for styles
import VerificationPage from "../components/SelfDid";
import { getContract } from "../utils/contract";


const RegisterBuilder = () => {
  const [step, setStep] = useState(1);
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  const [formData, setFormData] = useState({});



  // MetaMask connect handler
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
          <form
            className="builder-form-step1"
            onSubmit={async (e) => {
              e.preventDefault();

              const data = Object.fromEntries(new FormData(e.target).entries());
              setFormData(data);

              try {
                const contract = await getContract();
                const tx = await contract.registerBuilder(
                  data.displayName,
                  data.username || "",
                  "", // placeholder for profileImage URL or IPFS hash
                  data.bio || "",
                  data.github || "",
                  data.twitter || "",
                  data.website || "",
                  data.skills || ""
                );

                await tx.wait();
                console.log("Registration successful on-chain");

                setStep(2);
              } catch (err) {
                alert("Smart contract interaction failed");
                console.error(err);
              }
            }}
          >
            <label htmlFor="displayName">Name / Display Name</label>
            <input type="text" id="displayName" name="displayName" required />

            <label htmlFor="username">Username / Handle (optional)</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="@buildwithali"
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
              disabled={!isMetaMaskConnected}
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
                // If result is 0101 or anything else, go to step 3
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
