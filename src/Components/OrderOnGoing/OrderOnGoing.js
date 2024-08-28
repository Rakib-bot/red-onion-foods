import React, { useEffect, useState,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faTruck } from '@fortawesome/free-solid-svg-icons';
import './OrderOnGoing.css'; // Import the CSS file for styling
import bike from './bike.png'
import { userContext } from '../../App';
import { useLocation } from 'react-router-dom';

const OrderOnGoing = () => {
    const [bikePosition, setBikePosition] = useState(0);
    const {USER} = useContext(userContext);
    const location = useLocation();
    const { address } = location.state || {};
    useEffect(() => {
        const interval = setInterval(() => {
            setBikePosition(prevPosition => prevPosition < 100 ? prevPosition + 1 : 0);
        }, 50); // Adjust speed by changing the interval time
        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" order-track-container">
            <div className="order-info">
                <h2>{USER.name}'s  Order is on the Way!</h2>
                <div className="info-icons">
                    <div className="info-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                        <p>Delivery Location: {address}</p>
                    </div>
                    <div className="info-item">
                        <FontAwesomeIcon icon={faClock} className="info-icon" />
                        <p>Estimated Delivery Time: 30 minutes</p>
                    </div>
                    <div className="info-item">
                        <FontAwesomeIcon icon={faTruck} className="info-icon" />
                        <p>Delivery Status: In Transit</p>
                    </div>
                </div>
               
            </div>
            <div className="bike-animation">
                <div className="street"></div>
                <img
                    src={bike}
                    alt="Delivery Bike"
                    className="delivery-bike"
                    style={{ left: `${bikePosition}%` }}
                />
            </div>
        </div>
    );
};

export default OrderOnGoing;
