import Form from "./Form";
import Result from "./Result";
import Loading from "./Loading";
import useWeather from "../hooks/useWeather";
const SecureApp = () => {
  const { result, loading } = useWeather();
  return (
    <main className="dos-columnas">
      <Form />
      {loading ? <Loading /> : result?.name ? <Result /> : null}
    </main>
  );
};

export default SecureApp;
