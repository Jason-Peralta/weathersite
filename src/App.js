import {Button, Pane, Text, majorScale, Card, TextInput} from 'evergreen-ui'
import './App.css';
import StateFilter from "./components/statefilter";
import WeatherFilter from "./components/weatherfilter";

function App() {
  return (
    <div className="App">
        <Pane>
            <Pane display="flex" alginItems="center" marginX={majorScale(3)}>
                <StateFilter/>
            </Pane>,
                <WeatherFilter/>
        </Pane>

    </div>

  );
}


export default App;
