import { useState } from "react";
import { getGeoCoord } from "../../apis/geo-coordinate";
import { EmptyState } from "../../common/components/empty-state";
import { Input } from "../../common/components/input";
import { LoadingState } from "../../common/components/loading-state";
import { WeatherGroup } from "../../common/components/weather-group";
import { GeoCoordinate } from "../../types/geo-coordinate";
import { getGoogleAuthUrl } from "../../utils/google-auth";
import { Link } from "react-router-dom";

export default function Home() {
  const [coordData, setCoorData] = useState<GeoCoordinate>();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const googleOAuthUrl = getGoogleAuthUrl();
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

      <div className="mt-7">
        <Link to={googleOAuthUrl} className="px-2 py-3 bg-blue-500 text-white mt-2 rounded">
          Login with Google
        </Link>
      </div>
    </div>
  );
}
