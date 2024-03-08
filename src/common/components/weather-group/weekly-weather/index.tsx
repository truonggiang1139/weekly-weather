import { WeatherInfor } from "../../../../types/weather";
import { WeatherCard } from "./weather-card";

type WeeklyWeatherProps = {
  weeklyWeather?: WeatherInfor[];
  selectedDay?: WeatherInfor;
  onChangeSelectedDay: (selectDay: WeatherInfor) => void;
};
export function WeeklyWeather(props: WeeklyWeatherProps) {
  const { weeklyWeather, selectedDay, onChangeSelectedDay } = props;
  return (
    <div className="flex flex-row items-center">
      {weeklyWeather &&
        weeklyWeather.map((weaklyItem) => (
          <WeatherCard
            key={weaklyItem.dt}
            weatherDetail={weaklyItem}
            isSelected={weaklyItem.dt === selectedDay?.dt}
            onChangeSelectedDay={onChangeSelectedDay}
          />
        ))}
    </div>
  );
}
