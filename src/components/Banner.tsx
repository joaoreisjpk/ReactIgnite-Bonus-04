import { Flex, Image, Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function Banner(): JSX.Element {
  return (
    <Flex
      flexDir="column"
      h={368}
      bgImage="url('/bannerBg.jpg')"
      bgPosition="100% 30%"
    >
      <Flex w={["85%"]} margin="auto"maxWidth={1440} p="3.5rem" color="white" justify="space-between">
        <Box maxWidth="525px" fontWeight="500">
          <Text fontSize={36}>
            5 Continentes, infinitas possibilidades
          </Text>
          <Text fontSize={20} mt="2rem">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>
        <Box>
          <Image src="/Airplane.png" alt="Segun Adebayo"/>
        </Box>
      </Flex>
    </Flex>
  )
}
