import { WeatherInfor } from "../../../../types/weather";
import { WeatherCard } from "./weather-card";

type WeeklyWeatherProps = {
  weeklyWeather: WeatherInfor[];
};
export function WeeklyWeather(props: WeeklyWeatherProps) {
  const { weeklyWeather } = props;
  return (
    <div className="flex flex-row items-center">
      {weeklyWeather.map((weaklyItem, index) => (
        <WeatherCard weatherDetail={weaklyItem} key={index} />
      ))}
    </div>
  );
}
