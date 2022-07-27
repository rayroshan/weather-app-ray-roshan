import React from "react";
import classes from "./Error.module.less";

const Error = (props) => {
  const { error } = props;

  return (
    error ? 
    <div className={classes.error}>{error}</div>
    : 
    <></>
  );
};

export default Error;
