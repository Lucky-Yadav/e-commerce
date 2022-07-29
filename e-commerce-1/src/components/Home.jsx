import React from 'react'
import { useSelector } from "react-redux";

const Home = () => {
const token= useSelector(state.auth.token)

    if (!token) {
        
    }
  return (
    <div>Home</div>
  )
}

export default Home