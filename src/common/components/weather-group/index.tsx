import { useEffect, useState } from "react";
import { WeatherInfor } from "../../../types/weather";
import { WeeklyWeather } from "./weekly-weather";
import { GeoCoordinate } from "../../../types/geo-coordinate";
import { getWeeklyWeatherData } from "../../../apis/weekly-weather";
import { getCurrentAirPollution } from "../../../apis/current-air-pollution";
import { SelectedDayWeather } from "./selected-day-weather";
import { UnitMeasurement } from "../../../types";
type WeatherGroupProps = {
  coordData: GeoCoordinate;
};
export function WeatherGroup(props: WeatherGroupProps) {
  const { coordData } = props;
  const [selectedDay, setSelectedDay] = useState<WeatherInfor>();
  const [weeklyWeather, setWeeklyWeather] = useState<WeatherInfor[]>();
  const [unitSystem, setUnitSystem] = useState<UnitMeasurement>("metric");

  useEffect(() => {
    fetchWeeklyData(coordData);
  }, [coordData, unitSystem]);

  const fetchWeeklyData = async (coordData: GeoCoordinate) => {
    const weatherData = await getWeeklyWeatherData({ lat: coordData.lat, lon: coordData.lon, unit: unitSystem });
    const pollutionValue = await getCurrentAirPollution({ lat: coordData.lat, lon: coordData.lon });

    const transformedWeatherData = handleTransformWeatherData(
      weatherData.daily,
      coordData,
      pollutionValue,
      weatherData.current.temp
    );
    setWeeklyWeather(transformedWeatherData);
    setSelectedDay(transformedWeatherData[0]);
  };

  const handleChangeUnit = (unit: UnitMeasurement) => {
    setUnitSystem(unit);
  };

  const isToday = (timestamp: number) => {
    const timestampDate = new Date(timestamp * 1000);
    const today = new Date();

    return (
      timestampDate.getFullYear() === today.getFullYear() &&
      timestampDate.getMonth() === today.getMonth() &&
      timestampDate.getDate() === today.getDate()
    );
  };

  const handleTransformWeatherData = (
    weatherData: WeatherInfor[],
    coordData: GeoCoordinate,
    pollutionData: number,
    currentTemp: number
  ) => {
    return weatherData.map((item) => ({
      ...item,
      country: coordData.country,
      city: coordData.name,
      currentTemp: isToday(item.dt) ? currentTemp : undefined,
      pollution: isToday(item.dt) ? pollutionData : undefined
    }));
  };

  const handleChangeSelectedDay = (selectDay: WeatherInfor) => {
    setSelectedDay(selectDay);
  };
  return (
    <div className="max-w-2xl mx-auto mt-5 border border-gray-300 rounded-lg shadow-sm ">
      {selectedDay && (
        <SelectedDayWeather
          selectedDay={selectedDay}
          unit={unitSystem}
          isToday={isToday(selectedDay.dt)}
          onChangeUnit={handleChangeUnit}
        />
      )}
      <WeeklyWeather
        weeklyWeather={weeklyWeather}
        selectedDay={selectedDay}
        onChangeSelectedDay={handleChangeSelectedDay}
      />
    </div>
  );
}
