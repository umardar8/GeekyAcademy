// src/data/coursesData.js
import gmb from '../src/assets/gmb.jpeg';
import googleads from '../src/assets/google-ads.jpeg'
import digitalmarketing from '../src/assets/digital-marketing.jpg';
import seo from '../src/assets/seo.png';
import videoediting from '../src/assets/video-editing.jpeg';
import amazon from '../src/assets/amazon.png';
import truckdispatcher from '../src/assets/truckdispatch.jpg';

const courses = [
  {
    id: 'course01',
    image: digitalmarketing, // Replace with actual image paths
    title: 'Digital Marketing with AI (Basics to Advanced)',
    instructor: 'Ali Hassan Dar',
    studentsEnrolled: '25k+',
    rating: '4.8',
    reviews: '1.2k',
    price: 'Free',
    tag: 'FREE'
  },
  {
    id: 'course02',
    image: seo,
    title: 'Search Engine Optimization (Basics to Advanced)',
    instructor: 'Ali Hassan Dar',
    studentsEnrolled: '30k+',
    rating: '4.7',
    reviews: '1.5k',
    price: 'Free',
    tag: 'FREE'
  },
  {
    id: 'course03',
    image: videoediting,
    title: 'Video Editing Course - Camtasia to Filmora',
    instructor: 'Ali Hassan Dar',
    studentsEnrolled: '18k+',
    rating: '4.9',
    reviews: '900',
    price: 'Rs: 10,000',
    tag: 'LIVE'
  },
  {
    id: 'course04',
    image: googleads,
    title: 'Google Ads Expert Course ',
    instructor: 'Ali Hassan Dar',
    studentsEnrolled: '22k+',
    rating: '4.6',
    reviews: '1.1k',
    price: 'Rs: 10,000',
    tag: 'LIVE'
  },
  {
    id: 'course05',
    image: gmb,
    title: 'Google My Business (GMB) Mastery',
    instructor: 'Ali Hassan Dar',
    studentsEnrolled: '15k+',
    rating: '4.7',
    reviews: '800',
    price: 'Rs: 10,000',
    tag: 'LIVE'
  },
  {
    id: 'course06',
    image: amazon,
    title: 'Become a Amazon Seller',
    instructor: 'Ali Hassan Dar',
    studentsEnrolled: '10k+',
    rating: '4.5',
    reviews: '600',
    price: 'Rs: 10,000',
    tag: 'LIVE'
  },
  // Add more courses based on your image
  {
    id: 'course07',
    image: truckdispatcher,
    title: 'Become a Truck Dispatcher',
    instructor: 'Ali Hassan Dar',
    studentsEnrolled: '20k+',
    rating: '4.8',
    reviews: '1.0k',
    price: 'Rs: 10,000',
    tag: 'LIVE'
  },
];

export default courses;