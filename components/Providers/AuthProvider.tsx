"use client";

import { useWeb3 } from "@/hooks/useWeb3";
import { chainAtoms } from "@/storage/chains";
import { useAtom } from "jotai";
import React, { Fragment, use, useEffect, useMemo } from "react";
import { supportedChains } from "./Web3Provider";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { ChainId } from "@bionlabs/core-sdk";
import { useSwitchNetwork } from "@/hooks/useSwitchNetwork";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { chainId } = useWeb3();
  const [chain, setChain] = useAtom(chainAtoms);

  const { switchNetwork } = useSwitchNetwork({
    onSuccess() {
      onClose();
    },
  });

  const supportedChainsArray = useMemo(
    () => [...Object.entries(supportedChains).map(([_, value]) => value)],
    []
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (supportedChainsArray.some((chain) => chain.id === chainId)) {
      return onClose();
    } else return onOpen();
  }, [chainId, onClose, onOpen, supportedChainsArray]);


  //Check if current chain id different from storage's chain id, then switch to match
  useEffect(() => {
    if(chainId !== chain) {
      setChain(chainId);
    }
  }, [chain, chainId, setChain])
  

  return (
    <Fragment>
      {children}
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upsupported Network</ModalHeader>
          <ModalBody>
            <Text>Please switch to default network (BSC) to use this app.</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="primary"
              onClick={() => switchNetwork?.(ChainId.BSC)}
            >
              Switch to default network
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};
