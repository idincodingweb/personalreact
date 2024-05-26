import React from 'react';
import './css/Blog.css';

const Blog = () => {
  const blogData = [
    {
      title: '10 Tips for Better Time Management',
      date: 'May 15, 2023',
      image: 'https://via.placeholder.com/300x200', // Ganti dengan URL gambar blog
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi eget velit dignissim ultricies.',
    },
    {
      title: 'The Future of Artificial Intelligence',
      date: 'April 28, 2023',
      image: 'https://via.placeholder.com/300x200', // Ganti dengan URL gambar blog
      summary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      title: 'Mastering React: Best Practices',
      date: 'March 10, 2023',
      image: 'https://via.placeholder.com/300x200', // Ganti dengan URL gambar blog
      summary: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
    },
  ];

  return (
    <section className="blog" id="blog">
      <h2>Latest Blog Posts</h2>
      <div className="blog-list">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="date">{blog.date}</p>
              <p>{blog.summary}</p>
              <a href="#read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
