import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMutation } from "@tanstack/react-query";
import { GeoCoordinateAPI } from "./apis/geo-coordinate";
import { WeeklyWeatherAPI } from "./apis/weekly-weather";

function App() {
  const [count, setCount] = useState(0);
  const [cityName, setCityName] = useState<string>("");
  const { mutateAsync: getGeoCoordByName, isPending: isSubmitting } = useMutation({
    mutationFn: GeoCoordinateAPI.list
  });
  const { mutateAsync: getWeeklyWeather } = useMutation({
    mutationFn: WeeklyWeatherAPI.list
  });

  const handleSearchCoord = async () => {
    const res = await getGeoCoordByName(cityName);
    const response = await getWeeklyWeather({ lat: res.lat, lon: res.lon });
    console.log(response);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
      <button disabled={isSubmitting} onClick={handleSearchCoord}>
        Click me
      </button>
    </>
  );
}

export default App;
