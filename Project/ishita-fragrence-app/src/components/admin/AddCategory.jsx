import React, {useRef, useStatie } from 'react';
import { Container, Row } from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import axios from 'axios';
import Swal from'sweetalert2';
import {useNavigate} from 'react-router-dom';


export default function AddCategory() {
 // const [categoryName, setCategoryName] = useState('');
  //const [addedDate, setAddedDate] = useState('');
  const categoryname=useRef("");
  const addeddate=useRef("");
  const Navigate=useNavigate("");
  //const setCategoryName =useRef("");
  //const setAddedDate=useRef(""); 

const Addcreatecategory=(e)=>{
 var insert={

  categoryname:categoryname.current.value,
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
            <h4 className='text-dark mt-5'>&nbsp;Add Your Category</h4>
            <form onSubmit={Addcreatecategory}>
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
