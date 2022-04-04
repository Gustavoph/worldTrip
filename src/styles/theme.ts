import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'white',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
})
