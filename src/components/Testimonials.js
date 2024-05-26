import React from 'react';
import './css/Testimonial.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      position: 'CEO, Company Inc.',
      testimonial: 'This is an amazing service! Highly recommend to everyone.',
      imageUrl: 'https://via.placeholder.com/100', // Ganti dengan URL gambar profil
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Director, Another Company',
      testimonial: 'Excellent work and fantastic support throughout the project.',
      imageUrl: 'https://via.placeholder.com/100', // Ganti dengan URL gambar profil
    },
    {
      name: 'Mike Johnson',
      position: 'Freelancer',
      testimonial: 'Truly outstanding experience, I will definitely use this again.',
      imageUrl: 'https://via.placeholder.com/100', // Ganti dengan URL gambar profil
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.position}</h4>
              <p>{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
