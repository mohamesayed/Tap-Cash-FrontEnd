import { motion } from "framer-motion";
import React from "react";
import { Button } from "react-bootstrap";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";
const Panel = (props) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          right: props.isLogin ? `100%` : ``,
        }}
        animate={{
          opacity: 1,
          transform: props.isLogin ? `` : `translate(100%,-50%)`,
          right: props.isLogin ? `48%` : `52%`,
        }}
        className={` panels-container`}
        style={{ transition: "0.9s 0.6s ease-in-out", zIndex: "2" }}
      ></motion.div>
      <LeftPanel  isLogin ={props.isLogin} setIsLogin ={props.setIsLogin} />
      <RightPanel isLogin ={props.isLogin} setIsLogin ={props.setIsLogin} />
    </>
  );
};

export default Panel;
