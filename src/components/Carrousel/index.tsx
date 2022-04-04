import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from './styles.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Text } from '@chakra-ui/react';
import { CarroselItem } from '../CarroselItem';
import { continents } from './data'
import Link from 'next/link';

export function Carrousel() {
  return (
    <Box>
      <Text color="gray.600" m="52px" fontSize="4xl" textAlign="center">
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
      <Swiper
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className={styles.carousel}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        { continents.map(continent => {
          return (
            <SwiperSlide key={continent.title}>
              <Link href={continent.to} passHref>
                <a>
                  <CarroselItem 
                    url={continent.url}
                    title={continent.title}
                    content={continent.content}
                  />
                </a>
              </Link>
            </SwiperSlide>
          )
        }) }
      </Swiper>
    </Box>
  )
}