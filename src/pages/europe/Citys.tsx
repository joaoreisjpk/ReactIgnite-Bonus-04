import { Flex, Heading, SimpleGrid, Box, Image, Stack, Text } from '@chakra-ui/react';

export default function Citys() {
  return (
    <Flex flexDir="column" margin="auto" w={["95%", "95%", "95%", "90%", "85%"]}>
      <Heading mb={[5, 8, 10]} mt={20}>Cidades +100</Heading>
      <SimpleGrid columns={[1, 2, 3, 3, 4]} spacing={[10, 5, 10]}>
        <Box height="280px" border="1px #FFBA08" borderRadius="10px" w={256} bgColor="white">
          <Image src="/Foto.png" w={256} h={173}/>
          <Flex justify="space-between" align="center" p="1.5rem" h={107} alignContent="center">
            <Stack space="10px">
              <Text fontSize={20} weight="bold">Londres</Text>
              <Text fontSize={16} color="#999999">Reino Unido</Text>
            </Stack>
            <Image src="/Elipse.png" w={30} h={30}/>
          </Flex>
        </Box>
        <Box height="280px" border="1px #FFBA08" borderRadius="10px" w={256} bgColor="white">
          <Image src="/Foto.png" w={256} h={173}/>
          <Flex justify="space-between" align="center" p="1.5rem" h={107} alignContent="center">
            <Stack space="10px">
              <Text fontSize={20} weight="bold">Londres</Text>
              <Text fontSize={16} color="#999999">Reino Unido</Text>
            </Stack>
            <Image src="/Elipse.png" w={30} h={30}/>
          </Flex>
        </Box>
        <Box height="280px" border="1px #FFBA08" borderRadius="10px" w={256} bgColor="white">
          <Image src="/Foto.png" w={256} h={173}/>
          <Flex justify="space-between" align="center" p="1.5rem" h={107} alignContent="center">
            <Stack space="10px">
              <Text fontSize={20} weight="bold">Londres</Text>
              <Text fontSize={16} color="#999999">Reino Unido</Text>
            </Stack>
            <Image src="/Elipse.png" w={30} h={30}/>
          </Flex>
        </Box>
        <Box height="280px" border="1px #FFBA08" borderRadius="10px" w={256} bgColor="white">
          <Image src="/Foto.png" w={256} h={173}/>
          <Flex justify="space-between" align="center" p="1.5rem" h={107} alignContent="center">
            <Stack space="10px">
              <Text fontSize={20} weight="bold">Londres</Text>
              <Text fontSize={16} color="#999999">Reino Unido</Text>
            </Stack>
            <Image src="/Elipse.png" w={30} h={30}/>
          </Flex>
        </Box>
        <Box height="280px" border="1px #FFBA08" borderRadius="10px" w={256} bgColor="white">
          <Image src="/Foto.png" w={256} h={173}/>
          <Flex justify="space-between" align="center" p="1.5rem" h={107} alignContent="center">
            <Stack space="10px">
              <Text fontSize={20} weight="bold">Londres</Text>
              <Text fontSize={16} color="#999999">Reino Unido</Text>
            </Stack>
            <Image src="/Elipse.png" w={30} h={30}/>
          </Flex>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}
