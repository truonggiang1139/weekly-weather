export const convertTemp = (temp: number, toUnit: "celsius" | "fahrenheit") => {
  if (toUnit === "fahrenheit") {
    return (temp * 9) / 5 + 32;
  }
  return ((temp - 32) * 5) / 9;
};
