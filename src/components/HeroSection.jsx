import React from 'react';
import '../../styles/HeroSection.css';
import alidar from '../assets/alidar.png';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

function HeroSection() {
  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="align-items-center h-100">
          <Col md={5} className="text-center text-md-start">
            <img src={alidar} alt="Instructor" className="hero-image" />
          </Col>
          <Col md={7}>
            <Carousel indicators={true} controls={false} className="hero-carousel">
              <Carousel.Item className="hero-carousel-item">
                <div className="d-flex flex-column justify-content-center h-100 text-center text-md-start">
                  <h3>Welcome to Our Learning Platform</h3>
                  <p>Discover a variety of courses to enhance your skills.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item className="hero-carousel-item">
                <div className="d-flex flex-column justify-content-center h-100 text-center text-md-start">
                  <h3>Learn from Experts</h3>
                  <p>Join courses taught by industry professionals.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item className="hero-carousel-item">
                 <div className="d-flex flex-column justify-content-center h-100 text-center text-md-start">
                  <h3>Flexible Learning</h3>
                  <p>Study at your own pace, anytime, anywhere.</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;