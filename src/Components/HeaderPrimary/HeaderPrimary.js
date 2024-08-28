import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './HeaderPrimary.css'; // Import the CSS file for styling
import logo2 from './logo2.png'; // Adjust path as needed
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const HeaderPrimary = () => {
  const {USER} = useContext(userContext);
    return (
        <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={logo2} alt="Logo" className="logo-img" />
          </div>
          <div className="header-items">

          
            <Link to="/">
            <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
            </Link>
           
            <Link to="/signup">
            <button className="button login-button">Login</button>
            </Link>
          
            <Link to="/signup">
            <button className="button signup-button">Sign Up</button>
            </Link>
            {
            USER.name && <h3 style={{marginLeft:"20px"}}>{USER.name}</h3>
           }
          </div>
         
          
        </div>
        <img src="./logo2.png" alt="" />
      </header>
    );
};

export default HeaderPrimary;