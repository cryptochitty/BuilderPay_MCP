import { ethers } from "ethers";
import abi from "./BuilderRegistryABI.json"; // ABI JSON from ThirdWeb

const CONTRACT_ADDRESS = "0x955C22E2FA3B3eb6dD88236CC7e2696cD4bFcEa3"; // <-- replace with your contract

export const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
};
