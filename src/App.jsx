import SecureApp from "./components/SecureApp";
import { WeatherProvider } from "./context/WeatherProvider";
function App() {
  return (
    <WeatherProvider>
      <SecureApp />
    </WeatherProvider>
  );
}

export default App;
