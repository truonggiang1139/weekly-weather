import { FormEvent, useState } from "react";

type InputProps = {
  onSearchWeather: (searchValue: string) => void;
};
export function Input(props: InputProps) {
  const { onSearchWeather } = props;
  const [cityName, setCityName] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchWeather(cityName);
  };
  return (
    <form className="max-w-2xl mx-auto pt-12" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Input a city...."
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
    </form>
  );
}
