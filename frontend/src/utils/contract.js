import { ethers } from "ethers";
import abi from "./BuilderRegistryABI.json"; // ABI JSON from ThirdWeb

const CONTRACT_ADDRESS = "0xbB3930980039f625caE3Bd3b9b04904CE3D42716"; // <-- replace with your contract

export const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not found");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
};
