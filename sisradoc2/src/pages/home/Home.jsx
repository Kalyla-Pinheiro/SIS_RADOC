import React from "react";
import classes from "../../css-modules/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import { ToastifyMessages } from "../../utils/ToastifyMessages";
import TokenFunctions from "../../utils/Token";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div>
      <div className={classes.homeContainer}>
        <h1>Campo de preenchimento</h1>
      </div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Home;
