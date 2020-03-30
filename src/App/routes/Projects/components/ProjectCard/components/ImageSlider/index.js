import React from 'react'
import './style.css'

class ImageSlider extends React.PureComponent {
  state = {
    currentIdx: 0
  }

  componentDidMount() {
    this.sliderInterval = requestAnimationFrame(this.slide);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.sliderInterval);
  }

  slide = () => {
    this.setState(prevState => ({
      currentIdx: (prevState.currentIdx + 1) % this.props.images.length
    }), function callBack(){
      setTimeout(() => this.sliderInterval = requestAnimationFrame(this.slide), 5000);
    })
  }

  render() {
    const {currentIdx} = this.state;
    const {className, images} = this.props;
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
}

export default ImageSlider
