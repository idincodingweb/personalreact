import React from 'react';
import './css/Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tech University',
      description: 'Focused on software engineering, data structures, and algorithms.',
      duration: '2016 - 2020',
      icon: 'https://via.placeholder.com/50', // Ganti dengan URL ikon/gambar yang sesuai
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      description: 'Concentrated on science and mathematics subjects.',
      duration: '2012 - 2016',
      icon: 'https://via.placeholder.com/50', // Ganti dengan URL ikon/gambar yang sesuai
    },
  ];

  return (
    <section className="education" id="education">
      <h2>My Education</h2>
      <div className="education-list">
        {educationData.map((education, index) => (
          <div className="education-card" key={index}>
            <img src={education.icon} alt={education.degree} className="education-icon" />
            <div className="education-content">
              <h3>{education.degree}</h3>
              <h4>{education.institution}</h4>
              <p className="duration">{education.duration}</p>
              <p>{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
