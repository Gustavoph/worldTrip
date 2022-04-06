import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface CountryCardProps {
  banner: string;
  city: string;
  flag: string;
  country: string;
}

export function CountryCard({ banner, city, country, flag }: CountryCardProps) {
  return (
    <>
      <Box w="256px" h="279px"  border="1px solid #FFBA08" borderRadius={5}>
        <Box h="173px">
          <img src={banner} alt="" />
        </Box>
        <Flex h="106px">
          <Flex flexDir="column" width="70%" pl="24px" pt="18px">
            <Text
              mb="12px"
              fontSize={18}
              color="#47585B"
              fontWeight="semibold"
            >
              {country}
            </Text>

            <Text
              fontSize={14}
              color="#999999"
            >
              {city}
            </Text>
          </Flex>
          <Flex width="30%" justify="center" align="center">
            <Image src={flag} alt="" w='30px' h="30px" />
          </Flex>
        </Flex>
      </Box>
    </>
  )
}