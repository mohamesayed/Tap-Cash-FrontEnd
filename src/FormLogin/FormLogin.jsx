import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import SignUp from "./SignUp";
import Panel from "./Panel";
import Login from "./Login";
import '../style/SignIn.css'
import axios from 'axios';


// form login the container for all form files 


const FormLogin = () => {
  const [isLogin , setIsLogin ]  = useState(true);


  const getAllData = async ()=>{

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

  }


  getAllData()


  return (
    <>
      <Container
        fluid
        className="d-flex gap-lg-4"
        style={{
          position: "relative",
          minHeight: "95vh",
          overflow: "hidden",
          backgroundSize: "cover",
          marginTop:'35px',

        }}
      >
        <div className="overlay"></div>
        <Col className={`col-lg-6 small-hidden`}>
          <Panel isLogin={isLogin} setIsLogin={setIsLogin} />
        </Col>
        <Login isLogin={isLogin} setIsLogin={setIsLogin}  />
        <SignUp isLogin={isLogin} setIsLogin={setIsLogin}  />
      </Container>
    </>
  );
};

export default FormLogin;
