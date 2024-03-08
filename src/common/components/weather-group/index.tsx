import { useState } from "react";
import { Weather } from "../../../types/weather";
import { WeeklyWeather } from "./weekly-weather";
type WeatherGroupProps = {
  weatherData: Weather;
};
export function WeatherGroup(props: WeatherGroupProps) {
  const { weatherData } = props;
  const [selectedDay, setSelectedDay] = useState(weatherData.daily[0]);
  return (
    <div className="max-w-2xl mx-auto mt-5 border border-gray-300 rounded-lg shadow-sm ">
      <WeeklyWeather weeklyWeather={weatherData.daily} />
    </div>
  );
}
