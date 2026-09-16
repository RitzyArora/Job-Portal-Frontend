import React, { useState } from 'react'
import API from "../../services/jobService"
const Register = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    role:"student"

  })
  const [error,setError]=useState([])
  const changeHandler=(event)=>
    {
      const{name,value}=event.target
      setFormData({
        ...formData,
        [name]:value
      })
    }
    const validateForm=()=>{
         const errorMessage=[]
           if(!formData.name.trim())
      {
        errorMessage.name="Name is required"
      }
      else if(formData.name.trim().length<3)
      {
        errorMessage.name="Name must be atleast of 3 characters"
      }
          if(!formData.email.trim())
      {
        errorMessage.email="Email is required"
      }
       if(!formData.password.trim())
      {
        errorMessage.password="Password is required"
      }
      else if(formData.password.trim().length<6)
      {
        errorMessage.password="Password must be atleats 6 characters"
      }
      return errorMessage
    }
    const submitHandler=async(event)=>{
    event.preventDefault()
    const validErrors=validateForm()

    if(Object.keys(validErrors).length>0)
    {
      setError(validErrors)
    }
    try
    {
      setError({})
      const response=await API.post("/auth/register",{
        name:formData.name,
        email:formData.email,
        password:formData.password,
        role:formData.role
      })
      alert("Registeration Successfull!!")
    //Reset form
    setFormData({
      name:"",
      email:"",
      password:"",
      role:"student"
    })
    
    }
    catch(error)
    {
      console.log(error)
      alert("Registeration Failed")
    }
   
  }


  return (
   <div>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
         <input type="text" name='name' placeholder="Enter Name"
        value={formData.name} onChange={changeHandler} />
        {error.name && <p style={{color:'red'}}>{error.email}</p>}
        <br />
        <input type="email" name='email' placeholder="Enter Email"
        value={formData.email} onChange={changeHandler} />
        {error.email && <p style={{color:'red'}}>{error.email}</p>}
        <br />
        <br />
        <input type="password" name='password' placeholder="Enter Password"
        value={formData.password} onChange={changeHandler} />
        {error.password && <p style={{color:'red'}}>{error.password}</p>}
        <br />
        <select name="role" value={formData.role} onChange={changeHandler}>
          <option value="student">Student</option>
          <option value="recruiter">Recruiter</option>
        </select>
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )

}
export default Register