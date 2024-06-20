import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import {useNavigate,useParams} from 'react-router-dom'

export default function DeleteContacts() {
// delete customers data
const[contactdata,setContactData]=useState([]);
const Navigate=useNavigate();
const{id}=useParams();
useEffect(()=>{
//get api to delete customers data from admin after clicked on delete button
axios.delete(`http://localhost:8000/contactus/${id}`).then((response)=>{
       setContactData(response.data)
      
      })
  
    Swal.fire({
        title: "Oh!",
        text: "Contact data deleted successfully!",
        icon: "error"
      })

Navigate("/admin-login/manage-contacts");
      

      
},[])


  return (
    <div>
      
    </div>
  )
}
