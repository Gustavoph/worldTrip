import { Carrousel } from '../components/Carrousel';
import { Box, Center } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from './home/Banner';
import { Types } from './home/Types';

export default function Home() {
  return (
    <Box flexDir="column">
      <Header />

      <Box
        w="100%"
        h="368"
        bgSize="cover"
        position="relative"
        bgImage="url('/images/Background.svg')"
      >
        <Box maxW="1240" h="100%" margin="0 auto">
          <Banner />
          <Types />
          <Center
            w='90px'
            mx='auto'
            borderTopWidth='2px'
            borderColor='gray.600' 
          />
          <Box mb="10">
            <Carrousel />
          </Box>
          <Center w='40px' mx='auto' borderTopWidth='2px'></Center>
        </Box>
      </Box>
    </Box>
  );
}
