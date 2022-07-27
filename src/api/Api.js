export const getWeatherForCity = async (city) => {

    const {lat, lng} = city;

    const response = await fetch(`${process.env.REACT_APP_WEATHER_API_URL}?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quotes.');
    }
  
    return data;
  }
  