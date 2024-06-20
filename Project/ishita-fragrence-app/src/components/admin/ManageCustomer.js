
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Container,Row} from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import {useNavigate} from 'react-router-dom'

export default function ManageCustomers() {
// show data in admin of customers
const[customerdata,setCustomerData]=useState([]);
const Navigate=useNavigate();
// api to get all data 
useEffect(()=>{
axios.get("http://localhost:8000/login")
.then((response)=>{setCustomerData(response.data)
})


},[]) //blank array dependency render one times of data


    return (

    <div>
    <AdminHeader/>
    <Container fluid className="m-0 p-0">
    <Row>
    <div className='col-md-3 bg-black'>
    <AdminSidebar />
    </div>
    <div className='col-md-8 p-5'>
     <h3 className='ms-3 mt-4'>Manage All Customers</h3>
     <hr className='border border-1 border-dark' />

     <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">ZipCode</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
  {customerdata && customerdata.map((row)=>{
   
    
    return (
            
    // eslint-disable-next-line react/jsx-key
    <tr>
      <th scope="row" key={row.id}>{row.id}</th>
      <td key={row.email}>{row.email}</td>
      <td key={row.address}>{row.address}</td>
      <td key={row.city}>{row.city}</td>
      <td key={row.pincode}>{row.pincode}</td>
      <td><button type='button' onClick={()=>Navigate(`/admin-login/delete-customers/${row.id}`)} className='btn btn-danger text-white'><span className='bi bi-trash'></span></button></td>


    </tr>
   
);

})}
  </tbody>
</table>



    </div>
    </Row>
    </Container>
   <AdminFooter />
   </div>
  
  )
}
