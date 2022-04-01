import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import { signup } from "../../redux/actions/user.actions";
import Hooks from "./Hooks";

export default function Signup() {
  const { userInfo, setUserInfo } = Hooks();

  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.authenticate === true) {
      navigate("/");
    }
  });
  const userSignup = (e) => {
    e.preventDefault();
    dispatch(signup(userInfo));
  };
  if (user.loading) {
    return <p>Loading....!</p>;
  }
  return (
    <Layout>
      <Container>
        {user.message}
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row style={{ marginTop: "50px" }}>
                <Col md={6}>
                  <Input
                    label={"First Name"}
                    placeholder={"First Name"}
                    value={userInfo.firstName}
                    type={"text"}
                    onChange={(e) => {
                      setUserInfo({
                        ...userInfo,
                        firstName: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label={"Last Name"}
                    placeholder={"Last Name"}
                    value={userInfo.lastName}
                    type={"text"}
                    onChange={(e) => {
                      setUserInfo({
                        ...userInfo,
                        lastName: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>

              <Input
                label={"Email address"}
                placeholder={"Enter your Email address"}
                value={userInfo.email}
                type={"email"}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    email: e.target.value,
                  });
                }}
              />
              <Input
                label={"Password"}
                placeholder={"Password"}
                // value={userInfo.password}
                type={"password"}
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
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
