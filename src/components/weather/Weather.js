import React from "react";
import classes from "./Weather.module.less";
import { weatherConditions } from "../../data/Data";
const moment = require('moment');

const Weather = (props) => {
  const { title, temperature, weather, large } = props;

  const renderStyles = () => {
    let styles = [classes.weather];
    if (large) {
      styles.push(classes.weather__large);
    }

    return styles.join(" ");
  };

  const renderTitle = () => {
    if(title) {
      return moment(title).format('ddd');
    }
  }

  const renderDescription = () => {
    if(weather?.length > 0 && large) {
      return weather[0]?.main;
    }
  }

  const renderWeatherImage = () => {
    if(weather?.length > 0) {
      let weatherDetails = weatherConditions.find(w => weather[0]?.id >= w.min && weather[0]?.id <= w.max);
      
      if(weatherDetails?.image) {
        return <img src={weatherDetails.image} alt={weatherDetails.description} />
      }
    }
  }
  
  return (
    <div className={renderStyles()}>
      <div className={classes.title}>{renderTitle()}</div>
      <div className={classes.details}>
        <div>
          {renderWeatherImage()}
        </div>
        <div>
          <div className={classes.temp}>
            {parseInt(temperature)}<span>°</span>
          </div>
          {large ? <span className={classes.info}>{renderDescription()}</span> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Weather;
