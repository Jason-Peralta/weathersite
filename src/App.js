import {Button, Pane, Heading} from 'evergreen-ui'
import React from "react";
import './App.css';
import StateFilter from "./components/statefilter";
import WeatherFilter from "./components/weatherfilter";
//Staging Not Final
function App() {
    const[answers, setAnswers] = React.useState({
        state: "",
        minTemp: {
            value: null,
            minTempRelationalModifier: "",
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

                <StateFilter handler={setAnswers} answers={answers}/>
                <WeatherFilter handler={setAnswers} answers={answers}/>

            <Button onClick={()=>{console.log(answers)}}/>
        </Pane>
    );
}


export default App;
