import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import {Link,useNavigate,useParams} from 'react-router-dom'

export default function DeleteProduct() {
// delete customers data
const[product,addProduct]=useState([]);
const Navigate=useNavigate();
const{id}=useParams();
useEffect(()=>{
//get api to delete customers data from admin after clicked on delete button
axios.delete(`http://localhost:8000/addproduct/${id}`).then((response)=>{
    
       addProduct(response.data)});

    //    pass deleted messages

    Swal.fire({
        title: "Oh!",
        text: "Product data deleted successfully!",
        icon: "error"
      })
      
      Navigate("/admin-login/manage-product");
      
},[]);


  return (
    <div>
      
    </div>
  )
}
