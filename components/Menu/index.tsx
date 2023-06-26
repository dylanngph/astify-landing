"use client";

import React, { Fragment } from "react";
import {
  Box,
  Text,
  Button,
  Container,
  HStack,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { menu } from "@/configs/menu";
import { usePathname } from "next/navigation";
import { useDevice } from "@/hooks/useDevice";
import { IoMenu } from "react-icons/io5";
import MainButton from "./MainButton";
import Link from "next/link";

const Menu = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isDesktop } = useDevice();

  return (
    <Fragment>
      <Wrapper
        bg="base.gray.500"
        borderBottom="1px solid"
        borderColor="base.gray.80"
      >
        <Container maxW="100%" px={{ base: 4, lg: 20 }} py={{ base: 3, lg: 4 }}>
          <HStack w="100%" justify="space-between" h="50px">
            <Link href="/" legacyBehavior>
              <Box cursor="pointer">
                <Image
                  src="/logo_light.svg"
                  alt="Astify Logo"
                  width={80}
                  height={27.8}
                />
              </Box>
            </Link>
            <HStack spacing='48px'>
              {!isDesktop ? (
                <IconButton
                  variant="tertiary"
                  aria-label="Navigation Menu"
                  icon={<IoMenu />}
                  fontSize={28}
                />
              ) : (
                <>
                  <ButtonGroup spacing="48px">
                    {isDesktop &&
                      menu.map((item, index) => {
                        const isActive =
                          item.href !== "/"
                            ? pathname.startsWith(item.href)
                            : pathname === item.href;
                        return (
                          <Link key={index} legacyBehavior href={item.href}>
                            <Button
                              variant="unstyled"
                              sx={{
                                ':after': {
                                  content: '""',
                                  display: 'block',
                                  position: 'absolute',
                                  bottom: '0',
                                  left: '0',
                                  width: '100%',
                                  height: '2px',
                                  bg: 'brand.400',
                                  opacity: isActive ? 1 : 0,
                                }
                              }}
                              transition={'opacity 0.2s ease'}
                              _hover={{
                                ':after': {
                                  opacity: 1,
                                }
                               }}
                              fontWeight={500}
                            >
                              {item.title}
                            </Button>
                          </Link>
                        );
                      })}
                  </ButtonGroup>
                  {/* <MainButton /> */}
                  <Button
                    variant="brand"
                    px='36px'
                    py='12px'
                    borderRadius='999px'
                  >
                    Trade
                  </Button>
                </>
              )}
            </HStack>
          </HStack>
        </Container>
      </Wrapper>
      <Box pt="82px">{children}</Box>
    </Fragment>
  );
};

const Wrapper = styled(Box)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  display: flex;
  align-items: center;
  height: 82px;
`;

export default Menu;
