import { WEATHER_ICON_URL_PATH } from "../constants";

export const getIconWeather = (icon: string) => {
  return `${WEATHER_ICON_URL_PATH}/${icon}@2x.png`;
};
