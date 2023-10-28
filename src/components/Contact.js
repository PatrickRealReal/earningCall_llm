import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import zhuoer_xu from "../assets/img/zhuoer_xu.jpg";

const Contact = () => {
  const contacts = [
    {
      name: 'Zhuoer Xu',
      img: zhuoer_xu, // Updated image path
      github: 'https://github.com/PatrickRealReal',
    },
    // ... other contacts
  ];

  return (
    <section className="contact" id="contact">
      <Container className="contact-container">
        <Row>
          <h3 className="contact-title">Contact</h3>
        </Row>
        <Row>
          {contacts.map(contact => (
            <Col md={3} xs={6} className="contact-card">
              <div className="name">{contact.name}</div>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <img src={contact.img} alt="GitHub" className="github-icon" /> {/* Added class for styling */}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
