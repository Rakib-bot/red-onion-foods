import React from 'react';
import './BikeAnimation.css';
import bike from './bike.png'; // Adjust the path as needed
import { useLocation } from 'react-router-dom';

const BikeAnimation = () => {
   
    return (
        <div className="street-container">
            <div className="street">
                <img src={bike} alt="Bike" className="bike" />
            </div>
        </div>
    );
};

export default BikeAnimation;
