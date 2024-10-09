import React, { useEffect } from 'react';
import axios from 'axios'

export default function Fetching () {
    const fetchData = async() => {
 try {
    const response = await axios.get(process.env.REACT_APP_API)
    console.log(response)
 } catch (error) {
    console.log(error)
 }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <h4>hello</h4>

    </div>
  )
}
