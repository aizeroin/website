import React from 'react';
import Hero from '../../components/Hero';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Globe from "../../assets/globe.png";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };
    return (
        <Container fluid className="px-0">
            <Hero
                HeroImg={Globe}
                HeroHeading="Contact Us"
                HeroText="We are here to assist you with any inquiries or support you may need. Your satisfaction is our priority."
            />
            <section className="contact-section py-5 bg-white" id="contact">
                <Container>
                    <h2 className="text-center mb-4 fw-bold">Get In Touch</h2>
                    <p className="text-center mb-5 w-75 mx-auto opacity-75" style={{ fontSize: "18px" }}>
                    Connect for Excellence, Your Direct Line to Exceptional IT Services<br></br> We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
                    </p>
                    <Row className="justify-content-center">
                        <Col md={10} lg={8}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Subject" required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Type your message..." required />
                                </Form.Group>

                                <div className="text-center">
                                    <button
                                        type="button"
                                        style={{ backgroundColor: '#f57c00', color: 'white' }}
                                        className="btn btn-lg px-5 me-md-2"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    );
}

export default Contact;