import React from 'react'
import Addproject from './Addproject'
import Edit from './Edit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Myproject = () => {
  return (
    <div className='p-4 shadow w-100'>
        <div className="d-flex mt-4 justify-content-between">
            <h3 className='text-success'>My Project</h3>
            <Addproject/>
        </div>

        <div className="p-3 bg-light mt-4 rounded-2 d-flex justify-content-between">
            <h4>Media Player</h4>
            <div className="d-flex align-items-center">
                <Edit/>
                <FontAwesomeIcon icon={faGlobe}  className='mx-3 text-warning'/>
                <FontAwesomeIcon icon={faGithub} className='mx-3 text-success'/>
                <FontAwesomeIcon icon={faTrashCan} className='mx-3 text-danger'/>

            </div>
        </div>
    </div>
  )
}

export default Myproject