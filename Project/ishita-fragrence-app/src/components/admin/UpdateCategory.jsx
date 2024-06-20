
import React,{useRef,useEffect} from 'react'
import axios from 'axios'
import {Container,Row, form} from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import Swal from 'sweetalert2';
import {Link,useNavigate,useParams} from 'react-router-dom'
export default function UpdateCategory() 
{

// add clients data to stored in variables
const categoryname=useRef("");
const addeddate=useRef("");
const Navigate=useNavigate("");
const{id}=useParams();

// edit data
useEffect(()=>{
    axios.get(`http://localhost:8000/addcategory/${id}`)
    .then((response)=>
     { 
    //fetch all data for edit 
    categoryname.current.value=response.data.categoryname;
    addeddate.current.value=response.data.addeddate
});

});


// update  a eventHandeler method 
const UpdateCategoryEventHandeler=(e)=>
{
var updcategory={  
categoryname:categoryname.current.value,
addeddate:addeddate.current.value


}
e.preventDefault();
// call axios api 
axios.put(`http://localhost:8000/addcategory/${id}`,updcategory)
// .then((result)=>{console.log(result.text);
.then(()=>{
Swal.fire({
title: "Good job!",
text: "Thanks for Update New Category data!",
icon: "success"
})
e.preventDefault();
Navigate("/admin-login/manage-category");

});

e.target.reset();

}



return (
<div>
      <AdminHeader />
      <Container fluid className="m-0 p-0">
        <Row>
          <div className='col-md-3 bg-black'>
            <AdminSidebar />
          </div>
          <div className='col-md-8'>
            <h4 className='text-dark mt-5'>&nbsp;Update Your Category</h4>
            <form onSubmit={UpdateCategoryEventHandeler}>
              <div className=' mt-3 col-md-6'>
              <label className=''>Add Category Name</label>  
        <input type='text' ref={categoryname}  className='form-control' required />
        </div>
    
        <div className=' mt-3 col-md-6'>
        <label className=''>Add Date</label>  
        <input type='date' ref={addeddate}  className='form-control' required />
        </div>

              <div className=' mt-3 col-md-6'>
                <input
                  type="submit"
                  className="btn btn-lg btn-dark bg-dark text-white"
                  value="Update product"
                />
                <input
                  type="reset"
                  className="btn btn-lg bg-danger text-white ms-4"
                  value="Reset"
                />
              </div>
            </form>
          </div>
        </Row>
      </Container>
      <AdminFooter />
    </div>


)
}
