import { Box, Flex, Text } from '@chakra-ui/react';

interface CarroselItemProps {
  url: string;
  title: string;
  content: string;
}

export function CarroselItem({ url, title, content }: CarroselItemProps) {
  return (
    <Box
      w="100%"
      h="100%"
      bgSize="cover"
      position="relative"
      bgImage={`url(${url})`}
    >
      <Flex
        h="100%"
        align="center"
        justify="center"
        flexDir="column"
      >
        <Text
          color="white"
          fontSize="48px"
          fontWeight="bold"
          textAlign="center"
        >
          {title}
        </Text>

        <Text
          color="white"
          fontSize="24px"
          fontWeight="bold"
          textAlign="center"
        >
          {content}
        </Text>
      </Flex>
    </Box>
  )
}