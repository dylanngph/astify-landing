"use client";

import React from "react";
import { Box, Text, Stack, Container, VStack, HStack } from "@chakra-ui/react";
import Image from "next/image";

const About = () => {
  const about1 = [
    {
      title: "Confidence",
      description:
        "Our markets are always up to date, sparking curiosity with real-world relevance.",
      icon: "/images/home/confident_icon.svg",
    },
    {
      title: "Community",
      description:
        "We supports the crypto community, putting data in the hands which need it most.",
      icon: "/images/home/community_icon.svg",
    },
  ];

  const about2 = [
    {
      title: "Start buying & selling",
      icon: "/images/home/wallet.svg",
    },
    {
      title: "Link your bank account",
      icon: "/images/home/bank.svg",
    },
    {
      title: "Create an account",
      icon: "/images/home/add_user.svg",
    },
  ];

  return (
    <Container maxW="container.xxl" my={{ base: "70px", lg: "279px" }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        gap="24px"
        alignItems="center"
      >
        <VStack align="start" maxW="675px">
          <Text fontSize={48} fontWeight={500}>
            We are the most trusted cryptocurrency platform.
          </Text>
          <Text fontSize={18}>
            We believe Asitfy is here to stay — and that a future worth building
            is one which opens its doors and invites everyone in.
          </Text>
          <VStack align="start" spacing="24px" mt="40px">
            {about1.map((item, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                spacing="24px"
                maxW="100%"
              >
                <HStack bg="base.gray.transparent" p="28px" borderRadius="12px">
                  <Image
                    alt="About Icon"
                    src={item.icon}
                    width={30}
                    height={30}
                  />
                </HStack>
                <VStack align="start">
                  <Text fontSize={18} fontWeight={600}>
                    {item.title}
                  </Text>
                  <Text fontSize={16} color="base.neutral.5">
                    {item.description}
                  </Text>
                </VStack>
              </Stack>
            ))}
          </VStack>
        </VStack>
        <Box>
          <Image
            alt="About Image"
            src="/images/home/about1.svg"
            width={620}
            height={620}
          />
        </Box>
      </Stack>
      <Stack
        direction={{ base: "column", lg: "row" }}
        gap="24px"
        alignItems="center"
        justifyContent='space-between'
        mt='200px'
      >
        <Box>
          <Image
            alt="About Image"
            src="/images/home/about2.svg"
            width={560}
            height={560}
          />
        </Box>
        <VStack align="start" maxW="649px">
          <Text fontSize={48} fontWeight={500}>
          One click, instant payout with credit or debit card.
          </Text>
          <Text fontSize={18}>
          Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.
          </Text>
          <VStack align="start" spacing="24px" mt="40px">
            {about2.map((item, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                spacing="24px"
              >
                <HStack bg="base.gray.transparent" p="28px" borderRadius="50%">
                  <Image
                    alt="About Icon"
                    src={item.icon}
                    width={30}
                    height={30}
                  />
                </HStack>
                <VStack align="start">
                  <Text fontSize={18} fontWeight={600}>
                    {item.title}
                  </Text>
                </VStack>
              </Stack>
            ))}
          </VStack>
        </VStack>
        
      </Stack>
    </Container>
  );
};

export default About;
