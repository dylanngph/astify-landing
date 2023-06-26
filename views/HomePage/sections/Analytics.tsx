"use client";

import React from "react";
import {
  Box,
  Container,
  VStack,
  Text,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

const Analytics = () => {
  const sampleData = [
    {
      title: "Trading Volume",
      value: 0,
      time: "Last 24 hours",
      currency: "$",
    },
    {
      title: "Traders",
      value: 0,
      time: "Last 24 hours",
      currency: undefined
    },
    {
      title: "Users",
      value: 0,
      time: "Last 24 hours",
      currency: undefined
    },
  ];

  return (
    <Container maxW="100%" px={{ base: 4, lg: 20 }} py={{ base: 3, lg: 4 }}>
      <VStack spacing="40px">
        <VStack>
          <Text fontSize={49} fontWeight={600}>
            Trusted by over 25,000 traders
          </Text>
          <Text>
            Become a crypto owner in minutes using your debit or credit card and
            quickly purchase top cryptocurrencies.
          </Text>
        </VStack>
        <Container maxW="container.xxl">
          <Stack
            borderRadius="20px"
            border="1px solid"
            borderColor="base.neutral.7"
            bg="rgba(0,0,0, .25)"
            backdropFilter="blur(2px)"
            w="100%"
            direction={{base: 'column' , lg: "row"}}
            divider={<StackDivider borderColor="base.neutral.6" />}
          >
            {sampleData.map((data, index) => (
              <VStack textAlign="center" key={index} w='100%' py={9} px={4}>
                <Text fontSize={20}>{data.title}</Text>
                <Text fontSize={40} fontWeight={600}>
                  {data.currency}{data.value}
                </Text>
                <Text fontSize={20} color="base.neutral.5">
                  {data.time}
                </Text>
              </VStack>
            ))}
          </Stack>
        </Container>
      </VStack>
    </Container>
  );
};

export default Analytics;
