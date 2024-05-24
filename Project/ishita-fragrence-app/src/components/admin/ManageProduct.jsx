
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Container,Row} from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'

export default function ManageProduct() {
// show data in admin of customers
const[product,addProduct]=useState([]);
const Navigate=useNavigate();
// api to get all data 

useEffect(()=>{
axios.get(`http://localhost:8000/addproduct`)
.then((response)=>{addProduct(response.data)
});


},[]);  //blank array dependency render one times of data


return (

<div>
<AdminHeader/>
<Container fluid className="m-0 p-0">
<Row>
<div className='col-md-3 bg-black'>
<AdminSidebar />
</div>
<div className='col-md-8 p-5'>
<h3 className='ms-3 mt-4'>Manage All Products <button type='button' className='btn btn-danger text-white float-end'>Export in CSV</button></h3>
<hr className='border border-1 border-dark' />

<table className="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">product Category</th>
<th scope="col">product Name</th>
<th scope="col">photo</th>
<th scope="col">description</th>
<th scope="col">old price</th>
<th scope="col">new price</th>
<th scope="col">quantity</th>
</tr>
</thead>
<tbody>

{product && product.map((row)=>{

return (

// eslint-disable-next-line react/jsx-key
<tr>
<th scope="row" key={row.id}>{row.id}</th>
<td key={row.productcategory}>{row.productcategory}</td>
<td key={row.productname}>{row.productname}</td>
<td key={row.photo}><img src={row.photo} alt='product' style={{width:"80px" ,height :"80px"}}/></td>

<td key={row.description}>{row.description}</td>
<td key={row.oldprice}>{row.oldprice}</td>
<td key={row.newprice}>{row.newprice}</td>
<td key={row.quantity}>{row.quantity}</td>


<td colSpan={2}><div style={{minWidth:"120px"}}><button type='button' onClick={()=>Navigate(`/admin-login/delete-product/${row.id}`)} className='btn btn-danger text-white'><span className='bi bi-trash'></span></button>

<button type='button' onClick={()=>Navigate(`/admin-login/update-product/${row.id}`)} className='btn btn-info text-white ms-4'><span className='bi bi-pencil'></span></button>
</div>
</td>
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
