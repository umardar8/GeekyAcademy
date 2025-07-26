// src/pages/SuccessStories.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import aliraza from '../assets/people/aliraza.png';
import sarakhan from '../assets/people/sarakhan.png';
import ayeshanoor from '../assets/people/ayeshanoor.png';
import fatimarehman from '../assets/people/fatimarehman.png';
import zainabkulssom from '../assets/people/zainabkulsoom.png';
import bilalahmed from '../assets/people/bilalahmed.png';
import hamzayousuf from '../assets/people/hamzayousuf.png';
import '../../styles/SuccessStories.css';

const successStories = [
  {
    course: 'Digital Marketing',
    student: 'Ali Raza',
    story: 'Ali now runs his own digital agency and earns over $2000/month by handling clients from the US and UK.',
    image: aliraza
  },
  {
    course: 'SEO',
    student: 'Sara Khan',
    story: 'Sara became a top-rated freelancer on Fiverr within 6 months of completing the SEO course.',
    image: sarakhan
  },
  {
    course: 'Video Editing',
    student: 'Bilal Ahmed',
    story: 'Bilal started editing YouTube videos and now works with 3 international channels.',
    image: bilalahmed
  },
  {
    course: 'Google Ads Expert',
    student: 'Ayesha Noor',
    story: 'After mastering Google Ads, Ayesha helped 10+ businesses grow their revenue with targeted ad campaigns.',
    image: ayeshanoor
  },
  {
    course: 'GMB Expert',
    student: 'Hamza Yousuf',
    story: 'Hamza optimized hundreds of GMB listings and now offers consultancy to local service businesses.',
    image: hamzayousuf
  },
  {
    course: 'Amazon Seller Course',
    student: 'Fatima Rehman',
    story: 'Fatima launched her own Amazon private label brand and hit $10K/month in sales.',
    image: fatimarehman
  },
  {
    course: 'Truck Dispatching Course',
    student: 'Zainab Kulsoom',
    story: 'Zainab works with a US-based dispatching company remotely and earns a stable monthly income.',
    image: zainabkulssom
  }
];

function SuccessStoriesPage() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Success Stories</h2>
      <Row>
        {successStories.map((story, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="h-100 success-card">
              <Card.Img variant="top" src={story.image} alt={`${story.course} Success`} />
              <Card.Body>
                <Card.Title>{story.student} - {story.course}</Card.Title>
                <Card.Text>{story.story}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SuccessStoriesPage;
