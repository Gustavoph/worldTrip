import { types } from './data'
import { Flex, Image } from '@chakra-ui/react';
import { TravelType } from '../../components/TravelType';

export function Types() {
  return (
    <>
      <Flex pt="140" pb="80px" justify='space-between' align="center">
        { types.map(item => {
          return (
            <TravelType key={item.title} title={item.title}>
              <Image src={item.url} alt={item.alt} maxH='85' />
            </TravelType>
          )
        }) }
      </Flex>
    </>
  )
}