import { faStackOverflow } from "@fortawesome/free-brands-svg-icons/faStackOverflow";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { loginResponseContext } from "../context/Contextshare";

const Header = () => {
const [token,setToken] = useState(null)
const navigate = useNavigate()
const {setLoginResponse,loginResponse} = useContext(loginResponseContext)

const handleLogout = ()=>{
  sessionStorage.removeItem('existingUser')
  sessionStorage.removeItem('token')
  setLoginResponse(false)
  navigate('/')
}
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
        setToken(sessionStorage.getItem('token'))
    }
    else{
      setToken(null)
    }
  },[loginResponse])
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="shadow-lg">
        <Container>
          <Link to={"/"} className="text-decoration-none">
            <Navbar.Brand href="#home" className="ms-2">
              <FontAwesomeIcon
                icon={faStackOverflow}
                style={{ color: "white", marginRight: "1rem" }}
              />
              Project Fair
            </Navbar.Brand>
          </Link>
{    token &&      <button className="btn btn-warning ms-auto rounded-0" onClick={handleLogout}>
            <FontAwesomeIcon icon={faPowerOff} className="me-2" />
            Logout
          </button>}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
