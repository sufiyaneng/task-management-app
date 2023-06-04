import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    if (
      data.email &&
      data.email === "mobileapp@gmail.com" &&
      data.password &&
      data.password === "Admin@123"
    ) {
      navigate("/task");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="login_wrapper">
        <h3 className="text-center">Login </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            as={Col}
            md="4 mt-4"
            controlId="validationCustom01"
            className="w-100"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              name="email"
              value={data.email}
              type="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4 mt-4"
            controlId="validationCustom01"
            className="w-100"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              value={data.password}
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button className="w-100 mt-4" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
