import {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
    
 function DeleteTask() {

    const[data,setData]=useState([]);
    const{id}=useParams();
    const Navigate=useNavigate();
    useEffect(()=>{
      
        axios.delete(`http://localhost:8000/add-task/${id}`).then(()=>{
        Swal.fire({
            title: "wow",
            text: "Your Task successfully deleted",
            icon: "error"
          });
       
          Navigate('/')
    
        });
    }); 
}
      
export default DeleteTask;