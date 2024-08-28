import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({children}) => {
    const {USER,setUSER} = useContext(userContext);
    const location = useLocation();
    console.log("ekhane:",USER.email)
    if(USER.status === 404|| !USER.email)
    {
        return <Navigate to="/signup" state={{ from: location }}/>
    }
    return children;

};

export default PrivateRoute;