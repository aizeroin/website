// src/components/HeroSection.jsx
import React from 'react';
import './index.css'; 
import { useNavigate } from 'react-router-dom';


const HeroSection = ({ HeroImg, HeroHeading, HeroText, buttonHeading }) => {
  const navigate = useNavigate();
  const isContactPage = location.pathname === '/aizero-tech/contact';
  return (
    <div className="container-fluid px-0 hero-bg " >
      <div className="container col-xxl-8 px-4 pt-2">
        <div
          className={`row flex-column-reverse flex-lg-row-reverse align-items-center justify-content-center g-5 pt-5 ${isContactPage ? 'py-5' : ''}`}
          style={{ paddingBottom: '0px' }}
        >
          {HeroImg && (
            <div className="col-10 col-sm-8 col-lg-6 hero-fade-in" >
              <img
                src={HeroImg}
                alt="Hero"
                className="d-block mx-lg-auto img-fluid"
                width={700}
                height={500}
                loading="lazy"
              />
            </div>
          )}
          <div className="col-lg-6 hero-fade-in">
            <h1 className="display-5 fw-bold mb-3 text-white">{HeroHeading}</h1>
            <p className="lead text-white">{HeroText}</p>
            {buttonHeading && (
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-lg px-5 me-md-2 custom-button"
                  onClick={() => navigate('/contact')}
                >
                  {buttonHeading}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
