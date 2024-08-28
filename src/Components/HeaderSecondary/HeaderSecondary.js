import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './HeaderSecondary.css'
const HeaderSecondary = () => {
    return (
        <div className="custom-header  bg-secondary text-white text-center py-3 ">
        
          <h2 className="mb-4 text-dark" style={{fontSize:'40px'}}>Best Food Is Waiting For You</h2>
          <div className="d-flex justify-content-center align-items-center">
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Search Food Items..." 
            />
            <button className="custom-button">Search</button>
          </div>
        
      </div>
    );
};

export default HeaderSecondary;