import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper as SwiperTag, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

/* import "./styles.css"; */


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';
import { Box, Image, Text, Flex } from "@chakra-ui/react";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

export default function Swiper() {
  return (
    <Box w="85%" h={600} margin="50px auto">
      <SwiperTag
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
        "clickable":
        true
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
            bgImage="url('/NorthAmerica.jpg')"
            bgSize="100%"
            h={600}
            w={1143}
            color="white.900"
            align="center"
            justify="center"
          >
            <Text fontSize="50px" color="white" textShadow="2px 2px #181b23">America do Norte</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/SouthAmerica.jpg')"
            bgSize="100%"
            h={600}
            w={1143}
            color="white.900"
            align="center"
            justify="center"
          >
            <Text fontSize="50px" color="white" textShadow="2px 2px #181b23">America do Sul</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/Africa.jpg')"
            bgSize="100%"
            h={600}
            w={1143}
            color="white.900"
            align="center"
            justify="center"
          >
            <Text fontSize="50px" color="white" textShadow="2px 2px #181b23">Africa</Text>
          </Flex >
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/Asia.jpg')"
            bgSize="100%"
            h={600}
            w={1143}
            color="white.900"
            align="center"
            justify="center"
          >
            <Text fontSize="50px" color="white" textShadow="2px 2px #181b23">Asia</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/Europe.jpg')"
            bgSize="100%"
            h={600}
            w={1143}
            color="white.900"
            align="center"
            justify="center"
          >
            <Text fontSize="50px" color="white" textShadow="2px 2px #181b23">Europe</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url('/Oceania.jpg')"
            bgSize="100%"
            h={600}
            w={1143}
            color="white.900"
            align="center"
            justify="center"
          >
            <Text fontSize="50px" color="white" textShadow="2px 2px #181b23">Oceania</Text>
          </Flex>
        </SwiperSlide>
      </SwiperTag>
    </Box>
  )
}
