import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faStackOverflow,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-success mt-5 w-full container-fluid" style={{boxSizing:'border-box'}}>
  
         < div className="row w-full px-3">
            <div className="col-md-5">
              <h1 className="text-light">
                <FontAwesomeIcon icon={faStackOverflow} /> Project Fair
              </h1>
              <p className="mt-3" style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                dolorem velit molestiae blanditiis hic ratione aut deserunt.
                Reprehenderit cumque adipisci animi quis? Nisi, quasi impedit
                accusantium harum numquam aspernatur, quas optio voluptas temporibus
                repellendus ratione accusamus libero nihil ut itaque odit iste
                quidem magni commodi fuga cum tempora. Aliquam accusamus, at quasi
                eligendi, praesentium ab error quisquam sed minima, ducimus cumque
                corporis.
              </p>
            </div>
    
            <div
              className="col-md-2 d-flex 
                justify-content-md-center"
            >
              <div>
                <h1 className="text-light">Guides</h1>
                <p>Home</p>
                <p>Project</p>
                <p>Dashboard</p>
              </div>
            </div>
    
            <div className="col-md-2 d-flex justify-content-md-center">
              <div>
                <h1 className="text-light">Links</h1>
                <p>React</p>
                <p>React bootstrap</p>
                <p>Bootswatch</p>
              </div>
            </div>
            <div className="col-md-3">
              <h1 className="text-light mb-2">Contact Us</h1>
              <div className="d-flex" style={{boxSizing:'border-box'}}>
                <input type="email" placeholder="Enter your email" className="p-2 form-control" />
                <button className="btn btn-warning text-light ms-2">Search</button>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <FontAwesomeIcon icon={faInstagram} className="fa-2x text-light"/>
                <FontAwesomeIcon icon={faFacebook} className="fa-2x text-light"/>
                <FontAwesomeIcon icon={faTwitter} className="fa-2x text-light"/>
                <FontAwesomeIcon icon={faLinkedin} className="fa-2x text-light"/>
                <FontAwesomeIcon icon={faWhatsapp} className="fa-2x text-light"/>
              </div>
            </div>
       



      </div>
    </div>
  );
};

export default Footer;
