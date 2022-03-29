import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Navigate, Route, useNavigate } from "react-router-dom";

import Input from "../../components/UI/Input";
import { login, isLoggedIn } from "../../redux/actions/auth.actions";
import Hooks from "./Hooks";

export default function Signin() {
  const { userCredentials, setUserCredentials } = Hooks();
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();

    dispatch(login(userCredentials));
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticate === true) {
      navigate("/");
    } else {
      dispatch(isLoggedIn());
    }
  });

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label={"Email address"}
                placeholder={"Enter email"}
                value={userCredentials.email}
                type={"text"}
                onChange={(e) => {
                  setUserCredentials({
                    ...userCredentials,
                    email: e.target.value,
                  });
                }}
              />
              <Input
                label={"Password"}
                placeholder={"Password"}
                value={userCredentials.password}
                type={"password"}
                onChange={(e) => {
                  setUserCredentials({
                    ...userCredentials,
                    password: e.target.value,
                  });
                }}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
