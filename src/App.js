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
        actualMeanTemp: {
            value: null,
           RelationalModifier: "",
            },
        actualMinTemp: {
            value: null,
            RelationalModifier: "",
        },
        actualMaxTemp: {
            value: null,
            RelationalModifier: "",
        },
        averageMinTemp: {
            value: null,
            RelationalModifier: "",
        },
        averageMaxTemp: {
            value: null,
            RelationalModifier: "",
        },
        recordMinTemp: {
            value: null,
            RelationalModifier: "",
        },
        recordMaxTemp: {
            value: null,
            RelationalModifier: "",
        },
        actualPrecipitation: {
            value: null,
            RelationalModifier: "",
        },
        averagePrecipitation: {
            value: null,
            RelationalModifier: "",
        },
        recordPrecipitation: {
            value: null,
            RelationalModifier: "",
        },

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
                <WeatherFilter handler={setAnswers} answers={answers} name="actualMeanTemp" />
                <WeatherFilter handler={setAnswers} answers={answers} name="actualMinTemp" />
                <WeatherFilter handler={setAnswers} answers={answers} name="actualMaxTemp" />
                <WeatherFilter handler={setAnswers} answers={answers} name="averageMinTemp" />
                <WeatherFilter handler={setAnswers} answers={answers} name="averageMaxTemp" />
                <WeatherFilter handler={setAnswers} answers={answers} name="recordMinTemp" />
                <WeatherFilter handler={setAnswers} answers={answers} name="recordMaxTemp" />
                <WeatherFilter handler={setAnswers} answers={answers} name="actualPrecipitation" />
                <WeatherFilter handler={setAnswers} answers={answers} name="averagePrecipitation" />
                <WeatherFilter handler={setAnswers} answers={answers} name="recordPrecipitation" />


            <ApiButton answers={answers} />
        </Pane>
    );
}


export default App;
