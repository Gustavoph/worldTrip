import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io'
import { IconButton } from '@chakra-ui/react'

export function Header() {
  const { asPath, push } = useRouter()

  return (
    <Flex
      h='100px'
      w='100%'
      align='center'
      justify='center'
    >
      { asPath !== '/' && (
        <IconButton
        colorScheme='transparent'
        aria-label='back to home'
        position='absolute'
        left="200"
        top="30"
        onClick={() => push('/')}
        icon={<IoIosArrowBack color="black" size="24"/>}
        />
      ) }
      <img
        src="/images/Logo.svg"
        alt="Logo"
      />
    </Flex>
  )
}