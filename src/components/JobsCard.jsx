import React from 'react'
import './JobsCard.css'
import {useNavigate} from 'react-router-dom'

// const JobsCard = ({job,onDelete}) => {
//   const navigate=useNavigate()
//   return (
//     <div className='job-card'>
//         <h3>{job.title}</h3>
//         <h3>{job.company}</h3>
//         <h3>{job.location}</h3>
//         {role==="recruiter"&&(
//           <button onClick={()=>navigate(`/jobsedit/${job._id}`)}>Update</button>
//         )}
//          {role==="recruiter"&&(
//         <button onClick={()=>onDelete(job._id)}>Delete</button>  
//         )}
        
//     </div>
//   )
// }


// export default JobsCard

const JobsCard = ({job,onDelete}) => {
  const navigate=useNavigate()
  const role=localStorage.getItem("role")


  return (
    <div className='job-card'>
        <h3>{job.title}</h3>
        <h3>{job.company}</h3>
        <h3>{job.location}</h3>
        {
          role==="recruiter" &&(
        <button onClick={()=>navigate(`/jobsedit/${job._id}`)}>Update</button>
        )}
        {
          role==="recruiter" &&(
         <button onClick={()=>onDelete(job._id)}>Delete</button>
         )}
         </div>
  )
}


export default JobsCard

