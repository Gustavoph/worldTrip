import { Box, Flex, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <>
      <Flex
        w="50%"
        h="100%"
        align="center"
        justify="center"
        flexDir="column"
      >
        <Box>
          <Text
            mb="5"
            align="left"
            fontSize="36"
            fontWeight="500"
          >
            6 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text align="left" fontSize="20">
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Box>
      </Flex>

      <Image
        src="/images/Airplane.svg"
        alt="Airplane"
        position="absolute"
        bottom="-30"
        right="140"
      />
    </>
  )
}