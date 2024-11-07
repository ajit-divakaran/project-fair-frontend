import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { serverUrl } from '../services/serverUrl';

const ProjectCard = ({project}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <div className="rounded-bottom border border-black shadow-lg" onClick={handleShow}>
        <img src={`${serverUrl}/upload/${project.projectImage}`} alt="" width="100%" />
        <h3
          className="py-3 text-center "
          style={{
            boxSizing: "border-box",
            fontSize: "calc(0.95rem + 0.25vw",
            borderTop: "0.85px solid #60606073",
          }}
        >
         {project.title}
        </h3>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
                <div className="row w-full">
                    
                    <div className="col-12 d-flex gap-3">
                        <img src={`${serverUrl}/upload/${project.projectImage}`} alt="" className="w-50" />
                        <p className="w-50">{project.overview}</p>
                    </div>
                    <div className='d-flex gap-2 mt-4'>
                       <Link to={project?.github} target="_blank"> <FontAwesomeIcon icon={faGithub}/></Link>
                        <Link to={project?.website} target="_blank"><FontAwesomeIcon icon={faLink}/></Link>
                    </div>
                    
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectCard;
