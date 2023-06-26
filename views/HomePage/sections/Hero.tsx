import React from 'react'
import {
    Box,
    Container,
    HStack,
    Stack,
    VStack,
    Text,
    ButtonGroup,
    Button
} from '@chakra-ui/react'
import Image from 'next/image'

const Hero = () => {
  return (
    <Stack
        direction={{base: 'column', lg: 'row'}}
        alignItems='center'
        w="100%"
        py={{base: 12 , lg: 16}}
        pl={{base: 4 , lg: 12}}
        pr={{base: 4 , lg: 0}}
        gap='24px'
    >
        <VStack align='start' ml={{base: 0 , lg: 12}} pb={8} maxW={{base: '100%' , lg: '683px'}} spacing='24px'>
            <Text fontWeight={700} fontSize={{base: '42px' , lg: '60px'}} lineHeight={1.2}>
                A Trusted and secure cryptocurrency exchange.
            </Text>
            <Text fontSize={{lg: '18px'}} color='base.neutral.3'>
                Your guide to the world of an open financial system. Get started with the easiest and most secure platform to buy and trade cryptocurrency.
            </Text>
            <ButtonGroup spacing='24px'>
                <Button
                    variant='brand'
                    borderRadius='999px'
                    px={9}
                    py='18px'
                    h='fit-content'
                >
                    Trade now
                </Button>
                <Button
                    variant='outline'
                    borderRadius='999px'
                    px={9}
                    py='18px'
                    h='fit-content'
                >
                    Learn more
                </Button>
            </ButtonGroup>
        </VStack>
        <Box
            position='relative'
            zIndex='-1'
            top='0'
            right={{base: 0 , lg: '-120px'}}
            maxW='1200px'
            ml={{base: '0' , lg: '-90px'}}
        >
            <VStack
                mx={{base: 0 , lg: '1rem'}}
            >
                <Box>
                    <Image
                        alt='Hero Image'
                        src='/images/home/hero.png'
                        width={900}
                        height={720}
                    />
                </Box>
            </VStack>
        </Box>
    </Stack>
  )
}



export default Hero