import React from "react";
import classes from "./Navigation.module.less";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const { cities, current } = props;

  const renderNaivationItems = () => {
    return cities.map(city => (
      <li key={city._id} className={current === city?._id ? classes.item__active : classes.item}>
        <Link to={`/${city?._id}`}>{city?.name}</Link>
      </li>
    ));
  };

  return (
    <div className={classes.navigation}>
      <ul>{renderNaivationItems()}</ul>
    </div>
  );
};

export default Navigation;
