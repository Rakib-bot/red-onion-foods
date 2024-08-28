import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import googleMap from './Image/google.png'
import rider from './Image/rider.png'
import helmet from './Image/helmet.png'
import './Contact.css'
import { userContext } from '../../App';
import { clearData } from '../LocalStorageDB/FromDB';

const Contact = () => {
    const location = useLocation();
    const { address } = location.state || {};
    const navigate = useNavigate();
    const {USER} = useContext(userContext)

    const handleConfirm = () =>{

     clearData();
        navigate('/orderongoing',{ state: { address:address } });

    }
    return (
        <div className="contact-container pt-5 my-5">
          <div className="row">
            <div className="image col-md-8">
              <img className="img-fluid" src={googleMap} alt="" />
            </div>
            <div className="col-md-4 pl-md-5">
              <div className="bg-light  rounded">
                <img className="w-25 ml-6 custom-padding" src={rider} alt="" />
                <div className="bg-white  rounded p-3 my-3">
                  <div>
                   
                    <h5>Your Location</h5>
                     <h3>{address||'Address'}</h3>
                  </div>
                  <div>
                    <h5>Shop Address</h5>
                    <p>Red Onion Restaurant</p>
                  </div>
                </div>
                <h1>3:00</h1>
                <p>Estimated Delivery</p>
    
                <div className="bg-white rounded p-3 d-flex">
                  <img className="w-25 mr-2" src={helmet} alt="" />
                  <div>
                    <h6>{USER.name}</h6>
                    <p>Your Rider</p>
                  </div>
                </div>

              </div>
              <button onClick={()=>handleConfirm()} className="custom-btn mt-3">Contact</button>
            </div>
          </div>
        </div>
      );
};

export default Contact;
