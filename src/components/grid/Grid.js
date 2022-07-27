import React, { Children } from "react";
import classes from "./Grid.module.less";

const Grid = (props) => {
  const { children } = props;
  const arrayChildren = Children.toArray(children);

  const renderPrimaryItem = () => {
    return arrayChildren[0]
  }

  const renderSecondaryItems = () => {
    return arrayChildren.map((child, index) => {
      if (index !== 0) {
        return <div key={index}>{child}</div>;
      } 
      return null;
    });
  };

  return (
    <div className={classes.grid}>
      <div className={classes.grid__primary}>
        {renderPrimaryItem()}
      </div>
      <div className={classes.grid__secondary}>
        {renderSecondaryItems()}
      </div>
    </div>
    );
};

export default Grid;
