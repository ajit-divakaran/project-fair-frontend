import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const registerApi = async(reqbody) =>{
    console.log("inside register api")
    return await commonApi('POST',`${serverUrl}/register`,reqbody)
}

//login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

// add project

export const addProjectApi = async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/add-project`,reqBody, reqHeader)
}


// get home project 
export const homeProjectApi = async()=>{
    return await commonApi('GET',`${serverUrl}/home-projects`)
}

//all project
export const allprojectApi = async()=>{
    return await commonApi('GET',`${serverUrl}/all-projects`)
}