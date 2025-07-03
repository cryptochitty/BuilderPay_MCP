import React, { useState } from "react";
import "../styles/registerbuilder.css"; // Assuming you have a CSS file for styles
import VerificationPage from "../components/SelfDid";
import { getContract } from "../utils/supportercontract";

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
                const tx = await contract.registerSupporter(
                  data.supporterType,
                  data.fullName || "",
                  data.email || "",
                  data.phone || "",
                  data.country || "",
                  data.linkedin || ""
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
            <label htmlFor="supporterType">Supporter Type</label>
            <select id="supporterType" name="supporterType" required>
              <option value="individual">Individual</option>
              <option value="organization">Organization</option>
            </select>

            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" required />

            <label htmlFor="linkedin">LinkedIn URL</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              placeholder="https://linkedin.com/in/yourprofile"
              required
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
