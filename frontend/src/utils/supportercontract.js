import { ethers } from "ethers";
import abi from "./BuilderPaySupporters.json"; // ABI JSON from ThirdWeb

const CONTRACT_ADDRESS = "0x2abBEDC993eA75F4e7601C744E98E09877025A26"; // <-- replace with your contract

export const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
};
