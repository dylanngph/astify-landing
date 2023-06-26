import { chainInfo } from "@/components/Providers/Web3Provider";

export function getChainIcon(chainId: number) {
  return chainInfo.find((chain) => chain.chainId === chainId)?.iconUrl;
}
