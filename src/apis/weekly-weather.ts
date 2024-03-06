import http from "../config/http";

export const WeeklyWeatherAPI = {
  async list({ lat, lon }: { lat: number; lon: number }) {
    const response = await http.get(`data/2.5/onecall?lat=${lat}&lon=${lon}`);
    return response.data;
  }
};
