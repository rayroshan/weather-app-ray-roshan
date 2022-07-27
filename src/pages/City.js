import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import Container from "../components/container/Container";
import Error from "../components/error/Error";
import Grid from "../components/grid/Grid";
import Navigation from "../components/navigation/Navigation";
import Weather from "../components/weather/Weather";
import { cities } from "../data/Data";
import { getWeatherForCity } from "../api/Api";
import { useParams } from "react-router-dom";

const City = () => {
  const params = useParams();
  const { city } = params;
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(true);
  const [weatherInfo, setWeatherInfo] = useState();
  const [currentCity, setCurrentCity] = useState();

  // Get city from param, if param not available get the first city
  useEffect(() => {
    let selectedCity = cities.find((c) => c?._id === city);
    if (selectedCity) {
      setCurrentCity(selectedCity);
    } else if (cities?.length > 0) {
      setCurrentCity(cities[0]);
    }
  }, [city]);

  // Once the city is set retrieve weather info for the city
  useEffect(() => {
    if (currentCity) {
      getWeatherInfo(currentCity);
    }
  }, [currentCity]);

  // API call to open weather map
  const getWeatherInfo = async (currentCity) => {
    try {
      setWeatherInfo(await getWeatherForCity(currentCity));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setMessage(
        err.response?.data?.message || err?.message || "Something went wrong"
      );
    }
  };

  const renderWeatherInfo = () => {
    return weatherInfo?.list?.map((weather, index) => {
      // The Free API sends a five day forecast at a 3 hour period we will use one value for each day.
      if(index % 8 === 0) {
        return (
          <Weather key={weather?.dt} title={weather?.dt_txt} large={index === 0} temperature={weather?.main?.temp} weather={weather?.weather}/>
        )
      }
      return null;
    })
  }

  return (
    <Container>
      <Navigation cities={cities} current={currentCity?._id} />
      <Card>
        <Grid>
          {!loading ? renderWeatherInfo() : <></>}
        </Grid>
      </Card>
      <Error error={message} setError={setMessage} />
    </Container>
  );
};

export default City;
