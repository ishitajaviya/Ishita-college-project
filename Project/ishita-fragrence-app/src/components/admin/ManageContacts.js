import React from 'react';
import Chart from 'react-google-charts';
import { Container,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect} from 'react';
import axios from 'axios';

// bar charts

// const dataOld = [
//     ["Name", "Popularity"],
//     ["Cesar", 250],
//     ["Rachel", 4200],
//     ["Patrick", 2900],
//     ["Eric", 8200],
//   ];
  
//   const dataNew = [
//     ["Name", "Popularity"],
//     ["Cesar", 370],
//     ["Rachel", 600],
//     ["Patrick", 700],
//     ["Eric", 1500],
//   ];
  
//   export const diffdata = {
//     old: dataOld,
//     new: dataNew,
//   };
  
//   export const options = {
//     legend: { position: "top" },
//   };


// columns charts



export const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];
  


export default function ManageContacts() {
  const[contactdata,setContactData]=useState([]);
  const Navigate=useNavigate();
  // api to get all data 
  useEffect(()=>{
  axios.get("http://localhost:8000/contactus")
  .then((response)=>{setContactData(response.data)
  })
  
  
  },[]) 





  return (
    <div>
    <AdminHeader />
    <Container fluid className="m-0 p-0">
    <Row>
    <div className='col-md-3 bg-black'>
    <AdminSidebar />
    </div>
    <div className='col-md-8'>
<h4 className='text-dark mt-5'>&nbsp;Manage Contacts</h4>
<hr className='border border-1 border-secondary w-50' />
  <table className="table table-responsive ms-3 mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Message</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
  {contactdata && contactdata.map((row)=>{
   
    
   return (
           
   // eslint-disable-next-line react/jsx-key
   <tr>
     <th scope="row" key={row.id}>{row.id}</th>
     <td key={row.name}>{row.name}</td>
     <td key={row.email}>{row.email}</td>
     <td key={row.city}>{row.message}</td>
     
     <td><button type='button' onClick={()=>Navigate(`/admin-login/delete-contacts/${row.id}`)} className='btn btn-danger text-white'><span className='bi bi-trash'></span></button></td>


   </tr>
  
);

})}
  </tbody>
</table>



    {/* customer traffic bar charts */}
    <h4 className='p-3 ms-2'>Customer Traffic</h4>
   {/* <Chart
    chartType="BarChart"
    width="100%"
    height="400px"
    diffdata={diffdata}
    options={options}
  />  */}


  <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
    
    </div>
    </Row>

    </Container>
    <AdminFooter />
    </div>
  )
}
