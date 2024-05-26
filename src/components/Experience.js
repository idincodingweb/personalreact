import React from 'react';
import './css/Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Company',
      description: 'Developed and maintained the front-end functionality of websites.',
      duration: 'Jan 2020 - Dec 2022',
      icon: 'https://via.placeholder.com/300x200', // Ganti dengan URL ikon/gambar yang sesuai
    },
    {
      role: 'Backend Developer',
      company: 'Software House',
      description: 'Built and optimized backend systems and APIs.',
      duration: 'Jan 2018 - Dec 2019',
      icon: 'https://via.placeholder.com/300x200', // Ganti dengan URL ikon/gambar yang sesuai
    },
    {
      role: 'Full Stack Developer',
      company: 'Startup Inc.',
      description: 'Handled both frontend and backend development for various projects.',
      duration: 'Jan 2016 - Dec 2017',
      icon: 'https://via.placeholder.com/300x200', // Ganti dengan URL ikon/gambar yang sesuai
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>My Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <img src={experience.icon} alt={experience.role} className="experience-icon" />
            <div className="experience-content">
              <h3>{experience.role}</h3>
              <h4>{experience.company}</h4>
              <p className="duration">{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
