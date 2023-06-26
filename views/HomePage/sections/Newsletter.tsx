"use client";

import React from "react";
import {
  Container,
  Text,
  Box,
  Stack,
  VStack,
  Grid,
  GridItem,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <Container maxW="container.xxl" pb={{ base: "70px", lg: "8rem" }}>
      <VStack>
        <VStack textAlign="center" maxW="700px" spacing={6}>
          <Text>Ready to start trading cryptocurrency?</Text>
          <Text fontWeight={600} fontSize={42}>
            New users can earn up to $80 in crypto rewards.
          </Text>
          <InputGroup>
            <Input
              variant="filled"
              placeholder="Enter your email:"
              bg="base.gray.transparent"
              borderRadius="999px"
              border="1px solid"
              borderColor="base.gray.80"
              h="63px"
              pl={5}
            />
            <InputRightElement
              h="fit-content"
              w="fit-content"
              top="17%"
              right="3%"
            >
              <Button variant="brand" borderRadius="999px">
                Get started
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Newsletter;
