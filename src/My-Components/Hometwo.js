// import React from 'react'

// function Hometwo() {
//   return (
//     <div>Hometwo</div>
//   )
// }

// export default Hometwo

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{marginTop: '45px'}}>
      <Button className="mt-4" onClick={handleButtonClick}>
        Desk Support
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header
          style={{ backgroundColor: "green", color: "#fff" }}
          closeButton
        >
          <Modal.Title>Mindtrail Technologies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ color: "orange" }}>
            E Mail :
            <p style={{ color: "green" }}>Dinesh.kumar.fullstack@gmail.com</p>
          </h5>
        </Modal.Body>
        <Modal.Body>
          <h5 style={{ color: "orange" }}>
            Phone :
            <p style={{ color: "green" }}>
              +91 8770 059117 <br></br>+91 7880 059117
            </p>
          </h5>
        </Modal.Body>
        <Modal.Body>
          <h5 style={{ color: "orange" }}>
            Address :
            <p style={{ color: "green" }}>
              Plot No-97, Sri, 60 Feet Rd, beside CGR International School,
              Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081
            </p>
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="info"
            style={{ color: "#fff" }}
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyComponent;
