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
                <WeatherFilter handler={setAnswers} answers={answers} name="actual" name2="mean" />
                <WeatherFilter handler={setAnswers} answers={answers} name="actual" name2="min" />
                <WeatherFilter handler={setAnswers} answers={answers} name="actual" name2="max" />
                <WeatherFilter handler={setAnswers} answers={answers} name="average" name2="min" />
                <WeatherFilter handler={setAnswers} answers={answers} name="average" name2="max" />
                <WeatherFilter handler={setAnswers} answers={answers} name="record" name2="min" />
                <WeatherFilter handler={setAnswers} answers={answers} name="record" name2="max" />
                <WeatherFilter handler={setAnswers} answers={answers} name="actual" name2="precipitation"/>
                <WeatherFilter handler={setAnswers} answers={answers} name="average" name2="precipitation"/>
                <WeatherFilter handler={setAnswers} answers={answers} name="record" name2="precipitation"/>


            <ApiButton answers={answers} />
        </Pane>
    );
}


export default App;
