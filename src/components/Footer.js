import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md={6}>
            <p>&copy; 2024 Your Website. All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={6}>
            <div className="social-icons text-md-end mt-3 mt-md-0">
              <a href="#facebook"><i className="fab fa-facebook"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
