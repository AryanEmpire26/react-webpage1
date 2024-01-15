import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../Assets/3.jpg';
import img2 from '../Assets/4.jpg';
function Services() {
  return (
    <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
        <div>
            <img src={img1} alt="text1"/>
            <p className='legend'>Full-Stack</p>
        </div>
        <div>
            <img src={img2} alt="text2" />
            <p className='legend'>Peer-to-Peer support</p>
        </div>
    </Carousel>
  )
}

export default Services