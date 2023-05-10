import React, { useState } from "react";
import { Button, Card, Container, Form, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Login = (props) => {


  // all component data 


  const [step, setStep] = useState(1);
  const [nationalId, setNationalId] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});


  // handleNext that handle every next step 
  // every step has it's own regular expression 
  const handleNext = () => {
    let isValid = true;
    if (step === 1) {
      const nationalIdRegex = /^\d{14}$/;
      if (!nationalIdRegex.test(nationalId)) {
        setErrors({ nationalId: 'National ID must be 14 digits' });
        isValid = false;
      }
    } else if (step === 2) {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(name)) {
        setErrors({ name: 'Name must contain only letters and spaces' });
        isValid = false;
      }
    } else if (step === 3) {
      const mobileRegex = /^0\d{10}$/;
      if (!mobileRegex.test(mobile)) {
        setErrors({ mobile: 'Mobile number must start with 0 and be 11 digits long' });
        isValid = false;
      }
    } else if (step === 4) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrors({ email: 'Email must be a valid email address' });
        isValid = false;
      }
    } else if (step === 5) {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      if (!passwordRegex.test(password)) {
        setErrors({
          password:
            'Password must be at least 8 characters long and contain one capital letter, one special character, and one digit',
        });
        isValid = false;
      } else if (password !== confirmPassword) {
        setErrors({ confirmPassword: 'Passwords do not match' });
        isValid = false;
      }
    }

    // if the data valid move to next step 
    if (isValid) {
      setErrors({});
      setStep(step + 1);
    }
  };

      // if the data invalid back to next previous step  

  const handleBack = () => {
    setErrors({});
    setStep(step - 1);
  };


  // when signup successed complited alert Sign up successful!
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign up successful!');
  };
  

    
  return (
    <>
    {/* start  form animation  */}
      <motion.div className={`col-lg-6 col-md-12 col-sm-12 `}>
        <Container
          className="d-flex align-items-center justify-content-center h-100"
          style={{
            
          }}
        >
          <motion.div
            initial={{ left: props.isLogin ? "-50%" : "", opacity: 0 }}
            animate={{
              left: props.isLogin ? "" : "-50%",
              opacity: props.isLogin ? "1" : "0",
            }}
            // exit={{ left: "0", opacity: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="d-flex justify-content-center align-items-center login-small-window"
            style={{
              position: "absolute",
              width: "50%",
              zIndex: "1",
              right: "0",
            }}
          >


              {/* start form  */}
            <Card className="form-card" style={{border:'none', boxShadow:'none',marginBottom:'300px'}}  >
            <div className="signin-form">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-group">
            <label htmlFor="nationalId">National ID</label>
            <input
              type="text"
              id="nationalId"
              name="nationalId"
              value={nationalId}
              // on every change set it to value 
              onChange={(e) => setNationalId(e.target.value)}
              className={errors.nationalId ? 'error' : ''}
            />
            {/* control the errors  */}
            {errors.nationalId && <span className="error-message">{errors.nationalId}</span>}
            {!nationalId && <span className="small-message">If you do not have an ID, enter your parent's ID</span>}
          </div>
        )}

{/* second step take user name  */}
        {step === 2 && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
        )}


{/*  third  step take mobile   */}
        {step === 3 && (
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className={errors.mobile ? 'error' : ''}
            />
            {errors.mobile && <span className="error-message">{errors.mobile}</span>}
          </div>
        )}

        {/*  then  take email   */}


        {step === 4 && (
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        )}

        {/*  then    take password    */}


        {step === 5 && (
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}

                    {/*  then confirm  password    */}


            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>
        )}

        {/* handleNext handle every next step  */}

        {step < 5 && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}

                {/* handleBack handle every previous   step  */}


        {step === 5 && (
          <div className="form-buttons">
            <button type="button" onClick={handleBack}>
              Back
            </button>
            <button type="submit">Sign Up</button>
          </div>
        )}
      </form>
    </div>
            
            </Card>



            <div
              className="w-100 text-center mt-2 small-text"
              style={{
                display: "none",
              }}
            >
              New here?
              <NavLink
                className="ms-1"
                onClick={(e) => {
                  props.setIsLogin(!props.isLogin);
                }}
              >
                Sign Up
              </NavLink>
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
};

export default Login;
