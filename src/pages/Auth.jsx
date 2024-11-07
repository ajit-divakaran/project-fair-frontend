import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../services/allApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = ({ register }) => {

  const [userDetails,setUserDetails] = useState({
    username:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()
  console.log(userDetails)

  const handleRegister = async() =>{
    console.log(userDetails)
    const {username,email,password} = userDetails
    if(!username || !email || !password){
      toast.info('Please fill the form completely')
    }
    else{
      const result = await registerApi({username,email,password})
      console.log(result);
      if(result.status==200){
        toast.success('Registration successful')
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
        navigate('/login')
      }
      else if(result.status==406){
        toast.info(result.response.data);

      }
      else{
        toast.error('Something went wrong')
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
      }
    }
  }

  const handleLogin = async()=>{
const {email, password} = userDetails
if(!email || !password){
  toast.info('Please fill the form completely')
}
else{
  const result = await loginApi({email, password})
  console.log(result)
  if(result.status==200){
    toast.success("Login Successful")
    setUserDetails({
      username:"",
      email:"",
      password:""
    })
    sessionStorage.setItem('existingUser',JSON.stringify(result.data.existingUser))
    sessionStorage.setItem('token',result.data.token)
    setTimeout(()=>{navigate('/')},2000)
    
  }
  else if(result.status==406){
    toast.warning(result.response.data)
  }
  else{
    toast.error("Something went wrong")
  }
}
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row w-full">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p className="text-warning">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to home
            </p>
            <div className="row w-full rounded bg-success">
              <div className="col-md-5">
                <img
                  src="/images/vecteezy_safety-login-page-3d-illustration_14219604.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5 p-5">
                <h2 className="text-light text-center">
                  <FontAwesomeIcon icon={faStackOverflow} />
                  Project Fair
                </h2>
                {!register ? (
                  <p className="text-center">Sign In to Your Account</p>
                ) : (
                  <p className="text-center">Sign Up to Your Account</p>
                )}
                <div className="d-flex flex-column gap-2">
                  {register && (
                    <input
                      type="text"
                      className="w-full p-2"
                      placeholder="Username"
                      value={userDetails.username}
                      onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}
                    />
                  )}
                  <input
                    type="email"
                    className="w-full p-2"
                    placeholder="E-mail id"
                    value={userDetails.email}
                    onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}
                  />
                  <input
                    type="password"
                    className="w-full p-2 block"
                    placeholder="Password"
                    value={userDetails.password}
                    onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
                  />
                  {!register ? (
                    <div>
                      <button  className="btn btn-warning rounded-0 mt-2" style={{width:'100%'}} onClick={handleLogin}>Login</button>
                      <p className="mt-2">
                        New user? click here to
                        <Link
                          to={"/register"}
                          className="text-decoration-underline text-warning"
                        >
                          Register
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <button onClick = {handleRegister} className="btn btn-warning rounded-0 mt-2" style={{width:'100%'}}>Register</button>
                      <p>
                        Already a user? click here to
                        <Link
                          to={"/login"}
                          className="text-decoration-underline text-warning"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </div>
  );
};

export default Auth;
