import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Profile = () => {
  return (
    <div className="p-4 shadow">
      <div className="d-flex justify-content-between">
        <h2>Profile</h2>
        <button className="btn" style={{borderColor:'rgb(160,98,192)',color:'rgb(160,98,192)'}}>
            <FontAwesomeIcon icon={faAngleUp}/>
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <label htmlFor="profileImage" className="mb-4 d-flex justify-content-center align-items-center">
        <input type="file" style={{display:'none'}} id="profileImage"/>
        <img src="https://cdn-icons-png.flaticon.com/128/9131/9131529.png" alt="no image" className="w-75"/>
        </label>
        
      </div>
<div className="w-100">
        <div className="mb-3">  <input type="text" className="form-control border-black" /></div>
         <div className="mb-3"> <input type="text" className="form-control border-black" /></div>
       <div className="mb-3 w-full d-flex justify-content-center">   <button className="p-2 btn btn-success px-5 py-2 rounded-0  ">Update</button></div>
</div>
    </div>
  );
};

export default Profile;
