import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useSelector } from "react-redux";

const Home = () => {
  const [products, setproducts] = useState({
    loading: false,
    error: false,
    data: []
  })

  useEffect(() => {
    setproducts((prev) => ({
      ...prev,
      loading: true
    }));
    axios({
      method: "get",
      url: "http://localhost:4000/products",
    })
      .then((res) =>
        setproducts((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data: res.data
        }))
      )
      .catch((err) =>
        setproducts((prev) => ({
          ...prev,
          loading: false,
          error: true
        }))
      );
  }, [])
    
  return (
    <div>
      {products.map(el => <div key={el.id}>
        
      </div>)}
    </div>
  )
}

export default Home