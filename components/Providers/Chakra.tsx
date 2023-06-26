// app/providers.tsx
'use client'

import { theme } from '@/configs/theme/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Chakra({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}