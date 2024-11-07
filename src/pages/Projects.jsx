import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { allprojectApi } from "../services/allApi";

const Projects = () => {
  const [allproject, setAllProject] = useState([])
  const getAllProject = async()=>{
    const result = await allprojectApi()
    console.log(result.data);
  }

  useEffect(()=>{
    getAllProject()
  },[])
  return (
    <div className="w-full pt-5 container-fluid">
      <h3 className="text-center">All Projects</h3>
      {/* not login */}
      {/* <div className="d-flex flex-column align-items-center">
      <img src="https://cdn-icons-gif.flaticon.com/6569/6569164.gif" className="w-25" alt="" />
      <p>Please <span className="text-decoration-underline text-primary">Login</span> to view all projects</p>
    </div> */}

      <div className="row w-full">
        <div className="col-1 p-0"></div>
        <div className="col-10 p-0">
          <div className="row w-full">
            <div className="col-2"></div>
            <div className="col-8 d-flex align-items-center">
              <input type="text" className="form-control shadow-lg" placeholder="Technologies" />
              <FontAwesomeIcon icon={faSearch} style={{color:'gray',margin:'0',backgroundColor:'white',marginLeft:'-1.55rem'}}/>
            </div>
            <div className="col-2"></div>
          </div>
          {/* <div className="row w-full">
          <div className="col-md-4 my-3">
            <ProjectCard img={'https://i.imgur.com/y3OBhTt.png'} title={'E-cart App'}/>
            </div>
            <div className="col-md-4 my-3">
            <ProjectCard img={'https://i.imgur.com/y3OBhTt.png'} title={'E-cart App'}/>
            </div>

          </div> */}
        </div>
        <div className="col-1 p-0"></div>
      </div>
    </div>
  );
};

export default Projects;
