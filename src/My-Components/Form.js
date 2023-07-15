import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    setSuccessMessage("Data Sent Successfully");
    setShowModal(true);
    resetForm();
    setTimeout(() => {
      setShowModal(false);
      setSuccessMessage("");
    }, 2000);

    fetch("https://personal-api-my41.vercel.app/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccessMessage("Data sent successfully, Please Refresh Data");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        resetForm();
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred while sending the data");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };

  return (
    <>
      <Card className="my-4 border border-primary">
        <Card.Header>
          <h5 style={{color: 'blue'}}>LEARN CRUD</h5>
        </Card.Header>
        <Card.Body>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <Form className="text-start">
            <Form.Group
              className="mb-3 text-start"
              controlId="formBasicPassword"
            >
              <Form.Label>Your Name:</Form.Label>
              <Form.Control
                type="text"
                required
                autoFocus
                className="text-start border border-primary"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="text-start border border-primary"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 text-start"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write Your Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                className="text-start border border-primary"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit" onClick={submitForm}>
                Submit
              </Button>
              <Button variant="danger" type="submit" onClick={resetForm}>
                Reset
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <p style={{ color: "green" }}>{successMessage}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Forms;
