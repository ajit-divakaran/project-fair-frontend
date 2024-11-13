import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { serverUrl } from "../services/serverUrl";
import { toast } from "react-toastify";
import { updateUserProfileApi } from "../services/allApi";
import Collapse from 'react-bootstrap/Collapse';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    username:"",
    email:"",
    password:"",
    profile:"",
    github:"",
    linkedin:""
  })
  console.log(userDetails)

  const [existingImg,setExistingImg] = useState("")

const[preview,setPreview] = useState(null)

const [updatesessionStatus,setUpdatesessionStatus] = useState(null)

const [open, setOpen] = useState(false);
const handleFile = (e)=>{
  setUserDetails({...userDetails,profile:e.target.files[0]})
}

const handleUpdate= async()=>{
  const {username, email, password, profile, github, linkedin} = userDetails
  if(!github || !linkedin){
    toast.info('please add github and linkedin')
  }
  else{
    const reqBody = new FormData()
    reqBody.append("username",username)
    reqBody.append("email",email)
    reqBody.append("password",password)
    reqBody.append("github",github)
    reqBody.append("linkedin",linkedin)
    preview?reqBody.append("profile",profile):reqBody.append("profile",existingImg)
    const token = sessionStorage.getItem("token")

    if(preview){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await updateUserProfileApi(reqBody, reqHeader)
      console.log(result)
      if(result.status==200){
        toast.success("Updated Successfully")
        sessionStorage.setItem('existingUser',JSON.stringify(result.data))
        setUpdatesessionStatus(result)

      }
      else{
        toast.error('Something went wrong')
      }
    }
    else{
      const reqHeader = {
        "Content-Type":"application/json", 
        "Authorization":`Bearer ${token}`
      }
      const result = await updateUserProfileApi( reqBody, reqHeader)
      console.log(result)
      if(result.status==200){
        toast.success("Updated Successfully")
        sessionStorage.setItem('existingUser',JSON.stringify(result.data))
        setUpdatesessionStatus(result)

      }
      else{
        toast.error('Something went wrong')
      }
    }
  }
}

useEffect(()=>{
  if(userDetails.profile){
    setPreview(URL.createObjectURL(userDetails.profile))
  }
},[userDetails.profile])

console.log(preview)

  useEffect(()=>{
    if(sessionStorage.getItem('existingUser')){
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      console.log(user);
      setUserDetails({...userDetails,username:user.username,email:user.email,password:user.password,github:user.github, linkedin:user.linkedin})
      setExistingImg(user.profile)
    }
  },[updatesessionStatus])
  return (
    <div className="p-4 shadow">
      <div className="d-flex justify-content-between">
        <h2>Profile</h2>
        <button className="btn" style={{borderColor:'rgb(160,98,192)',color:'rgb(160,98,192)'}} onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
           { open?<FontAwesomeIcon icon={faAngleUp}/>:<FontAwesomeIcon icon={faAngleDown}/>}
        </button>
      </div>
<Collapse in={open}>
<div>
          <div className="d-flex justify-content-center align-items-center">
            <label htmlFor="profileImage" className="mb-4 d-flex justify-content-center align-items-center">
            <input type="file" style={{display:'none'}} id="profileImage" onChange={(e)=>handleFile(e)}/>
     {      existingImg==""? <img src={preview?preview:"https://cdn-icons-png.flaticon.com/128/9131/9131529.png"} alt="no image" className="w-75" style={{borderRadius:"50%" , height:'150px'}}/>
              :
            <img src={preview?preview:`${serverUrl}/upload/${existingImg}`} alt="no image" className="w-75 h-full" style={{borderRadius:"50%"}}/>}
            </label>
            
          </div>
    <div className="w-100">
            <div className="mb-3">  <input type="text" className="form-control border-black" placeholder = "github" onChange={(e)=>setUserDetails({...userDetails,github:e.target.value})}/></div>
             <div className="mb-3"> <input type="text" className="form-control border-black" placeholder="linkedin" onChange={(e)=>setUserDetails({...userDetails,linkedin:e.target.value})} /></div>
           <div className="mb-3 w-full d-flex justify-content-center">   <button className="p-2 btn btn-success px-5 py-2 rounded-0  " onClick={handleUpdate}>Update</button></div>
    </div>
</div>
</Collapse>
    </div>
  );
};

export default Profile;
