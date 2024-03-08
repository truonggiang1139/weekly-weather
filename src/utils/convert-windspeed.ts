import { UnitMeasurement } from "../types";

export const convertWindSpeed = (value: number, to: UnitMeasurement) => {
  if (to === "Metric") {
    return value * 3.6;
  }
  return value * 2.23694;
};
