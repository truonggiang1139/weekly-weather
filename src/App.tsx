import { useState } from "react";
import "./App.css";

import { GeoCoordinateAPI } from "./apis/geo-coordinate";
import { WeeklyWeatherAPI } from "./apis/weekly-weather";
import { Input } from "./common/components/input";
import { WeatherGroup } from "./common/components/weather-group";
import { Weather } from "./types/weather";
import { EmptyState } from "./common/components/empty-state";

function App() {
  const [weatherData, setWeatherData] = useState<Weather>();
  const [isError, setIsError] = useState<boolean>(false);
  const handleSearchCoord = async (cityName: string) => {
    const geoData = await GeoCoordinateAPI.list(cityName);
    if (geoData) {
      setIsError(false);
      const response = await WeeklyWeatherAPI.list({ lat: geoData.lat, lon: geoData.lon });
      setWeatherData(response);
      return;
    }
    setIsError(true);
  };

  return (
    <div className="container">
      <Input onSearchWeather={handleSearchCoord} />

      {weatherData ? <WeatherGroup weatherData={weatherData} /> : <EmptyState isError={isError} />}
    </div>
  );
}

export default App;
