import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import "./style.css";
export default function Sidebar() {
  return (
    <Container>
      <Row>
        <Col md={2} className="sidebar">
          <ul>
            <li>
              <Nav.Link href="/">Home</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/Category">Category</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/products">Products</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/orders">Orders</Nav.Link>
            </li>
          </ul>
        </Col>
        {/* <Col md={10} style={{ marginLeft: "auto" }}>
          Container
        </Col> */}
      </Row>
    </Container>
  );
}
