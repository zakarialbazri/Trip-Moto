import React from 'react';
import './page.css';

function SliderComponent () {
    return (
        <section className='slider-container'>
        <div className="slider-one">
          <div className="slider-one-image">
            <div className="slider-text">
              <h1>Discover The universe of Motorcycling. </h1>
              <p>Find esily the best destination to your next Trip.</p>
            </div>
          </div>
        </div>
        <div className="slider-two">
          <div className="slider-two-image">
            <div className="slider-text">
              <h1>Rev up your adventure with MotoVenter! </h1>
              <p>Discover thrilling roads, breathtaking landscapes, and hidden gems to explore on your two-wheeled journey.</p>
            </div>
          </div>
        </div>
        <div className="slider-three">
          <div className="slider-three-image">
            <div className="slider-text">
              <h1>Share your ideal trip ideas</h1>
              <p> Let the wind guide your wanderlust as you find endless inspiration for your next unforgettable ride.</p>
            </div>
          </div>
        </div>
        <div className="slider-four">
          <div className="slider-four-image">
            <div className="slider-text">
              <h1> Join the community.</h1>
              <p>Meet varity of people with the same passion.</p>
            </div>
          </div>
        </div>
    </section>
    );
  };
  
  export default SliderComponent;