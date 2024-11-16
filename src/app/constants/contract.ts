import { sepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { client } from "@/app/client";

const CONTRACT_ADDRESS = "0xe6f44c4B0a682C55167A9036f95440f147D5E59c";
export const contract = getContract({
  client: client,
  chain: sepolia,
  address: CONTRACT_ADDRESS,
});
