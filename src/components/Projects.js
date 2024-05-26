import React from 'react';
import './css/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Project Title 1',
      description: 'Deskripsi proyek 1...',
      imageUrl: 'https://via.placeholder.com/300x200', // Ganti dengan URL gambar proyek Anda
    },
    {
      title: 'Project Title 2',
      description: 'Deskripsi proyek 2...',
      imageUrl: 'https://via.placeholder.com/300x200', // Ganti dengan URL gambar proyek Anda
    },
    {
      title: 'Project Title 3',
      description: 'Deskripsi proyek 3...',
      imageUrl: 'https://via.placeholder.com/300x200', // Ganti dengan URL gambar proyek Anda
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="btn-more">Lihat Selengkapnya</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
