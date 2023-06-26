"use client";

import React from "react";
import { Chain, configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, bsc, bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import ClientOnly from "../ClientOnly";

export const supportedChains = {
  ethereum: mainnet,
  bsc,
  bscTestnet,
  polygon,
  optimism,
  arbitrum,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [...Object.entries(supportedChains).map(([_, value]) => value)],
  [publicProvider()]
);

const connectors = [
  new MetaMaskConnector({
    chains,
    options: {
      shimDisconnect: true,
      UNSTABLE_shimOnConnectSelectAccount: true,
    },
  }),
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: "bionstart",
    },
  }),
];

export const chainInfo = [
  {
    chainId: supportedChains.bsc.id,
    iconUrl: "/images/chains/bsc.svg",
    name: "Binance Smart Chain",
  },
  {
    chainId: supportedChains.ethereum.id,
    iconUrl: "/images/chains/ethereum.svg",
    name: "Ethereum",
  },
  {
    chainId: supportedChains.polygon.id,
    iconUrl: "/images/chains/polygon.svg",
    name: "Polygon",
  },
  {
    chainId: supportedChains.bscTestnet.id,
    iconUrl: "/images/chains/bsc.svg",
    name: "Binance Smart Chain Testnet",
  },
  {
    chainId: supportedChains.arbitrum.id,
    iconUrl: "/images/chains/arbitrum.svg",
    name: "Arbitrum",
  },
  {
    chainId: supportedChains.optimism.id,
    iconUrl: "/images/chains/optimism.svg",
    name: "Optimism",
  }
];

export const web3Config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export const CHAIN_INFO_MAP: { [chainId: number]: Chain } = chains.reduce(
  (o, chain: any) => {
    o[chain.id] = chain;
    return o;
  },
  {} as any
);

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientOnly>
      <WagmiConfig config={web3Config}>{children}</WagmiConfig>
    </ClientOnly>
  );
};

export default Web3Provider;
