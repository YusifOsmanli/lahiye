import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    const {id}=useParams()
    const [detail,setDetail]=useState({})
    useEffect(()=>{
axios.get(`http://localhost:7070/technical/${id}`).then((res)=>{
    setDetail(res.data)
})
    },[])
    console.log(detail)
  return (
    <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <p><img src={detail.image} alt="" /></p>
        <div>
        <h1>Name: {detail?.name}</h1>
        <p style={{color:"black"}}>Category: {detail.catagory}</p>
        <p style={{color:"black"}}>Brand: {detail.brand}</p>
        <p style={{color:"black"}}>Price: {detail.satis}</p>


        </div>
    </div>
  )
}

export default Detail