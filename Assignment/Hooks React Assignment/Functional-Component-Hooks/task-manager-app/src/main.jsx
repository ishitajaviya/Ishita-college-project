import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import DeleteTask from './components/DeleteTask'
import UpdateTask from './components/UpdateTask'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/delete-task/:id' element={<DeleteTask/>}/>
        
        <Route path='/update-task/:id' element={<UpdateTask/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)

