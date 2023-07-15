import React from "react";
import Map from "./Map";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Support from "./Support";

function Contact() {
  return (
    <>
      <Map />
      <Container>
        <Row>
          <Col lg={6} md={12}>
            {/* Address Card Component */}
            <div className="address-card">
              {/* Address Card content */}
              <Card />
            </div>
          </Col>
          <Col lg={6} md={12}>
            {/* Contact Form Component */}
            <div className="contact-form">
              {/* Contact Form content */}
              <Support />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
