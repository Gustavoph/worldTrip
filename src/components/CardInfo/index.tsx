import { Flex, Text } from '@chakra-ui/react';

interface CardInfoProps {
  title: string;
  quantity: string;
}

export function CardInfo({ title, quantity }: CardInfoProps) {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mr="40px"
    >
      <Text
        fontSize={48}
        color="#FFBA08"
        fontWeight="semibold"
      >
        {quantity}
      </Text>
      <Text
        fontSize={20}
        color="#47585B"
        fontWeight="semibold"
      >
        {title}
      </Text>
    </Flex>
  )
}