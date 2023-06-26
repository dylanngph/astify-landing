"use client";

import React from "react";
import {
  Container,
  Text,
  Stack,
  Box,
  VStack,
  HStack,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  StackDivider,
} from "@chakra-ui/react";
import Image from "next/image";
import { menu } from "@/configs/menu";
import {AiOutlineTwitter, AiOutlineMedium} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'



const Footer = () => {
  return (
    <Box
      bg="base.neutral.8"
      py={24}
      borderTop="1px solid"
      borderColor="base.neutral.6"
    >
      <Container maxW="container.xxl">
        <Stack
            direction='column'
            divider={<StackDivider borderColor="base.neutral.6" />}
            gap='85px'
        >
            <Stack
            w="100%"
            direction={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            >
            <VStack align='start' spacing='27px'>
                <Box>
                <Image
                    src="/logo_light.svg"
                    alt="Astify Logo"
                    width={100}
                    height={50}
                />
                </Box>
                <Text fontSize={14}>
                    Your best crypto partner.
                </Text>
                <HStack>
                    <AiOutlineTwitter color='white' fontSize={24}/>
                    <AiOutlineMedium color='white' fontSize={24}/>
                    <FaTelegramPlane color='white' fontSize={24}/>
                </HStack>
            </VStack>
            <Stack direction={{ base: "column", lg: "row" }} gap={44}>
                <VStack align="start" spacing={6}>
                <Text fontSize={16} fontWeight={500}>
                    Quick Links
                </Text>
                <VStack align="start" spacing={4}>
                    {menu.map((item, index) => {
                    return (
                        <Button
                        key={index}
                        variant="link"
                        fontSize={14}
                        fontWeight={400}
                        color='base.neutral.5'
                        >
                        {item.title}
                        </Button>
                    );
                    })}
                </VStack>
                </VStack>
                <VStack align="start" spacing={6}>
                    <Text fontSize={16} fontWeight={500}>
                        Submit for updates.
                    </Text>
                    <Text color='base.neutral.5' fontSize={14}>
                        Subscribe to get update and notify our exchange and products
                    </Text>
                    <InputGroup>
                        <Input
                            variant='filled'
                            placeholder='Enter your email:'
                            bg='base.gray.transparent'
                            borderRadius='999px'
                            border='1px solid'
                            borderColor='base.gray.80'
                            h='63px'
                            pl={5}
                        />
                        <InputRightElement
                            h='fit-content'
                            w='fit-content'
                            top='17%'
                            right='3%'
                        >
                            <Button
                                variant='brand'
                                borderRadius='999px'
                            >
                                Send
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    
                </VStack>
            </Stack>
            </Stack>
            <Stack direction={{base: 'column' , lg: 'row'}} justifyContent='space-between' alignItems='center'>
                <Text color='base.neutral.5'>
                    Atisfy ©. All rights reserved.
                </Text>
                <Stack
                    direction='row'
                    divider={<StackDivider borderColor="base.neutral.6" />}
                    alignItems='center'
                >
                    <Button
                        variant='link'
                        color='base.neutral.5'
                    >
                        Term of service
                    </Button>
                    <Button
                        variant='link'
                        color='base.neutral.5'
                    >
                        Privacy Policy
                    </Button>
                </Stack>
            </Stack>
        </Stack>
        
      </Container>
    </Box>
  );
};

export default Footer;
