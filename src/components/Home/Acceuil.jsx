import * as React from 'react';
import './home.css';
import Carousel from '../slider/slider';

function Acceuil () {

    return (

        <section className="hero-wrapper gradient2">
          
        <div className="paddings innerwidth flexCenter hero-container ">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                    <h1>
                       Discover <br />
                       The universe of <br />
                       Motorcycling 
                    </h1>
                </div>
                <div className="hero-des">
                    <h1>
                    Find esily the best destination to your next Trip
                    </h1>
                    <h1>
                    Join the community and meet varity of people with the same passion
                    </h1>
                </div>

            </div>

            <div className="flexCenter hero-right">
                <div className='image-container'>
                <Carousel/>
                </div>
            </div>
        </div>
       </section>

    );
}

export default Acceuil;