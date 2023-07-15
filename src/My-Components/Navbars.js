import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Localtime from './Localtime';

function Navbars(props) {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand><Nav.Link as={Link} to="/">{props.tittle}</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2" style={{ maxHeight: 'none' }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/learning">Learning</Nav.Link>
            <Nav.Link as={Link} to="/works">Crud</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <span style={{color: '#fff', marginTop: '13px', marginBottom: '0', marginRight: '13px'}}><Localtime/></span>
          <Form className="d-none d-lg-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ backgroundColor: '#fff' }}
            />
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Navbars.propTypes = {
  tittle: PropTypes.string
}

export default Navbars;
