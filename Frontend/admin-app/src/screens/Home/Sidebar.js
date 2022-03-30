import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";
export default function Sidebar() {
  return (
    <Container>
      <Row>
        <Col md={2} className="sidebar">
          Side bar
        </Col>
        <Col md={10} style={{ marginLeft: "auto" }}>
          Container
        </Col>
      </Row>
    </Container>
  );
}
