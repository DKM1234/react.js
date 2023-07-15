import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tools from './Tools';
import "../App.css";

function Works() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text = "Mindtrail Technologies Pvt Ltd";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setDisplayText("");
        currentIndex = 0;
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Container>
        <h2 className="autowrite-text">
          <i>&nbsp;{displayText}&nbsp;</i>
        </h2>
        <Row>
          <Col>
            {/* Address Card Component */}
            <div className="address-card">
              {/* Address Card content */}
              <Tools />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Address Card Component */}
            <div className="address-card">
              {/* Address Card content */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Works;

