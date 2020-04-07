import React, {useState, useEffect} from 'react'
import './style.css'

const ImageSlider = props => {
  const {className, images} = props;

  const [currentIdx, setCurrentIndex] = useState(0);

  const slide = () => setCurrentIndex(prev => (prev + 1) % images.length);

  useEffect(function slideEffect() {
    let timeout;
    let animFrame = requestAnimationFrame(function delayedSlide() {
      timeout = setTimeout(slide, 5000)
    });

    return function clear() {
      clearTimeout(timeout);
      cancelAnimationFrame(animFrame);
    }
  });

  return (
    <div className={`ImageSlider ${className}`}>
      {
        images.map((image, idx) => (
          <div className="slidableImage"
            key={image}
            onMouseOver={undefined}
            onMouseOut={undefined}
            style={{backgroundImage: `url(${image})`, left: `${(idx - currentIdx)*100}%`}}/>
        ))
      }
    </div>
  )
}

export default ImageSlider
