import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectApi } from '../services/allApi';

const Addproject = () => {
    const [show, setShow] = useState(false);
    const  [projectDetails, setProjectDetails] = useState({
      title:"",
      language:"",
      github:"",
      website:"",
      overview:"",
      projectImage:""
    })
    const [preview,setPreview] = useState(null)
    const [key,setKey] =useState(1)

    const [token, setToken] = useState("")
    console.log(token)
    console.log(preview)
    const handleFile = (e)=>{
      setProjectDetails({...projectDetails,projectImage:e.target.files[0]})
    }

    console.log(projectDetails);
    const handleClose = () => {
      setShow(false)
    handleClear()};

      const handleClear = () =>{
        setPreview(null)
        setProjectDetails({
          title:"",
          language:"",
          github:"",
          website:"",
          overview:"",
          projectImage:""
        })
        setKey(!key)
      }
    const handleShow = () => setShow(true);

    const handleAdd = async() =>{
      const {title,language,github,website,overview,projectImage} = projectDetails;

      if(!title ||!language||!github||!website|| !overview || !projectImage){
        toast.info('Please fill the form completely')
      }
      else{
        //append()- new method
        const reqBody = new FormData()

        reqBody.append("title",title)
        reqBody.append("language",language)
        reqBody.append("github",github)
        reqBody.append("website",website)
        reqBody.append("overview",overview)
        reqBody.append("projectImage",projectImage)
        
        if(token){
          const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
          }
          const result = await addProjectApi(reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            toast.success("project added sucessfully")
            handleClose()
          }
          else if(result.status == 406){
            toast.warning(result.response.data)
          }
          else{
            toast.error('Something went wrong')
          }
        }
        else{
          toast.warning('Please Login')
        }
      }
    }

    useEffect(()=>{
      if(projectDetails.projectImage){
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }
    },[projectDetails.projectImage])

    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
      }
    },[])
  
  return (
    <>
        <button onClick={handleShow} className='btn btn-success rounded-0 text-light'>Add Project</button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        {/* // to use input type file as image */}
                        <label htmlFor="projectimage">
                        <input type="file" id="projectimage"
                        // use key={} attribute for triggering change onChange event whenever the key state passed as a value changes
                        className='d-none' key={key} onChange={(e)=>handleFile(e)} />
                        <img src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY66nb7jL497jYoSdV0NkjnJcEoXs29VqOpA&s"} alt="" width={"100%"}/>

                        </label>

                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" value={projectDetails.title} placeholder='Title' className='form-control' onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <input type="text" value={projectDetails.language} placeholder='Language' className='form-control'
                             onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <input type="text" value={projectDetails.github} placeholder='Github' className='form-control'
                             onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <input type="text" value={projectDetails.website} placeholder='Website' className='form-control'
                             onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <textarea rows={5} value={projectDetails.overview} placeholder='Overview'
                             onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}></textarea>
                        </div>
                   
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
        <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
      </Modal>


    </>
  )
}

export default Addproject