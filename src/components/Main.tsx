import { Flex, Box, Image } from '@chakra-ui/react'
import React from 'react'

export default function Main(): JSX.Element {
  return (
    <Flex width={["85%"]} m="auto" justify="space-between" mt="5rem">
      <Box>
        <Image src="/Nightlife.png" alt="Segun Adebayo"/>
      </Box>
      <Box>
        <Image src="/Beach.png" alt="Segun Adebayo"/>
      </Box>
      <Box>
        <Image src="/Modern.png" alt="Segun Adebayo"/>
      </Box>
      <Box>
        <Image src="/Classic.png" alt="Segun Adebayo"/>
      </Box>
      <Box>
        <Image src="/More.png" alt="Segun Adebayo"/>
      </Box>
    </Flex>
  )
}
