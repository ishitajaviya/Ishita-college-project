import React, {useRef, useStatie } from 'react';
import { Container, Row } from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import axios from 'axios';
import Swal from'sweetalert2';
import {useNavigate} from 'react-router-dom';


export default function AddSubCategory() {
  const categoryname=useRef("");
  const subcategoryname=useRef("");
  const addeddate=useRef("");

  const Navigate=useNavigate("");
  //const setCategoryName =useRef("");
  //const setAddedDate=useRef(""); 

const Addsubcategory=(e)=>{
 var insert={

  categoryname:categoryname.current.value,
  subcategoryname:subcategoryname.current.value,
  addeddate:addeddate.current.value,
  ///setCategoryName:categoryName.current.value,
 }
  

/* axios api call*/
e.preventDefault();
axios.post("http://localhost:8000/addcategory",insert)

 // .then((result)=>{console.log(result.text);
 .then(()=>{
  Swal.fire({
    title: "Good job!",
    text: "Thanks for Add New category",
    icon: "success"
  })
  Navigate("/admin-login/add-category");
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
            <h4 className='text-dark mt-5'>&nbsp;Add Your Sub Category</h4>
            <form onSubmit={Addsubcategory}>
{/*
              <div className=' mt-3 col-md-6'>
              <label className=''>Add Category Name</label> 
              <select  value={categoryname}>        
              <option value="" ref={categoryname} className='form-control' required  >
                </option>           
              </select> 
        </div>
  */}
      
        <div className=' mt-3 col-md-6'>
        <label className=''>Sub category name</label>  
        <input type='text' ref={subcategoryname}  className='form-control' required />
        </div>

        <div className=' mt-3 col-md-6'>
        <label className=''>Add Date</label>  
        <input type='date' ref={addeddate}  className='form-control' required />
        </div>

              <div className=' mt-3 col-md-6'>
                <input
                  type="submit"
                  className="btn btn-lg btn-dark bg-dark text-white"
                  value="Add Category"
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
  );
}
