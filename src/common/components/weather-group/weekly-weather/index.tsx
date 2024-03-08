import { WeatherInfor } from "../../../../types/weather";
import { WeatherCard } from "./weather-card";

type WeeklyWeatherProps = {
  weeklyWeather?: WeatherInfor[];
  selectedDay?: WeatherInfor;
  onChangeSelectedDay: (selectDay: number) => void;
};
export function WeeklyWeather(props: WeeklyWeatherProps) {
  const { weeklyWeather, selectedDay, onChangeSelectedDay } = props;
  return (
    <div className="flex flex-row items-center">
      {weeklyWeather &&
        weeklyWeather.map((weaklyItem, index) => (
          <WeatherCard
            key={weaklyItem.dt}
            weatherDetail={weaklyItem}
            isSelected={weaklyItem.dt === selectedDay?.dt}
            index={index}
            onChangeSelectedDay={onChangeSelectedDay}
          />
        ))}
    </div>
  );
}
