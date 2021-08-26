import {Button, Pane, Heading} from 'evergreen-ui'
import React from "react";
import './App.css';
import StateFilter from "./components/statefilter";
import WeatherFilter from "./components/weatherfilter";
import ApiButton from "./components/apibutton";

//NOT FINAL

//date,
// actual_mean_temp,
// actual_min_temp,
// actual_max_temp,
// average_min_temp,
// average_max_temp,
// record_min_temp,
// record_max_temp,
// record_min_temp_year,
// record_max_temp_year,
// actual_precipitation,
// average_precipitation,
// record_precipitation
function App() {
    const[answers, setAnswers] = React.useState({
        state: "",
        actual: {
            max: {
                value: null,
                RelationalModifier: "",
            },
            min: {
                value: null,
                RelationalModifier: "",
            },
            mean: {
                value: null,
                RelationalModifier: "",
            },
            precipitation: {
                value: null
            }
        },
        average: {
            max: {
                value: null,
                RelationalModifier: "",
            },
            min: {
                value: null,
                RelationalModifier: "",
            },
            precipitation: {
                value: null
            }
        },
        record: {
            max: {
                value: null,
                RelationalModifier: "",
            },
            min: {
                value: null,
                RelationalModifier: "",
            },
            precipitation: {
                value: null
            }
        }

});

    const WeatherNames = [
        {name: 'actual', mod: 'max'},
        {name: 'actual', mod: 'min'},
        {name: 'actual', mod: 'mean'},
        {name: 'average', mod: 'max'},
        {name: 'average', mod: 'min'},
        {name: 'record', mod: 'max'},
        {name: 'record', mod: 'min'},
        {name: 'actual', mod: 'precipitation'},
        {name: 'average', mod: 'precipitation'},
        {name: 'record', mod: 'precipitation'},
    ];

    const WeatherRender = ({WeatherNames}) => (
        WeatherNames.map(weather => (
            <WeatherFilter handler={setAnswers} answers={answers} name={weather.name} name2={weather.mod} />
            )
        )
    );
    return (

        <Pane
            background="tint2"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            flexDirection="column"
            padding={20}
        >

            <Heading is="h1">Weather App!</Heading>

                <StateFilter handler={setAnswers} answers={answers} />

                <WeatherRender WeatherNames={WeatherNames} />


            <ApiButton answers={answers} />
        </Pane>
    );
}


export default App;
