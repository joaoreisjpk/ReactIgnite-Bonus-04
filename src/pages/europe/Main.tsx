import React, { Component } from 'react'
import { Flex, Box, Text, Stack, HStack } from '@chakra-ui/react';

export class Main extends Component {
  render() {
    return (
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        w={["95%",
        "95%",
        "95%",
        "90%",
        "85%"]}
        margin="auto"
        align="center"
        maxWidth={1440}
        pt={["2.5rem", "3.5rem"]}
        pb={["1rem", "1rem", "1rem", "2.5rem", "3.5rem", ]}
        justify="space-between"
      >
        <Box maxWidth="525px" fontWeight="500">
          <Text fontSize={24}>
            A europa é, por convenção, um dos seis continentes do mundo. Compeendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
        </Box>
        <HStack spacing={[30, 50, 50, 70]}>
          <Stack spacing={0}>
            <Text color="#FFBA08" fontSize={48} align="center">
              50
            </Text>
            <Text as="span" align="center">
              países
            </Text>
          </Stack>
          <Stack spacing={0}>
            <Text color="#FFBA08" fontSize={48} align="center">
              60
            </Text>
            <Text as="span" align="center">
              línguas 
            </Text>
          </Stack>
          <Stack spacing={0}>
            <Text color="#FFBA08" fontSize={48} align="center">
              27
            </Text>
            <Text as="span" align="center">
              cidades + 100
            </Text>
          </Stack>
        </HStack>
      </Flex>
    )
  }
}

export default Main
