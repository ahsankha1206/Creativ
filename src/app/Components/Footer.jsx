import React from 'react';
import '../Components/Footer.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about-us">
            <h3>About Us</h3>
            <p>
              Karachi Digital Marketing Agency provides comprehensive digital marketing solutions to businesses across industries with tailored and competitive strategies.
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook-f"><FaFacebook /></i>
              <i className="fab fa-twitter"><AiFillTwitterCircle /></i>
              <i className="fab fa-linkedin-in"><FaLinkedin /></i>
              <i className="fab fa-instagram"><RiInstagramFill /></i>
            </div>
          </div>
          <div className="footer-section gallery">
            <div>
            <h3 className='h3-glry'>Our Gallery</h3>
            </div>
            <div className="gallery">
              <img alt="Gallery image 1" src="f1.webp" />
              <img alt="Gallery image 2" src="f2.jpg" />
              <img alt="Gallery image 3" src="f3.jpg" />
              <img alt="Gallery image 4" src="f4.webp" />
              <img alt="Gallery image 5" src="f5.jpg" />
              <img alt="Gallery image 6" src="f6.jpg" />
            </div>
          </div>
          <div className="footer-section news-feeds">
            <h3>News Feeds</h3>
            <div className="news-item">
              <img alt="News image 1" src="n1.jpg" />
              <div>
                <div className="date">26 09 2023</div>
                <div className="title">Top 5 Search Engine Optimization Trends for 2023</div>
              </div>
            </div>
            <div className="news-item">
              <img alt="News image 2" src="n2.jpg" />
              <div>
                <div className="date">23 08 2023</div>
                <div className="title">5 Useful Web Design Strategies for a Donation Website</div>
              </div>
            </div>
            <div className="news-item">
              <img alt="News image 3" src="n3.webp" />
              <div>
                <div className="date">21 06 2023</div>
                <div className="title">How to Choose the Best Social Media Marketing Agency?</div>
              </div>
            </div>
          </div>
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to get our latest updates & news.</p>
            <input placeholder="Email address" type="email" />
            <button>Send</button>
          </div>
        </div>
      </footer>

      <div className="copyright-section">
  <p>&copy; 2024 Your Company Name. All rights reserved.</p>
</div>

    </>
  );
}

export default Footer;
