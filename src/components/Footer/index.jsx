import React from 'react';
import { Button } from 'react-bootstrap'; // Ensure you have react-bootstrap installed
import './index.css'; // Optional: move styles here or use styled-components
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Footer = ({hidebutto=false}) => {
  const navigate = useNavigate()
  return (
    <>
      {/* Strap Section */}
      <div className="container-fluid strap">
        <div className="container contact-us d-flex flex-column flex-md-row justify-content-around align-items-center py-4 px-5 gap-3">
          <div className="col-sm-7 col-lg-8 col-xl-5 text-sm-start text-center text-white">
            <h4 className="p-0 m-0 pb-2">
              Ready to take your business to the next level?
            </h4>
            <p className="p-0 m-0">
              Schedule a free consultation with our team to discover how we can help!
            </p>
          </div>
          {hidebutto ? "" 
          : (
          <Button type="button" className="btn btn-lg px-5 me-md-2 button footerbutton"  onClick={() => navigate('/contact')}>
            Contact Us
          </Button>
        )}

        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer bg-light pt-4">
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-3 col-12 mb-3">
              <h5>Main Office</h5>
              <p>
                24, IT Layout, Bellandur<br />
                Bengalore-02, India
              </p>
            </div>

            <div className="col-md-3 col-12 mb-3">
              <h5>Branch Office</h5>
              <p>
                525 New Jersey-73<br />
                STE 104
                MARLTON,<br /> 
                New Jersey-08053
              </p>
            </div>

            <div className="col-md-3 col-12 mb-3">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-dark">
                  <FaFacebookSquare size={21} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-dark">
                  <FaInstagramSquare size={21} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-dark">
                  <BsLinkedin size={19} />
                </a>
              </div>
            </div>

            <div className="col-md-3 col-12 mb-3">
              <h5>Email Us</h5>
              <p>
                To know more about Aizero services<br />
                aizero@gmail.com
              </p>
            </div>

            <div>
             <p>© 2025 Aizero All Rights Reserved.</p>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
