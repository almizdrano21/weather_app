import SecureApp from "./components/SecureApp";
import { WeatherProvider } from "./context/WeatherProvider";
function App() {
  return (
    <WeatherProvider>
      <header>
        <h1>On-line weather forecast</h1>
      </header>
      <SecureApp />
    </WeatherProvider>
  );
}

export default App;
