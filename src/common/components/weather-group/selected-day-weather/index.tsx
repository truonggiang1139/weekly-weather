import classNames from "classnames";
import { AIR_QUALITY_LEVEL, FULLY_DAYS_OF_WEEK } from "../../../../constants";
import { UnitMeasurement } from "../../../../types";
import { WeatherInfor } from "../../../../types/weather";
import { getIconWeather } from "../../../../utils/weather-conditon";

type SelectedDayWeatherProps = {
  selectedDay: WeatherInfor;
  unit: UnitMeasurement;
  isToday: boolean;
  onChangeUnit: (unit: UnitMeasurement) => void;
};
export function SelectedDayWeather(props: SelectedDayWeatherProps) {
  const { selectedDay, unit, isToday, onChangeUnit } = props;
  const date = new Date(selectedDay.dt * 1000);
  return (
    <div className="flex-1 p-5 text-left">
      <h2 className="font-bold ">
        {selectedDay.city},{selectedDay.country}
      </h2>

      <div className="text-sm text-gray-500">
        {FULLY_DAYS_OF_WEEK[date.getDay()]}•{selectedDay.weather[0].description}
      </div>

      <div className="flex">
        <div className="flex-1 flex items-center relative">
          <img src={getIconWeather(selectedDay.weather[0].icon)} alt="" />
          <div className="font-bold text-4xl">
            {isToday ? Math.floor(Number(selectedDay?.currentTemp)) : Math.floor(selectedDay.temp.max)}°
          </div>
          <div className="absolute text-sm top-[30%] right-[40%] text-gray-600">
            <span
              onClick={() => onChangeUnit("imperial")}
              className={classNames("hover:cursor-pointer", {
                "underline text-black font-bold": unit === "imperial"
              })}
              aria-hidden="true"
            >
              F
            </span>
            /
            <span
              onClick={() => onChangeUnit("metric")}
              className={classNames("hover:cursor-pointer", {
                "underline text-black font-bold": unit === "metric"
              })}
              aria-hidden="true"
            >
              C
            </span>
          </div>
        </div>
        <div className="flex-1 flex items-start flex-col text-left text-sm justify-center">
          <div>Humidity:{selectedDay.humidity}%</div>

          <div>
            Wind:{selectedDay.wind_speed} <span>{unit === "metric" ? "metre/sec" : "miles/hour"}</span>
          </div>

          {selectedDay.pollution && <div>Air Quality: {AIR_QUALITY_LEVEL[selectedDay.pollution - 1]}</div>}
        </div>
      </div>
    </div>
  );
}
