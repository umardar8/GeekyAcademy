// src/components/HeroSection.js
import React from 'react';
import '../../styles/HeroSection.css';
import heroImage from '../assets/carousel-img1.jpg';
import heroImage2 from '../assets/carousel-img2.jpg';
import heroImage3 from '../assets/carousel-img3.jpg';
import alidar from '../assets/alidar.png';
import Carousel from 'react-bootstrap/Carousel';

function HeroSection() {
  return (
    <section className="hero-section container-fluid">
      <div className='row'>
          <Carousel className="hero-carousel col">
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Welcome to Our Learning Platform</h3>
                <p>Discover a variety of courses to enhance your skills.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Learn from Experts</h3>
                <p>Join courses taught by industry professionals.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Flexible Learning</h3>
                <p>Study at your own pace, anytime, anywhere.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        <img src={alidar} className='col' />
      </div>
    </section>
  );
}

export default HeroSection;