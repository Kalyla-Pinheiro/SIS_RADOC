import React from "react";
import classes from "../../css-modules/Home.module.css";
import Navegacao from "../../components/Navegação/Navegacao";

const Home = () => {
  return (
    <div>
      <Navegacao />
      <div className={classes.homeContainer}>
        <h1>Campo de preenchimento</h1>
      </div>
    </div>
  );
};

export default Home;
