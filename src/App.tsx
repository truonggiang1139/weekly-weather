import { useState } from "react";
import "./App.css";
import { getGeoCoord } from "./apis/geo-coordinate";
import { Input } from "./common/components/input";
import { WeatherGroup } from "./common/components/weather-group";
import { EmptyState } from "./common/components/empty-state";
import { GeoCoordinate } from "./types/geo-coordinate";
import { LoadingState } from "./common/components/loading-state";

function App() {
  const [coordData, setCoorData] = useState<GeoCoordinate>();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSearchCoord = async (cityName: string) => {
    try {
      setIsloading(true);
      const geoData = await getGeoCoord(cityName);
      setIsloading(false);
      if (!geoData) {
        throw new Error("Geolocation data not found");
      }
      setCoorData(geoData);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setCoorData(undefined);
    }
  };

  return (
    <div className="container">
      <Input onSearchWeather={handleSearchCoord} />
      {isLoading && <LoadingState />}
      {!isLoading && (coordData ? <WeatherGroup coordData={coordData} /> : <EmptyState isError={isError} />)}
    </div>
  );
}

export default App;
