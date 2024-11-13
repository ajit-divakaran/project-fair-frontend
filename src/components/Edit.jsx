import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { serverUrl } from "../services/serverUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserProjectApi } from "../services/allApi";
import { editResponseContext } from "../context/Contextshare";

const Edit = ({ projects }) => {
  const {setEditResponse} = useContext(editResponseContext)
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(null);
  const [key, setKey] = useState(true);
  const [projectDetails, setProjectDetails] = useState({
    title: projects.title,
    language: projects.language,
    github: projects.github,
    website: projects.website,
    overview: projects.overview,
    projectImage: "",
  });

  const handleShow = () => setShow(true);
  const handleFile = (e) => {
    setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] });
    setKey(!key);
  };

  const handleCancel = () => {
    setProjectDetails({
      title: projects.title,
      language: projects.language,
      github: projects.github,
      website: projects.website,
      overview: projects.overview,
      projectImage: "",
    });
    setPreview(null);
  };

  const handleClose = () => {
    handleCancel();
    setShow(false);
  };

  const handleUpdate = async()=>{
    const {title,language,github,website,overview,projectImage} = projectDetails;
    if(!title ||!language||!github||!website|| !overview){
      toast.info('Please fill the form completely')
  }
  else{
    const reqBody = new FormData()

    reqBody.append("title",title)
    reqBody.append("language",language)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("overview",overview)
    preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",projects.projectImage)

    const token = sessionStorage.getItem("token")

    if(preview){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await updateUserProjectApi(projects._id,reqBody,reqHeader)

      if(result.status == 200){
        setEditResponse(result)
        toast.success('Project updated successfully')
        handleClose()
      }
      else{
        handleCancel()
        toast.error('Something went wrong')
      }
    }
    else{
      const reqHeader = {
        "Content-Type":"application/json", 
        "Authorization":`Bearer ${token}`
      }
      const result = await updateUserProjectApi(projects._id,reqBody,reqHeader)

      if(result.status == 200){
        setEditResponse(result)
        toast.success('Project updated successfully')
        handleClose()
      }
      else{
        handleCancel()
        toast.error('Something went wrong')
      }
      
    }
  }
}
    useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);
  return (
    <div className="m-0">
      <FontAwesomeIcon
        icon={faPenToSquare}
        className="mx-3"
        style={{ color: "#8e729d" }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">
            Add Project Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                {/* // to use input type file as image */}
                <label htmlFor="projectimage">
                  <input
                    type="file"
                    id="projectimage"
                    className="d-none"
                    onChange={handleFile}
                    key={key}
                  />
                  <img
                    src={
                      preview
                        ? preview
                        : `${serverUrl}/upload/${projects?.projectImage}`
                    }
                    alt=""
                    width={"100%"}
                  />
                </label>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    value={projectDetails?.title}
                    onChange={(e) =>
                      setProjectDetails({
                        ...projectDetails,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Language"
                    className="form-control"
                    value={projectDetails?.language}
                    onChange={(e) =>
                      setProjectDetails({
                        ...projectDetails,
                        language: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Github"
                    className="form-control"
                    value={projectDetails?.github}
                    onChange={(e) =>
                      setProjectDetails({
                        ...projectDetails,
                        github: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Website"
                    className="form-control"
                    value={projectDetails?.website}
                    onChange={(e) =>
                      setProjectDetails({
                        ...projectDetails,
                        website: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    rows={5}
                    placeholder="Overview"
                    value={projectDetails?.overview}
                    onChange={(e) =>
                      setProjectDetails({
                        ...projectDetails,
                        overview: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </div>

  );
};

export default Edit;
