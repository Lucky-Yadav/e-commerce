import React, { Children } from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const Private = () => {
    
const token = useSelector(state.auth.token);

    if (!token) {
        <Navigate to={"/login"} />
    }
  return Children
}

export default Private