import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useSelector } from "react-redux";

const Home = () => {
  const [products, setproducts] = useState([])

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4000/products",
    })
      .then((res) =>
        setproducts(res.data)
      )
      .catch((err) =>
        {console.log(err);}
      );
  }, [])
    
  return (
    <div>
      {products?.map((el) => 
        (<div className='data' key={el.id}>
        <p> Name: {el.first_name}  {el.last_name}</p>
        <p>Email: {el.email} </p>
        <p>Car: {el.car} </p>
        <p>Model {el.model} </p>
        <p>year {el.year} </p>
        <p>Manufactured in: {el.manufactured} </p>
        </div>)
      )}
    </div>
  );
}

export default Home