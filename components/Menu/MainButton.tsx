"use client";

import React, { Fragment } from "react";
import {
  useDisclosure,
  Box,
  Stack,
  Skeleton,
  StackDivider,
  HStack,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  VStack,
} from "@chakra-ui/react";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import ConnectWalletButton from "./ConnectWalletButton";
import { shortenAddress } from "@/utils/format";
import Image from "next/image";
import { getConnectorIcon } from "@/utils/connectors";
import { HiChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import { useWeb3 } from "@/hooks/useWeb3";
import { getChainIcon } from "@/utils/chains";
import { CHAIN_INFO_MAP } from "../Providers/Web3Provider";

const MainButton = () => {
  //Menu trigger
  const { isOpen, onOpen, onClose } = useDisclosure();

  //get web3 info
  const { account, chainId } = useWeb3();
  const { connector: activeConnector } = useAccount();

  //fecth balance
  const { data: balance, isFetching } = useBalance({ address: account });

  //disconnect wallet
  const { disconnect } = useDisconnect();

  if (!account) return <ConnectWalletButton />;

  return (
    <Fragment>
      <Menu placement="bottom-end" autoSelect={false}>
        <MenuButton
          as={Button}
          variant="unstyled"
          h="fit-content"
          bg="base.neutral.8"
          _hover={{
            bg: "base.neutral.7",
          }}
          _active={{
            bg: "base.neutral.7",
          }}
        >
          <Stack
            direction="row"
            align="center"
            onClick={onOpen}
            p={0}
            border="1px solid"
            borderColor="base.neutral.6"
            borderRadius="8px"
            divider={<StackDivider borderColor="base.neutral.6" />}
          >
            <HStack pl={5} pr={3} py={3} color="base.neutral.4">
              {isFetching ? (
                <Skeleton h="20px" w="50px" />
              ) : (
                <Text>{Number(balance?.formatted).toFixed(3)}</Text>
              )}
              <Text>{balance?.symbol}</Text>
            </HStack>
            <HStack pl={3} pr={5} py={3}>
              {activeConnector && (
                <Image
                  src={getConnectorIcon(activeConnector.id)}
                  alt={activeConnector.name}
                  width={21}
                  height={21}
                />
              )}
              <Text fontWeight={600}>{shortenAddress(account)}</Text>
              <Icon as={HiOutlineChevronDown} />
            </HStack>
          </Stack>
        </MenuButton>
        <MenuList bg="base.neutral.7" p={4} borderRadius='12px' minW='300px'>
          <VStack w='100%' spacing={4}>
            <VStack align="start" w="100%">
              <Text color="neutral.300" fontSize={14}>
                Current Network
              </Text>
              <StyledMenuItem>
                <HStack w="100%" spacing="12px" justify="space-between">
                  <HStack w="100%" spacing="12px">
                    <Box position="relative">
                      {
                        CHAIN_INFO_MAP[chainId]?.id ? (
                        <Image
                          src={getChainIcon(CHAIN_INFO_MAP[chainId].id) ?? ''}
                          alt={`chain:${chainId.toString()}`}
                          width={32}
                          height={32}
                        />
                        ):
                          null
                      }
                      
                      {/* <ActiveDot
                            boxShadow={
                              colorMode == "dark"
                                ? "rgb(35, 35, 38) 0px 0px 0px 2px"
                                : "rgb(255, 255, 255) 0px 0px 0px 2px"
                            }
                          /> */}
                    </Box>
                    <Text fontWeight={600}>{CHAIN_INFO_MAP[chainId]?.name}</Text>
                  </HStack>
                  <Icon as={HiChevronRight} color="neutral.300" />
                </HStack>
              </StyledMenuItem>
            </VStack>
            <StyledMenuItem onClick={disconnect}>Logout</StyledMenuItem>
          </VStack>
          
        </MenuList>
      </Menu>
    </Fragment>
  );
};

const StyledMenuItem = (props: any) => {
  return (
    <MenuItem
      p="12px"
      borderRadius="8px"
      border="1px solid"
      borderColor="base.neutral.6"
      bg="base.neutral.6"
      _hover={{
        bg: "base.neutral.5",
      }}
      {...props}
    />
  );
};

export default MainButton;
