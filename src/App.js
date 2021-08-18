import {Button, Pane, Text, majorScale, Card, TextInput, Heading} from 'evergreen-ui'
import './App.css';
import StateFilter from "./components/statefilter";
import WeatherFilter from "./components/weatherfilter";
//NOT FINAL
function App() {
  return (
        <Pane className="App">
            <Heading is="h1">Weather App!</Heading>
            <StateFilter/>
            <WeatherFilter/>
            <WeatherFilter/>
            <WeatherFilter/>
            <WeatherFilter/>
            <WeatherFilter/>
            <WeatherFilter/>

        </Pane>
  );
}


export default App;
