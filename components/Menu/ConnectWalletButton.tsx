"use client";

import React, { Fragment } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  IconButton,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { IoClose, IoWalletOutline } from "react-icons/io5";
import { ImInfo } from "react-icons/im";
import Image from "next/image";
import { getConnectorIcon } from "@/utils/connectors";
import { useConnect } from "@/hooks/useConnect";
import { useAtom } from "jotai";
import { chainAtoms } from "@/storage/chains";

const ConnectWalletButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { connect, connectors } = useConnect({});

  return (
    <Fragment>
      <Button variant="brand" onClick={onOpen} borderRadius='999px' px={9}>
        Trade
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          sx={{
            border: "1px solid",
            borderColor: "base.neutral.6",
          }}
        >
          <ModalHeader
            borderBottom="1px solid"
            borderColor="base.neutral.6"
            py={6}
          >
            <HStack w="100%" justify="space-between">
              <IconButton
                aria-label="Info"
                icon={<ImInfo />}
                fontSize={24}
                variant="tertiary"
                color="base.neutral.5"
                _hover={{ color: "base.neutral.6" }}
              />
              <Text fontSize={24} fontWeight={500}>
                Connect Wallet
              </Text>
              <IconButton
                aria-label="Close"
                icon={<IoClose />}
                fontSize={28}
                variant="tertiary"
                color="base.neutral.5"
                _hover={{ color: "base.neutral.6" }}
                onClick={onClose}
              />
            </HStack>
          </ModalHeader>
          <ModalBody pt={6}>
            <VStack>
              {connectors.map((connector, index) => {
                return (
                  <Button
                    key={index}
                    variant="solid"
                    w="100%"
                    onClick={() => connect({ connector })}
                    fontWeight={400}
                    py={4}
                    px={6}
                    h="fit-content"
                    bg="base.neutral.6"
                    border="1px solid"
                    borderColor="base.neutral.5"
                    justifyContent="space-between"
                  >
                    {connector.name}
                    <Image
                      src={getConnectorIcon(connector.id)}
                      width={32}
                      height={32}
                      alt={connector.name}
                    />
                  </Button>
                );
              })}
            </VStack>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              variant="tertiary"
              color="base.neutral.5"
              _hover={{ color: "base.neutral.6" }}
              fontWeight={400}
              fontSize={14}
              size="sm"
              leftIcon={<Icon as={IoWalletOutline} fontSize={18} />}
            >
              I don&apos;t have a wallet
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default ConnectWalletButton;
