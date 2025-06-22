// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import coursesData from '../../data/coursesData'; // Import your dummy data
import '../../styles/HomePage.css'; // Create this CSS file

function HomePage() {
  // You might want to filter courses later, e.g., show only featured courses
  const featuredCourses = coursesData.slice(0, 9); // Example: show first 9 courses

  return (
    <div className="home-page">
      <HeroSection />

      <section className="courses-section">
        <h2>Popular Courses</h2> {/* You can add more sections like "Free Courses", "Live Courses" */}
        <div className="courses-grid">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Add more sections as per your design, e.g., Testimonials, Why Choose Us */}
    </div>
  );
}

export default HomePage;