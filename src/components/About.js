import React from 'react';
import './css/About.css';

const About = () => {
  return (
  <section className="about" id="tentang">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://i.ibb.co/9W3V3zs/Photo-Room-20240305-131210-1.jpg" height="100%"  alt="Profil" />
        </div>
        <div className="col-md-6">
          <h2>Tentang Saya</h2>
          <p>
            Halo, nama saya Idin Code. Saya adalah seorang frontend developer dengan pengalaman dalam membangun antarmuka pengguna yang menarik menggunakan teknologi web modern. Saya memiliki keahlian dalam HTML, CSS, dan JavaScript, serta kerap menggunakan kerangka kerja seperti React dan Bootstrap.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default About;