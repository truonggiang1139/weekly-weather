import { UnitMeasurement } from "../types";

export const convertTemp = (temp: number, toUnit: UnitMeasurement) => {
  if (toUnit === "Imperial") {
    return (temp * 9) / 5 + 32;
  }
  return ((temp - 32) * 5) / 9;
};
