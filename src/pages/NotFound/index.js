import React from "react";
import "./style.js";
import useStyles from "./style";
const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h1>404</h1>
      <p>Opa!</p>
      <p>Página não encontrada</p>
      <button>Voltar para navegação</button>
    </div>
  );
};
export default NotFound;
