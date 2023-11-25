import React from 'react'
import Carousel from './Carousel.jsx'

const Banner = () => {
  return (
    <div className="banner-container">
      <Carousel />
      <div className='taglines'>
        <h2 className="banner-tagline">Crypto Hunter</h2>
        <p className="tagline-p">
        Get all The Info Regarding Your Favorite Crypto Currency
        </p>
      </div>
    </div>
  );
}

export default Banner
