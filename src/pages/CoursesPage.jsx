// src/pages/CoursesPage.js
import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import coursesData from '../../data/coursesData';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All'); // e.g., 'All', 'Free', 'Live'

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'All' || course.tag === filterType.toUpperCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="courses-page-container p-5">
      <section className="courses-page-hero">
        <h1>Our Courses</h1>
        <p>Explore a wide range of courses to boost your career.</p>
      </section>
      <hr />
      <section className="courses-filter-section">
        {/* <div className="search-bar">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <i className="fas fa-search"></i>
        </div> */}
        <div className="filter-buttons">
          <ButtonGroup className="mb-2">
            <Button 
              className={filterType === 'All' ? 'active' : ''}
              variant='success'
              onClick={() => handleFilterChange('All')}>All</Button>
            <Button 
              className={filterType === 'Free' ? 'active' : ''}
              variant='success'
              onClick={() => handleFilterChange('Free')}>Free</Button>
            <Button 
              className={filterType === 'Live' ? 'active' : ''}
              variant='success'
              onClick={() => handleFilterChange('Live')}>Live</Button>
          </ButtonGroup>
        </div>
      </section>



      <section className="all-courses-grid">
        {filteredCourses.length > 0 ? (
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="no-courses-found">No courses found matching your criteria.</p>
        )}
      </section>
    </div>
  );
}

export default CoursesPage;