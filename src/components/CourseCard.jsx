// src/components/CourseCard.js
import React from 'react';
import '../../styles/CourseCard.css'; // Create this CSS file

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-image-container">
        <img src={course.image} alt={course.title} className="course-image" />
        {course.tag && <span className="course-tag">{course.tag}</span>} {/* e.g., "LIVE", "FREE" */}
      </div>
      <div className="course-info">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">By {course.instructor}</p>
        <div className="course-details">
          <span><i className="fas fa-users"></i> {course.studentsEnrolled} Students</span>
          <span><i className="fas fa-star"></i> {course.rating} ({course.reviews} Reviews)</span>
        </div>
        <div className="course-price">
          {course.price === 'Free' ? (
            <span className="free-tag">Free</span>
          ) : (
            <span className="price">{course.price}</span>
          )}
        </div>
        <button className="course-button">Join Course</button> {/* Or a Link to a specific course page */}
      </div>
    </div>
  );
}

export default CourseCard;