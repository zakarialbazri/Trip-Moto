import React from 'react';
import './home.css';
import AboutUs from '../AboutUs/AboutUs'
import BestOf from '../OurBestOf/bestof';
import FAQ from '../FAQ/FAQ';
import SliderComponent from '../slider2/page';



const Hero = () => {

    

    return(
    <>
    
       <SliderComponent />
       <AboutUs />
       <BestOf />
       <FAQ />

       
       </>
    )
}

export default Hero;