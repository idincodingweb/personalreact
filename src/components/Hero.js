import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './css/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-content">
            <h1>Welcome to my experience</h1>
            <p>Your journey to excellence starts here.</p>
            <Button variant="primary" size="lg">Get Started</Button>
          </Col>
          <Col xs={12} md={6} className="image-container">
            <img src="https://raw.githubusercontent.com/idincodingweb/e-course.com/main/assets/img/new1-img.png" alt="3D Airplane" className="img-fluid airplane" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
