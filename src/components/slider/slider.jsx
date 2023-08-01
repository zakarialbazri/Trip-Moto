import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";
import './slider.css';

function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // Auto-slide delay in milliseconds (e.g., 3000ms = 3 seconds)
  const autoSlideDelay = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index for auto-sliding
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, autoSlideDelay);

    // Clear the interval when the component unmounts or currentIndex changes
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider">
      <motion.div ref={carousel} className="carousel" whileTop={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }} // Update the position based on the currentIndex
        >
          {images.map((Image, index) => (
            <motion.div className="item" key={Image}>
              <img src={Image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carousel;
