import { getIconWeather } from "../../../../utils/weather-conditon";
import { DAYS_OF_WEEK } from "../../../../constants";
import { WeatherInfor } from "../../../../types/weather";
import classNames from "classnames";

type WeatherCardProps = {
  weatherDetail: WeatherInfor;
  isSelected: boolean;
  index: number;
  onChangeSelectedDay: (index: number) => void;
};
export function WeatherCard(props: WeatherCardProps) {
  const { weatherDetail, isSelected, index, onChangeSelectedDay } = props;
  const date = new Date(weatherDetail.dt * 1000);
  return (
    <div
      className={classNames("border border-gray-200  shadow flex flex-col flex-1 py-7 hover:cursor-pointer", {
        "bg-gray-200": isSelected
      })}
      onClick={() => onChangeSelectedDay(index)}
      aria-hidden="true"
    >
      <div className="font-bold text-sm">{DAYS_OF_WEEK[date.getDay()]}</div>
      <img src={getIconWeather(weatherDetail.weather[0].icon)} alt="" />
      <div className="font-bold text-lg">{Math.floor(weatherDetail.temp.max)}°</div>
      <div className="text-sm">{Math.floor(weatherDetail.temp.min)}°</div>
    </div>
  );
}
