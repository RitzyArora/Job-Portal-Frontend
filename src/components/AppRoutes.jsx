import React from 'react'
import Navbar from '../pages/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Jobs from './Jobs'
import JobsForm from './JobsForm'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/jobs" element={<ProtectedRoutes allowedRoles={["recruiter","student"]}><Jobs/></ProtectedRoutes>}/>
            <Route path="/jobscreate" element={<ProtectedRoutes allowedRoles={["recruiter"]}><JobsForm/></ProtectedRoutes>}/>
             <Route path="/jobsedit/:id" element={<ProtectedRoutes allowedRoles={["recruiter"]}><JobsForm/></ProtectedRoutes>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes