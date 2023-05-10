import React from "react";
import { motion } from "framer-motion";
import panelCover1 from "../imgs/undraw_online_transactions_-02-ka.svg";

// the left panel that have the left image and animation 

const LeftPanel = (props) => {
  return (
    <>
      <motion.div
      // image animation and directions 
        initial={{ right: props.isLogin ? "100%" : "48%", opacity: 0 }}
        animate={{ right: props.isLogin ? "48%" : "120%", opacity: 1 }}
        transition={{
          duration: props.isLogin ? "1.2" : "0.5",
          delay: 0.8,
        }}
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
          While Tap Cash is generally considered safe and secure, it's important to take precautions when using any mobile payment service. Users should always verify the identity of the person they are sending money to,
          and avoid sending money to people they don't know or trust.
        </p>
        <button
          className="col-2 mt-2 btn-style"
          style={{
            color: "white",
            border: "1px solid #fff",
          }}
          onClick={() => {
            props.setIsLogin(!props.isLogin);
          }}
        >
          Sign In
        </button>
        <img
          src={panelCover1}
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

export default LeftPanel;
