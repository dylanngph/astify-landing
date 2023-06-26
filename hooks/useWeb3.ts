import { useMemo } from "react";
import { useAccount, useConfig, useNetwork, useWalletClient } from "wagmi";
import { useAtom } from "jotai";
import { chainAtoms } from "@/storage/chains";

export const useWeb3 = () => {
  const [chainAtom , setChainAtom] = useAtom(chainAtoms);
  const { chain: { id: chainId } = { id: chainAtom } } = useNetwork();

  const { data: signer } = useWalletClient();
  const config = useConfig();
  const provider = useMemo(() => {
    if (chainId && typeof config.args.publicClient === "function")
      return config.args.publicClient({ chainId });
    return config.publicClient;
  }, [chainId, config.args, config.publicClient]);

  const { address: account, isConnected } = useAccount();

  return {
    chainId,
    signer,
    account,
    isConnected,
    provider,
    ...useNetwork()
  };
};
