import { GeoCoordinate } from "./../types/geo-coordinate";
import http from "../config/http";

export const getGeoCoord = async (cityName: string): Promise<GeoCoordinate> => {
  const response = await http.get(`/geo/1.0/direct?q=${cityName}`);
  return response.data[0];
};
