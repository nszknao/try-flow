import { config } from "@onflow/fcl";

config({
  "accessNode.api": "https://access-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "0xProfile": process.env.NEXT_PUBLIC_PROFILE_CONTRACT,
});
