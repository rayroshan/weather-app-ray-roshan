import React from "react";
import classes from "./Container.module.less";

const Container = (props) => {
  const { children } = props;

  return (
    <div className={classes.container}>
      <div className={classes.container__child}>
        {children}
      </div>
    </div>
  );
};

export default Container;
