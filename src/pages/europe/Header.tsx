import { Flex, Box, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <Box position="absolute" mt={35} ml="7.5%">
        <Image src="/Backbtn.png" alt="Segun Adebayo"/>
      </Box>
      <Flex as="header" color="white.50" h={100} align="center" justifyContent="space-around">
        <Box w={200} h={46}>
          <Image src="/Logo.png" alt="Segun Adebayo"/>
        </Box>
      </Flex>
    </>
  )
}
