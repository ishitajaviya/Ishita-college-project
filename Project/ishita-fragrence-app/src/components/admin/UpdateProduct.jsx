import React,{useRef,useEffect} from 'react'
import axios from 'axios'
import {Container,Row, form} from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import Swal from 'sweetalert2';
import {Link,useNavigate,useParams} from 'react-router-dom'
export default function UpdateProduct() 
{

// add clients data to stored in variables
const productcategory=useRef("");
const photo=useRef("");
const description=useRef("");
const oldprice=useRef("");
const newprice=useRef("");
const Navigate=useNavigate("");
const{id}=useParams();

// edit data
useEffect(()=>{
    axios.get(`http://localhost:8000/addproduct/${id}`)
    .then((response)=>
     { 
    //fetch all data for edit 
    productcategory.current.value=response.data.productcategory;
    photo.current.value=response.data.photo;
    description.current.value=response.data.description;
    oldprice.current.value=response.data.oldprice;
    newprice.current.value=response.data.newprice
});

});


// update  a eventHandeler method 
const UpdateProductEventHandeler=(e)=>
{
var updproduct={  
productcategory:productcategory.current.value,
photo:photo.current.value,
description:description.current.value,
oldprice:oldprice.current.value,
newprice:newprice.current.value
}
e.preventDefault();
// call axios api 
axios.put(`http://localhost:8000/addproduct/${id}`,updproduct)
// .then((result)=>{console.log(result.text);
.then(()=>{
Swal.fire({
title: "Good job!",
text: "Thanks for Update New product data!",
icon: "success"
})
e.preventDefault();
Navigate("/admin-login/manage-product");

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
            <h4 className='text-dark mt-5'>&nbsp;Update Your Product</h4>
            <form onSubmit={UpdateProductEventHandeler}>
              <div className="mb-3">
                <label className=''>Select Product Category *</label>  
                <select type='category' ref={productcategory}  className='form-control' required>
                <option value="firstrainperfume">First Rain Perfume</option>
                <option value="firstrainperfume">Forest Rain perfume</option>
                </select>
                </div>


              <div className="mb-3">
                <label  className="form-label">
                  Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  
                  ref={photo}                  
                />
                
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Descriptions
                </label>
                <input
                  className='form-control'
                  type='text'
                  rows="3"
            
                  ref={description}
                ></input>
              </div>
              <div className='mb-3'>
        <label className=''>Old price *</label>  
        <input type='number'  ref={oldprice}    className='form-control' required />

        </div>
        <div className='mb-3'>
        <label className=''>New price *</label>  
        <input type='number'  ref={newprice} className='form-control' required />

        </div>
              <div className="mb-3">
                <input
                  type="submit"
                  className="btn btn-lg btn-dark bg-dark text-white"
                  value="Update Product"
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
