export type WeatherDetail = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherInfor = {
  country?: string;
  city?: string;
  pollution?: number;
  dt: number;
  sunrise: number;
  sunset: number;
  currentTemp?: number;
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
  current: Omit<WeatherInfor, "temp"> & { temp: number };
  daily: WeatherInfor[];
  lat: number;
  lon: number;
};
