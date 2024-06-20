
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Container,Row} from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
import Swal from 'sweetalert2';
import {Link,useNavigate,useParams} from 'react-router-dom'

export default function ManageCategory() {
// show data in admin of customers
const[category,addCategory]=useState([]);
const Navigate=useNavigate();
// api to get all data 
useEffect(()=>{
axios.get("http://localhost:8000/addcategory")
.then((response)=>{addCategory(response.data)
});
// delete data in admin of Manage Customers
// axios.get("http://localhost:4000/createaccount")
// .then((response)=>{setCustomerData(response.data)
// });

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
<h3 className='ms-3 mt-4'>Manage All Category <button type='button' className='btn btn-danger text-white float-end'>Export in CSV</button></h3>
<hr className='border border-1 border-dark' />

<table className="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">categoryname</th>
<th scope="col">addedate</th>

</tr>
</thead>
<tbody>

{category && category.map((row)=>{

return (

// eslint-disable-next-line react/jsx-key
<tr>
<th scope="row" key={row.id}>{row.id}</th>
<td key={row.categoryname}>{row.categoryname}</td>
<td key={row.addeddate}>{row.addeddate}</td>


<td colSpan={2}><div style={{minWidth:"120px"}}><button type='button' onClick={()=>Navigate(`/admin-login/deletecategory/${row.id}`)} className='btn btn-danger text-white'><span className='bi bi-trash'></span></button>

<button type='button' onClick={()=>Navigate(`/admin-login/update-category/${row.id}`)} className='btn btn-info text-white ms-4'><span className='bi bi-pencil'></span></button>
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
