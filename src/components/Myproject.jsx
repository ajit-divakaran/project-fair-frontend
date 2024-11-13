// import React from 'react'
import Addproject from './Addproject'
import Edit from './Edit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { removeUserprojectApi, userProjectApi } from '../services/allApi'
import { useContext, useEffect, useState } from 'react'
import { addResponseContext, editResponseContext } from '../context/Contextshare'

const Myproject = () => {
  const [userProject,setUserProject] = useState({})
  //context
  const {addResponse} = useContext(addResponseContext)
  const [removeStatus,setRemoveStatus] = useState(null)

  const {editResponse} = useContext(editResponseContext)
  const getUserProject = async() =>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token");

      const reqHeader = {
        "Content-Type":"application/json", 
        "Authorization":`Bearer ${token}`
      }

      const result = await userProjectApi(reqHeader)
      setUserProject(result.data)
    }
  }

  const handleDelete=async(id)=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json", 
        "Authorization":`Bearer ${token}`
      }
      
      const result = await removeUserprojectApi(id,reqHeader)
      setRemoveStatus(result)
    }
  }

  useEffect(()=>{
    getUserProject()
  },[addResponse,removeStatus,editResponse])
  return (
    <div className='p-4 shadow w-100'>
        <div className="d-flex mt-4 justify-content-between">
            <h3 className='text-success'>My Project</h3>
            <Addproject/>
        </div>

{  userProject?.length>0 ? userProject?.map((item)=>(
  <div key={item} className="p-3 bg-light mt-4 rounded-2 d-flex justify-content-between">
  <h4>{item?.title}</h4>
  <div className="d-flex align-items-center">
      <Edit projects = {item}/>
      <FontAwesomeIcon icon={faGlobe}  className='mx-3 text-warning'/>
      <FontAwesomeIcon icon={faGithub} className='mx-3 text-success'/>
      <FontAwesomeIcon icon={faTrashCan} className='mx-3 text-danger' onClick={()=>handleDelete(item?._id)}/>

  </div>
</div>
)) : <h4>No project added</h4>   }
    </div>
  )
}

export default Myproject