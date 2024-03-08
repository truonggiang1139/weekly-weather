import http from "../config/http";
import { UnitMeasurement } from "../types";
import { Weather } from "../types/weather";

export const getWeeklyWeatherData = async ({
  lat,
  lon,
  unit
}: {
  lat: number;
  lon: number;
  unit: UnitMeasurement;
}): Promise<Weather> => {
  const response = await http.get(`data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}`);
  return response.data;
};
