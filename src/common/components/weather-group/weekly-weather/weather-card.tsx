import { getIconWeather } from "../../../../utils/weather-conditon";
import { DAYS_OF_WEEK } from "../../../../constants";
import { WeatherInfor } from "../../../../types/weather";

type WeatherCardProps = {
  weatherDetail: WeatherInfor;
};
export function WeatherCard(props: WeatherCardProps) {
  const { weatherDetail } = props;
  const date = new Date(weatherDetail.dt * 1000);
  return (
    <div className="bg-white border border-gray-200  shadow flex flex-col flex-1 py-7 hover:cursor-pointer">
      <div className="font-bold text-sm">{DAYS_OF_WEEK[date.getDay()]}</div>
      <img src={getIconWeather(weatherDetail.weather[0].icon)} alt="" />
      <div className="font-bold text-lg">{Math.floor(weatherDetail.temp.max)}°</div>
      <div className="text-sm">{Math.floor(weatherDetail.temp.min)}°</div>
    </div>
  );
}
