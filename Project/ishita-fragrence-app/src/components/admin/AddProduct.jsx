import React, { useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProduct = () => {
  //const [productCategory, setProductCategory] = useState('');
  //const [photo, setPhoto] = useState('');
const photo = useRef("");
const description= useRef("");
  const productcategory= useRef("");
  const productname=useRef('');
  //const [description, setDescription] = useState('');
const oldprice =useRef('');
const newprice =useRef('');
const quantity =useRef('');
function Imageupload(){
  const[image,setImage]=useState("")
  function handleImage(e){
  console.log(e.target.files)
  setImage(e.target.files[0])
  }
  function handleApi(){
const formData=new FormData()
formData.append('image',image)
axios.post('url',formData).then((res)=>{
  console.log(res)
})
  }
}

const AddproductEventHandeler=(e)=>{
  var insert={  
    productcategory:productcategory.current.value,
    description:description.current.value,
    photo:photo.current.value,
    oldprice:oldprice.current.value,
    newprice:newprice.current.value,
    quantity:quantity.current.value,
    productname:productname.current.value
  }
  // call api to create an account of patient  http://localhost:4000/addclients
  e.preventDefault();
  // call axios api 
  axios.post("http://localhost:8000/addproduct",insert)
  // .then((result)=>{console.log(result.text);
  .then(()=>{
  Swal.fire({
    title: "Good job!",
    text: "Thanks for Added New products!",
    icon: "success"
  })
  
  Navigate("/admin-login/add-product");
  
  });
  
  e.target.reset();
  
  }
  
  return (
    <div>
      <AdminHeader />
      <Container fluid className="m-0 p-0">
        <Row>
          <div className="col-md-3 bg-black">  
            <AdminSidebar />
          </div>
          <div className="col-md-8">
            <h4 className="text-dark mt-5">&nbsp;Add Product</h4>
            <form onSubmit={AddproductEventHandeler}>

              <div className="mb-3">
                <label className=''>Select Product Category *</label>  
                <select ref={productcategory}  className='form-control' required>
                <option value="firstrainperfume">First Rain Perfume</option>
                <option value="firstrainperfume">Forest Rain perfume</option>
                </select>
                </div>

                <div className="mb-3">
                <label className=''> Product Name</label>
                <input type='text'  ref={productname} className='form-control' required />
                </div>

                <div className="mb-3">
                <label className="form-label">
                  Photo
                </label>
                <input
                  
                  type="text"
                  className=""
                  
                  ref={photo}                  
                />  
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descriptions
                </label>
                <textarea
                  className=''
                  id="description"
                  rows="3"
                  ref={description}
                ></textarea>
              </div>
              
              <div className='mb-3'>
              <label className=''>Old price *</label>  
              <input type='number'  ref={oldprice} className='form-control' required />
              </div>
              
              <div className='mb-3'>
              <label className=''>New price *</label>  
              <input type='number'  ref={newprice} className='form-control' required />
              </div>
              
              <div className="mb-3">
                <label className=''> Add Quantity</label>
                <input type='text'  ref={quantity} className='form-control' required />
                </div>

              <div className="mb-3">
                <input
                  type="submit"
                  className="btn btn-lg btn-dark bg-dark text-white"
                  value="Add product"
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
};

export default AddProduct;
