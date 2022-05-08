import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import saffron from '../../../images/premium/saffron.png';
import star from '../../../images/premium/star.png';
import green from '../../../images/premium/green.png';
import barberry from '../../../images/premium/barberry.png';
import paprika from '../../../images/premium/paprika.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./PremiumItems.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <div id="premiumItems" className="consumer-container container">
        <h1 className="my-5 text-center"><b>Premium Items</b></h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide className="swiper-container">
            <p className="d-flex fs-3 mt-4"><b>Saffron</b></p>
          <img className="review-img" src={saffron} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
            <p className="d-flex fs-3 mt-4"><b>Star Anise</b></p>
          <img className="review-img" src={star} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
            <p className="d-flex fs-3 mt-4"><b>Green Peppercorn</b></p>
          <img className="review-img" src={green} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
            <p className="d-flex fs-3 mt-4"><b>Barberry</b></p>
          <img className="review-img" src={barberry} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
            <p className="d-flex fs-3 mt-4"><b>Red Paprika</b></p>
          <img className="review-img" src={paprika} alt=""/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}