import {React ,useState }from "react";
import { Button, Card, Container, Form, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const SignUp = (props) => {


  // the component data 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // e-mail validation 

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({ email: 'Email must be a valid email address' });
      return false;
    }
    return true;
  };

    // e-mail validation 


  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrors({ password: 'Password must contain at least one capital letter, one special character, and one digit, and be at least 8 characters long' });
      return false;
    }
    return true;
  };

  //  submet handler 

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    isValid = validateEmail() && isValid;
    isValid = validatePassword() && isValid;

    if (isValid) {
      // handle login here
    }
  };


  return (
    <>

    {/* start the  animation  */}
      <Col className={`col-lg-6 col-md-12 col-sm-12`}>
        <Container className="d-flex align-items-center justify-content-center h-100">
          <motion.div
            initial={{ left: props.isLogin? "0%" : "100%", opacity: 0 }}
            animate={{
              left: props.isLogin ? "100%" : "0%",
              opacity: props.isLogin ? "0" : "1",
            }}
            transition={{ duration: 1.2, delay: 1 }}
            className="d-flex justify-content-center align-items-center login-small-window"
            style={{
              position: "absolute",
              width: "50%",
              zIndex: "1",
            }}
          >
            <Card className="form-card"  style={{border:'none', boxShadow:'none',marginBottom:'300px',backGround:'none',width:'400px'}} >
            <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input style={{border:'none', borderBottom:'1px solid  #ccc', boxShadow:'none',backGround:'transparent', outLine:'none' , borderRadius:'0'}}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input style={{border:'none', borderBottom:'1px solid #ccc ', boxShadow:'none',backGround:'transparent', outLine:'none', borderRadius:'0'}}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
            </Card>
            <div
              className="w-100 text-center mt-2 small-text"
              style={{
                display: "none",
              }}
            >
              One of us?
              <NavLink
                className="ms-1"
                onClick={(e) => {
                  e.preventDefault();
                  props.setIsLogin(!props.isLogin);
                }}
              >
                Log In
              </NavLink>
            </div>
          </motion.div>
        </Container>
      </Col>
    </>
  );
};

export default SignUp;
