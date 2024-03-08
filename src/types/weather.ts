export type WeatherDetail = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherInfor = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: { min: number; max: number };
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherDetail[];
};

export type Weather = {
  current: WeatherInfor;
  daily: WeatherInfor[];
  lat: number;
  lon: number;
};
