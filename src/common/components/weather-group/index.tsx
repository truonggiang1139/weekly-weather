import { useEffect, useState } from "react";
import { Weather, WeatherInfor } from "../../../types/weather";
import { WeeklyWeather } from "./weekly-weather";
type WeatherGroupProps = {
  weatherData: Weather;
};
export function WeatherGroup(props: WeatherGroupProps) {
  const { weatherData } = props;
  const [selectedDay, setSelectedDay] = useState<WeatherInfor>();

  useEffect(() => {
    setSelectedDay(weatherData.daily[0]);
  }, [weatherData]);

  const handleChangeSelectedDay = (selectDay: WeatherInfor) => {
    setSelectedDay(selectDay);
  };
  return (
    <div className="max-w-2xl mx-auto mt-5 border border-gray-300 rounded-lg shadow-sm ">
      <WeeklyWeather
        weeklyWeather={weatherData.daily}
        selectedDay={selectedDay}
        onChangeSelectedDay={handleChangeSelectedDay}
      />
    </div>
  );
}
