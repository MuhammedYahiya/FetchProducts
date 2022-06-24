import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const DataFetching = () => {
    const [data,setData] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/data`)
        .then(response => {
            setData(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])
  return (
    <div>
        {data.map(data =>(
            <div key={data.id}>
              <h3>{data.name}</h3>
              <img src= {data.img} alt='photos' style={{maxWidth:"100px",maxHeight:"100px"}}></img>
              <p>{data.country}</p>
            </div>
        ))}
    </div>
  )
}

export default DataFetching
