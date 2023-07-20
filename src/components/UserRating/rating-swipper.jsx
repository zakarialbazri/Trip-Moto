import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Grid from '@mui/material/Grid';
import Rating from './user-ratingg';
import style from './user-rating.css';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {

    const text = ["hey ", "hello","hhh","hhh","hhh","hhh"]
    const name = ["ziko", "saf","moha","moha","moha","moha"]

  return (
    
      <Swiper
        slidesPerView={3}
       
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        >
        
                <Grid container >
                    
                    {text.map((ele, i) =><SwiperSlide > <Rating  text={ele} name={name[i]}/></SwiperSlide>
                    )}        
                
                </Grid>
        
        
      </Swiper>
   
  );
}
