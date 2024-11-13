import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { homeProjectApi } from "../services/allApi";

const Home = () => {
  const [isLogin,setIsLogin] = useState(false)
  const [homeProject, setHomeProject] = useState([])

  const getHomeProject = async()=>{
    const result = await homeProjectApi()
    setHomeProject(result.data)
  }
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setIsLogin(true)
    }
    getHomeProject()
    
  },[])
  return (
    <>
      <div style={{ height: "100vh" }} className="bg-success container-fluid">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-md-1"></div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column">
              <h1 className="text-light">Project Fair</h1>
              <p>One step destination for all software projects</p>
              <div>
         { !isLogin ?   <Link to={'/register  '}>
                <button className="btn btn-warning shadow-md" id="btn-hover">
                    Get started
                    <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
                  </button>
             </Link> :
           <Link to={'/dashboard'}>
                  <button className="btn btn-warning shadow-md" id="btn-hover">
                    Manage Projects
                    <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
                  </button>
           </Link>}

              </div>
            </div>
          </div>
          
          <div className="col-md-2"></div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img src="/image.png" alt="" width="60%" />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className="w-full pt-5 container-fluid">
        <div className="row w-full">
          <div className="col-1 p-0"></div>
          <div className="col-10 p-0">
            <h2 className="text-center">Explore Our Projects</h2>
            <div className="row w-full">

           { homeProject?.map((item)=>(<div key={item} className="col-md-4 my-3">
                <ProjectCard project={item} />
              </div>))  }
            </div>
            <Link to={"/projects"}>
              <p className="text-center text-decoration-underline" id="plink">
                See more projects
              </p>
            </Link>
          </div>
          <div className="col-1 p-0"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
