import { Flex, Box, Image } from '@chakra-ui/react';
import Logo from "../images/Logo.png"

export default function Header() {
  return (
    <Flex as="header" color="white.50" h={100} align="center" justifyContent="space-around">
      <Box w={200} h={46}>
        <Image src="/Logo.png" alt="Segun Adebayo"/>
      </Box>
    </Flex>
  )
}
