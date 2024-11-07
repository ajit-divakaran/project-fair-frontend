import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Edit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='m-0'>
       <FontAwesomeIcon icon={faPenToSquare} className='mx-3' style={{color:'#8e729d'}} onClick={handleShow}/> 

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
                        className='d-none' />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY66nb7jL497jYoSdV0NkjnJcEoXs29VqOpA&s" alt="" width={"100%"}/>

                        </label>

                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" placeholder='Title' className='form-control'/>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Language' className='form-control'/>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Github' className='form-control'/>
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder='Website' className='form-control'/>
                        </div>
                        <div className="mb-3">
                            <textarea rows={5} placeholder='Overview'></textarea>
                        </div>
                   
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit