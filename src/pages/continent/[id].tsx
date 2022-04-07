import { api } from '../../service/api'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { CardInfo } from '../../components/CardInfo'
import { CountryCard } from '../../components/CountryCard'
import { Box, Text, Flex, SimpleGrid } from '@chakra-ui/react'

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
  num_cities: string;
  num_countries: string;
  num_languages: string;
  languages: string;
  banner: string;
  cities: string;
  countries: Country[]
}

export default function Continent() {
  const [country, setCountry] = useState({} as CountryResponse)
  const [loading, setLoading] = useState(false)
  const { asPath } = useRouter()
  const countryName = asPath.split('/')[2]

  useEffect(() => {
    (async () => {
      setLoading(true)
      if (asPath !== '/continent/[id]') {
        const { data } = await api.get<CountryResponse[]>(`/continent?name=${countryName}`)
        data[0].name = data[0].name[0].toUpperCase() + data[0].name.slice(1).toLowerCase()
        setCountry(data[0])
      }
      setLoading(false)
    })()
  }, [countryName, asPath])


  return (
    <>
      <Header />
      { (country && !loading) && (
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
          <Flex maxW={1160} margin="0 auto" mt="80px" flexDir="column"> 
            <Flex>
              <Flex width="50%">
                <Text color="#47585B" fontSize={20} textAlign="justify">
                  {country.description}
                </Text>
              </Flex>
              <Flex width="50%" justify="center" align="center">
                <CardInfo 
                  title='países'
                  quantity={country.num_countries}
                />

                <CardInfo 
                  title='línguas'
                  quantity={country.num_languages}
                />

                <CardInfo 
                  title='cidades +100'
                  quantity={country.num_cities}
                />
              </Flex>
            </Flex>
            <Flex flexDir="column" mt="80px">
              <Text
                mb="40px"
                fontSize={36}
                color="#47585B"
                fontWeight="semibold"
              >
                Cidades {country.num_cities}
              </Text>
              
              <SimpleGrid columns={4} spacing={10}>
                { country.countries?.map((country, index) => {
                  return (
                    <CountryCard
                      key={index}
                      flag={country.flag}
                      city={country.city}
                      banner={country.banner}
                      country={country.country}
                    />
                  )
                }) }
              </SimpleGrid>
            </Flex>
          </Flex>
        </>
      ) }

      <Box mt="35px" />
    </>
  )
}