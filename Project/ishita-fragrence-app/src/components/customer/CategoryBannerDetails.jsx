import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
export default function CategoryBannerDetails() {
//display blogs details
//display data 
const[mydata,setData]=useState([]);
const photo=useRef("");
const photo1=useRef("");
const  productname=useRef("");
const description=useRef("");
const oldprice=useRef("");
const newprice=useRef("");
const quantity=useRef("");
const {id}=useParams();
useEffect(()=>{
// fetch data via axios.get 
axios.get(`http://localhost:8000/addproduct/${id}`).then((response)=>{
photo.current.value=response.data.photo;
photo1.current.src=response.data.photo;
productname.current.value=response.data.productname;
description.current.value=response.data.description;
oldprice.current.value=response.data.oldprice;
newprice.current.value=response.data.newprice;
quantity.current.value=response.data.quantity;

})
},[])

return (
<div>a
<Header />
<div className="container-fluid px-5 my-10">
<h1 className='text-3xl font-bold p-5'>cateogary details</h1>
<div className='row'>
<div className="col-md-6 ms-0 p-5 mt-2 shadow">
<input type='hidden'  ref={photo}  className="img-fluid" alt=""/>
<img  src={photo1} ref={photo1}  className="img-fluid" alt="not found" style={{width:"100%",height:"400px",color:"white"}} />
</div>
<div className='col-md-6'>
<p className='text-3xl ms-5'><input type='text' ref={ productname} style={{border:"none",color:"black",width:"100%"}} readOnly /></p>

<p className='text-2xl ms-5'><input type='text' ref={description} style={{fontSize:"17px",width:"100%"}} /></p>
<p className='text-2xl ms-5'><input type='text' ref={oldprice} style={{fontSize:"17px",width:"100%"}} /></p>

<p className='text-2xl ms-5'><input type='text' ref={newprice} style={{fontSize:"17px",width:"100%"}} /></p>
<p className='text-2xl ms-5'><input type='text' ref={quantity} style={{fontSize:"17px",width:"100%"}} /></p>
</div>
</div>
</div>
<Footer />
</div>

)
}