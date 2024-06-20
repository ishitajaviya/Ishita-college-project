import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import {useNavigate,useParams} from 'react-router-dom'

export default function DeleteCustomer() {
// delete customers data
const[customerdata,setCustomerData]=useState([]);
const Navigate=useNavigate();
const{id}=useParams();
useEffect(()=>{
//get api to delete customers data from admin after clicked on delete button
axios.delete(`http://localhost:8000/login/${id}`).then((response)=>{
       setCustomerData(response.data)
      
      })
  
    Swal.fire({
        title: "Oh!",
        text: "Customer data deleted successfully!",
        icon: "error"
      })

Navigate("/admin-login/manage-customer");
      

      
},[])


  return (
    <div>
      
    </div>
  )
}
