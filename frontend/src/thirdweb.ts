import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb/chains";

export const celoAlfajores = defineChain({
  id: 44787,
  name: "Celo Alfajores",
  nativeCurrency: {
    name: "CELO",
    symbol: "CELO",
    decimals: 18,
  },
  rpc: "https://alfajores-forno.celo-testnet.org",
});

export const client = createThirdwebClient({
  clientId: "b07c2146f6ddfc957d73e595b69e8945", // ← from thirdweb.com
});
