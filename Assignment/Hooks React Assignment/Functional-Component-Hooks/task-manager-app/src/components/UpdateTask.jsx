import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {Container,Form} from 'react-bootstrap'
import Swal from 'sweetalert2';
import Header from '../components/Header'

 function UpdateTask() {
//  stored data 

// add clients data to stored in variables
const[data,setData]=useState("");
const priority=useRef("");
const taskname=useRef("");
const added_date=useRef("");
const status=useRef("");
const navigate=useNavigate("");
const{id}=useParams();

// edit data
useEffect(()=>{
    axios.get(`http://localhost:8000/add-task/${id}`)
    .then((response)=>
     { 
    //fetch all data for edit 
    
    priority.current.value=response.data.priority;
    taskname.current.value=response.data.taskname;
    added_date.current.value=response.data.added_date;
    status.current.value=response.data.status;
});

});


// update  a eventHandeler method 
const UpdateProductEventHandeler=(e)=>
{
var updproduct={  
priority:priority.current.value,
taskname:taskname.current.value,
added_date:added_date.current.value,
status:status.current.value
}
e.preventDefault();
// call axios api 
axios.put(`http://localhost:8000/add-task/${id}`,updproduct)
// .then((result)=>{console.log(result.text);
.then(()=>{
Swal.fire({
title: "Good job!",
text: "Thanks for Update New product data!",
icon: "success"
})
e.preventDefault();
navigate("/");

});

e.target.reset();

}



  return (
    <div>
        <Header/>
      {/* add to list */}
      <Container className="p-5 mt-5">
       <Form onSubmit={UpdateProductEventHandeler}>
        <div className='form-group mt-3'>
            <label className='bi bi-pencil'>Todo</label>
            <input type='text' ref={taskname} placeholder='Write your task....' className='form-control' />
        </div> 
        
        <div className='form-group mt-3'>
            <label className='bi bi-watch'>Priority</label>
            <select ref={priority}  placeholder='Write your task....' className='form-control'>
                <option value="">-select priority-</option>
                <option value="High">High</option>
                <option value="Low">Low</option>

            </select>
        </div> 

        
        <div className='form-group mt-3'>
            <label className='bi bi-watch'>status</label>
            <select ref={status}  placeholder='Write your task....' className='form-control'>
                <option value="">-select status-</option>
                <option value="pending">pending</option>
                <option value="completed">Completed</option>

            </select>
        </div> 

        <div className='form-group mt-3'>
            <label className='bi bi-pencil'>Added Date</label>
            <input type='date' ref={added_date} placeholder='Write your task....' className='form-control' />
        </div> 

        <div className='form-group mt-3'>
           
            <input type='submit' value="Update" placeholder='Write your task....' className='btn btn-sm btn-success' />
        </div> 
       </Form>
    
      </Container>
    </div>
  )
}

export default UpdateTask;