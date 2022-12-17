import useWeather from "../hooks/useWeather";

const Error = () => {
  const { error } = useWeather();
  return (
    <div className="border text-center border-red-400 bg-red-100 py-3 text-red-700">
      {error}
    </div>
  );
};

export default Error;
