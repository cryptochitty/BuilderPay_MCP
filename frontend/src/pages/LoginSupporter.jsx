import React, { useState } from "react";
import "../styles/registerbuilder.css";
import { getContract } from "../utils/supportercontract";
import { ethers } from "ethers";

const LoginSupporter = () => {
    const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const connectMetaMask = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: "eth_requestAccounts" });
                setIsMetaMaskConnected(true);
                setErrorMessage("");
            } catch (err) {
                setErrorMessage("MetaMask connection failed.");
            }
        } else {
            setErrorMessage("MetaMask not detected.");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner();
            const userAddress = await signer.getAddress();
            // Fetch the builder info from the contract
            // isRegistered may return a boolean, not an object. Let's check the contract ABI.
            // If it returns a boolean, use: const isRegistered = await contract.isRegistered(userAddress);
            // If it returns an object, use: const builder = await contract.isRegistered(userAddress);

            
            
            const contract = await getContract(signer);
            const isRegisteredUser = await contract.isRegistered(userAddress);


            if (isRegisteredUser) {
                setLoginSuccess(true);
                setErrorMessage("");
            } else {
                setLoginSuccess(false);
                setErrorMessage("Wallet not registered as a builder.");
            }
        } catch (err) {
            console.error(err);
            setErrorMessage("Smart contract interaction failed.");
        }
    };

    return (
        <div className="register-builder">
            <div className="register-left">
                <h1>
                    Welcome Back to <span>BuilderPay</span>
                </h1>
                <img src="../src/assets/signup.svg" alt="Builder" />
            </div>

            <div className="register-right">
                {!loginSuccess ? (
                    <form className="builder-form-step1" onSubmit={handleLogin}>
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
                            Login
                        </button>
                        {errorMessage && (
                            <p className="error-message" style={{ color: "red", marginTop: "10px" }}>
                                {errorMessage}
                            </p>
                        )}
                    </form>
                ) : (
                    <div>
                        <img
                            src="../src/assets/verified.svg"
                            alt="Success"
                            className="successimg"
                        />
                        <h6 className="register-success">Login Successful!</h6>
                        <button className="next-button">Go to Dashboard</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginSupporter;
