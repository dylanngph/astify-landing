import { useCallback } from 'react';
import { ChainId } from '@bionlabs/core-sdk';
import { useSwitchNetwork as useWagmiSwitchNetwork } from "wagmi";
import { useWeb3 } from './useWeb3';
import { useAtom } from 'jotai';
import { chainAtoms } from '@/storage/chains';


export const useSwitchNetwork =({
    ...args
  }): ReturnType<
    typeof useWagmiSwitchNetwork
  > => {
    const [, setChainAtom] = useAtom(chainAtoms);

    const { switchNetwork: wagmiSwitchNetwork, ...returns } =
      useWagmiSwitchNetwork({ ...args });

    const { chainId, account } = useWeb3();
  
    const switchNetwork = useCallback(
      (switchToChainId: number = ChainId.BSC) => {
        if (chainId === switchToChainId) return;
  
        if (account) {
          wagmiSwitchNetwork?.(switchToChainId);
        }
  
        setChainAtom(switchToChainId);
      },
      [account, chainId, setChainAtom, wagmiSwitchNetwork]
    );
    return { switchNetwork, ...returns };
  }
