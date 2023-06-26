'use client';


import React from 'react'
import {
    Container,
    Text,
    Box,
    Stack,
    VStack,
    Grid,
    GridItem
} from '@chakra-ui/react'
import Image from 'next/image';

const Backers = () => {
  return (
    <Container maxW='container.xxl' py={{ base: "70px", lg: "8rem" }}>
        <VStack textAlign='center'>
            <Text fontWeight={600} fontSize={42}>
                Backed by the best
            </Text>
            <Text>
                Our global investors include angel investors & leading funds
            </Text>
            <Grid
                gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            >
                {
                    [1,2,3,4,5,6,7,8].map((item, index) => (
                        <GridItem key={index}>
                            <Image
                                src='/images/home/OKX.svg'
                                alt=''
                                width={200}
                                height={200}
                            />
                        </GridItem>
                    ))
                }
            </Grid>
        </VStack>
    </Container>
  )
}

export default Backers