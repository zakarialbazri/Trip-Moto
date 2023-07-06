import React from 'react';
import Style from './style.css';
import Navbar from './navbar'


const Hero = () => {

    return(
       <section className="hero-wrapper">
          <Navbar />
        <div className="paddings innerwidth flexCenter hero-container ">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                    <h1>
                       Discover <br />
                       The universe of <br />
                       Motocycling 
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find esily the best destination to your next stroll</span>
                    <span className='secondaryText'>Join the community and meet varity of people with the same passion</span>
                </div>

            </div>

            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="https://w0.peakpx.com/wallpaper/410/327/HD-wallpaper-motorcycle-motorcyclist-road-mountains.jpg" alt="" />
                </div>
            </div>
        </div>
       </section> 
    )
}

export default Hero;