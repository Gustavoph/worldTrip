import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react'

interface TravelTypeProps {
  children: ReactNode;
  title: string;
}

export function TravelType({ children, title }: TravelTypeProps) {
  return (
    <>
      <Flex
        w={200}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        {children}
        <Text
          mt="24px"
          fontSize={20}
          color="#47585B"
          fontWeight="semibold"
        >
          {title}
        </Text>
      </Flex>
    </>
  )
}