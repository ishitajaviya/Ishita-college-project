import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import {Link,useNavigate,useParams} from 'react-router-dom'

export default function DeleteCategory() {
// delete customers data
const[category,addCategory]=useState([]);
const Navigate=useNavigate();
const{id}=useParams();
useEffect(()=>{
//get api to delete customers data from admin after clicked on delete button
axios.delete(`http://localhost:8000/addcategory/${id}`).then((response)=>{
    
       addCategory(response.data)});

    //    pass deleted messages

    Swal.fire({
        title: "Oh!",
        text: "Category data deleted successfully!",
        icon: "error"
      })
      
      Navigate("/admin-login/manage-category");
      
},[]);


  return (
    <div>
      
    </div>
  )
}
