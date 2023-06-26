import { useState } from "react";
import type { Connector } from "wagmi";
import { useWeb3 } from "./useWeb3";
import { useConnect as useWagmiConnect } from "wagmi";

interface Props {
  onSuccess?: () => void;
}

export const useConnect = ({ onSuccess }: Props) => {
  const { chainId } = useWeb3();
  const [selectedConnector, setSelectedConnector] = useState<Connector | null>(
    null
  );

  const { connect } = useWagmiConnect({
    onSuccess: onSuccess,
  });

  const handleConnect = (connector: Connector) => {
    connect({ connector, chainId });
    setSelectedConnector(connector);
  };

  return {
    ...useWagmiConnect(),
    handleConnect,
    selectedConnector,
    connect,
  };
};
