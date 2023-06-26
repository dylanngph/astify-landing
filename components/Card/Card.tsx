import { Box } from '@chakra-ui/react'
import React from 'react'

export const Card = (props:any) => {
  return (
    <Box
        bg='base.gray.100'
        borderRadius='12px'
        {...props}
    />
  )
}
