import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { Box, Text, Flex } from '@chakra-ui/react'

type Country = {
  id: number;
  country: string;
  city: string;
  banner: string;
  flag: string;
}

interface CountryResponse {
  id: number;
  name: string;
  description: string;
  num_countries: string;
  languages: string;
  banner: string;
  cities: string;
  countries: Country[]
}

export default function Continent() {
  const [country, setCountry] = useState({} as CountryResponse)
  const { asPath } = useRouter()
  const countryName = asPath.split('/')[2]
  console.log(asPath)

  useEffect(() => {
    (async () => {
      if (asPath !== '/continent/[id]') {
        const { data } = await api.get<CountryResponse[]>(`/continent?name=${countryName}`)
        data[0].name = data[0].name[0].toUpperCase() + data[0].name.slice(1).toLowerCase()
        setCountry(data[0])
      }
    })()
  }, [countryName, asPath])

  return (
    <>
      <Header />
      { country && (
        <>
          <Box 
            w="100%"
            h={500}
            bgSize="cover"
            bgPosition="center"
            bgImage={`url('${country.banner}')`}
          >
            <Box maxW={1160} margin="0 auto">
              <Text
                pt="380"
                fontSize={48}
                fontWeight="semibold"
              >
                {country.name}
              </Text>
            </Box>
          </Box>

          <Flex maxW={1160} margin="0 auto" mt="80px">
            <Flex width="50%">
              <Text color="#47585B" fontSize={20} textAlign="justify">
                {country.description}
              </Text>
            </Flex>
            <Flex width="50%" justify="center" align="center">
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
                  {country.num_countries}
                </Text>
                <Text
                  fontSize={20}
                  color="#47585B"
                  fontWeight="semibold"
                >
                  países
                </Text>
              </Flex>

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
                  {country.languages}
                </Text>
                <Text
                  fontSize={20}
                  color="#47585B"
                  fontWeight="semibold"
                >
                  línguas
                </Text>
              </Flex>

              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  fontSize={48}
                  color="#FFBA08"
                  fontWeight="semibold"
                >
                  {country.cities}
                </Text>
                <Text
                  fontSize={20}
                  color="#47585B"
                  fontWeight="semibold"
                >
                  cidades +100
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </>
      ) }
    </>
  )
}