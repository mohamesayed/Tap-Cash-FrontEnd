import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import panelCover2 from '../imgs/undraw_stripe_payments_re_chlm.svg'

const RightPanel = (props) => {
  return (
    <>
      <motion.div
        initial={{ left: props.isLogin ? "100%" : "100%", opacity: 0 }}
        animate={{ left: props.isLogin ? "100%" : "50%", opacity: 1 }}
        transition={{ duration: props.isLogin? "0.5" : "1.2", delay: 0.8 }}
        className="content d-flex flex-column align-items-center text-center"
        style={{
          padding: "100px",
          width: "50%",
          position: "absolute",
          zIndex: "10",
        }}
      >
        <h3
          style={{
            fontWeight: "700",
            lineHeight: "1",
            color: "white",
          }}
        >
          Tap Cash
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            padding: "0.7rem 0",
            color: "white",
          }}
        >
           Tap Cash  users can link their bank accounts, debit cards, or credit cards to their account and use the app to send and receive money to other Cash App users instantly. The app also offers a Cash Card, which is a Visa debit card that can be used to make purchases at retailers and withdraw cash from ATMs.
        </p>
        <button
          
          className="col-2 mt-2 btn-style"
          style={{
            color: "white",
            border: "1px solid #fff",
            // borderRadius: "48px",
          }}
          onClick={() => {
            props.setIsLogin(!props.isLogin);
          }}
        >
          Sign Up
        </button>
        <img
          src={panelCover2}
          alt=""
          style={{
            width: "90%",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        />
      </motion.div>
    </>
  );
};

export default RightPanel;
