import { Divider, Center, Text, Flex } from '@chakra-ui/layout'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Main from '../components/Main'
import Swiper from '../components/Swiper'

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Center height="50px" m={50}>
        <Divider orientation="horizontal" w="90px" />
      </Center>
      <Flex flexDir="column" align="center">
        <Text fontSize="36px">Vamos nessa?</Text>
        <Text fontSize="36px">Então escolha seu continente</Text>
      </Flex>
      <Swiper />
    </>
  )
}
