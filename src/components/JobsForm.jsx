import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../../services/jobService'
const JobsForm = () => {
    const[formData,setFormData]=useState({title:"",company:"",location:""})
    const changeHandler=(event)=>{
        const {name,value}=event.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

        const {id}=useParams()
        const navigate=useNavigate()
        const submitHandler=async(e)=>{
            e.preventDefault()
            try
            {
                if(id)
                {
                    await API.put(`/jobs/${id}`,formData)
                    alert("Job updated Successfully!!")
                }
                else
                    {
                        await API.post("/jobs",formData)
                        alert("Job created Successfully!!")
                    }
                    navigate("/jobs")
                
            }
            catch(error)
                {
                 console.log(error)   
                }
        }
        useEffect(()=>{
            fetchJobs()
        },[id])
        const fetchJobs=async()=>{
    try{
    const response=await API.get("/jobs")
  
    setJobs(response.data)
    }
    catch(error)
    {
      console.log(error)
    }
  }
    
  return (
    <div className='auth-container'>
        <div className='auth-card'>
            <h2>{id?"Update Job":"Create Job"}</h2>
            <form onSubmit={submitHandler}>
                <input type="text" name="title" placeholder="Enter Title"
                value={formData.title} onChange={changeHandler}/>
                <br/>

                <input type="text" name="company" placeholder="Enter company"
                value={formData.company} onChange={changeHandler}/>
                <br/>

                <input type="text" name="location" placeholder="Enter location"
                value={formData.location} onChange={changeHandler}/>
                <br/>
                <button type="submit">{id?"Update":"Create"}</button>
            </form>
        </div>

    </div>
   
  )
}

export default JobsForm