import { Flex } from '@chakra-ui/react';
import React from 'react';

export default function Banner() {
  return (
    <Flex
      flexDir="column"
      h={[230, 300, 370, 440, 500]}
      bgImage="url('/Banner.png')"
      bgSize="auto 100%"
      bgRepeat={"no-repeat"}
    >
    </Flex>
  )
}
