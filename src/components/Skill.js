import React from 'react';
import './css/Skill.css';

const Skills = () => {
  return (
    <section className="skills idin-skill" id="skills">
      <div>
      <h2>Skills</h2>
      <ul>
        <li>
          <h3>Frontend Development</h3>
          <p>Mahir dalam HTML, CSS, JavaScript, dan React.js. Pengalaman dalam membuat aplikasi web yang responsif dan interaktif.</p>
        </li>
        <li>
          <h3>UI/UX Design</h3>
          <p>Desain antarmuka pengguna yang intuitif dan pengalaman pengguna yang optimal menggunakan Figma dan Adobe XD.</p>
        </li>
        <li>
          <h3>Photo Editing (Adobe)</h3>
          <p>Kemampuan dalam mengedit foto dan grafis menggunakan Adobe Photoshop dan Adobe Lightroom.</p>
        </li>
        <li>
          <h3>Software Engineering</h3>
          <p>Pengembangan perangkat lunak menggunakan berbagai bahasa pemrograman dan alat seperti Git, Node.js, dan lebih banyak lagi.</p>
        </li>
      </ul>
    </div>
  </section>
  );
}

export default Skills;
