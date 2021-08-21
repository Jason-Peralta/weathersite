import {Button, Pane, Heading} from 'evergreen-ui'
import React from "react";
import './App.css';
import StateFilter from "./components/statefilter";
import ActualMeanFilter from "./components/actualmeanfilter";
import ActualMinFilter from "./components/actualminfilter";
import ActualMaxFilter from "./components/actualmaxfilter";
import AverageMinFilter from "./components/averageminfilter";
import AverageMaxFilter from "./components/averagemaxfilter";

//staging not final

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
                <ActualMeanFilter handler={setAnswers} answers={answers}/>
                <ActualMinFilter handler={setAnswers} answers={answers}/>
                <ActualMaxFilter handler={setAnswers} answers={answers}/>
                <AverageMinFilter handler={setAnswers} answers={answers}/>
                <AverageMaxFilter handler={setAnswers} answers={answers}/>


            <Button onClick={()=>{console.log(answers)}}/>
        </Pane>
    );
}


export default App;
