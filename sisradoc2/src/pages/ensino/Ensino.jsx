import React from "react";
import classes from "../../css-modules/Ensino.module.css";
import SidebarEnsino from "../../components/sidebarEnsino/SidebarEnsino";

const Ensino = () => {
  return (
    <div className={classes.ensinoContainer}>
        <SidebarEnsino />
    </div>
  );
};

export default Ensino;