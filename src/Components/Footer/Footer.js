import React from "react";
import { Link } from "react-router-dom";
import logo from "./favicon.ico";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col footer-img">
            <Link to="/">
              <img src={logo} alt="hot-onion-restaurant" />
            </Link>
          </div>
          <div className="footer-col footer-text">
            <nav>
              <Link to="/about" className="footer-text-title">
                About Online Food
              </Link>
              <Link to="/blog" className="footer-text-title">
                Read Our Blog
              </Link>
              <Link to="/login" className="footer-text-title">
                Sign Up To Deliver
              </Link>
              <Link to="/" className="footer-text-title">
                Add Your Restaurant
              </Link>
            </nav>
          </div>
          <div className="footer-col footer-text">
            <nav>
              <Link to="/help" className="footer-text-title">
                Get Help
              </Link>
              <Link to="/faq" className="footer-text-title">
                Read FAQ
              </Link>
              <Link to="/city" className="footer-text-title">
                View All Cities
              </Link>
              <Link to="/" className="footer-text-title">
                Restaurant Near Me
              </Link>
            </nav>
          </div>
        </div>
        <p className="footer-copy">
          Copyright &copy; 2024 Red Onion Foods
        </p>
        <strong className="footer-credit">
          Develop By : Rakibul Islam

        </strong>
        <br />
        <strong className="footer-credit">
          Contact : 01521770092
        </strong>
      </div>
    </div>
  );
};

export default Footer;
