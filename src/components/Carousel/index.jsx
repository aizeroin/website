// components/ResponsiveCarousel.js
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './index.css'; // We'll write custom styles here
import cloudComputing from "../../assets/cloudcomputing.jpg"
import managedIT from "../../assets/carousel3.jpg"
import Advisory from "../../assets/carousel2.jpg"

const carouselItems = [
  {
    image: cloudComputing,
    title: 'Cloud Computing',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Rem labore iusto saepe magnam laboriosam soluta reiciendis
     debitis iste cumque, quae inventore dolores consequuntur ut
      obcaecati ab illo quia eaque repudiandae.`,
  },
  {
    image: managedIT,
    title: 'Managed IT Services',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Rem labore iusto saepe magnam laboriosam soluta reiciendis
     debitis iste cumque, quae inventore dolores consequuntur ut
      obcaecati ab illo quia eaque repudiandae.`,
  },
  {
    image: Advisory,
    title: 'Tecnology Advisory Services',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Rem labore iusto saepe magnam laboriosam soluta reiciendis
     debitis iste cumque, quae inventore dolores consequuntur ut
      obcaecati ab illo quia eaque repudiandae.`,
  },
];

const ResponsiveCarousel = () => {
  return (
    <Carousel interval={3000} controls >
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <Container className="carousel-content">
            <Row className="align-items-center">
              <Col md={6} className="carousel-text" >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </Col>
              <Col md={6} className="carousel-image">
                <img className="img-fluid" src={item.image} alt={item.title} width={600} loading="lazy"  />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
