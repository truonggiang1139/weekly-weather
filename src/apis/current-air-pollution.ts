import http from "../config/http";

export const getCurrentAirPollution = async ({ lat, lon }: { lat: number; lon: number }) => {
  const response = await http.get(`/data/2.5/air_pollution?lat=${lat}&lon=${lon}`);
  return response.data.list[0].main.aqi;
};
