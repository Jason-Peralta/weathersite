import React, {useEffect} from 'react';
import {Button, majorScale, Pane} from "evergreen-ui";
import Tabulator from 'tabulator-tables';
import WeatherTable from "./weathertable";

export default function ApiButton(props) {
    let apiURL = "http://localhost:3000/weather/"
    const [Weather, setWeather] = React.useState(null)
    //example http://localhost:3000/weather/KPHX/?actual_max_temp=101



    function stateFormatter(stateURL) {
        switch(stateURL) {
            case 'Charlotte':
                apiURL = apiURL + "KCLT/?"
                break;
            case 'Los Angeles':
                apiURL = apiURL + "KCQT/?"
                break;
            case 'Houston':
                apiURL = apiURL + "KHOU/?"
                break;
            case 'Indianapolis':
                apiURL = apiURL + "KIND/?"
                break;
            case 'Jacksonville':
                apiURL = apiURL + "KJAX/?"
                break;
            case 'Chicago':
                apiURL = apiURL + "KMDW/?"
                break;
            case 'New York City':
                apiURL = apiURL + "KNYC/?"
                break;
            case 'Philadelphia':
                apiURL = apiURL + "KPHL/?"
                break;
            case 'Phoenix':
                apiURL = apiURL +"KPHX/?"
                break;
            case 'Seattle':
                apiURL = apiURL + "KSEA/?"
                break;
        }
    }


    const modFormatter = (mod) => {
        return (mod === 'Greater Than')
            ? "gt"
            : (mod === 'Greater Than Equal To')
                ? "gte"
                : (mod === 'Less Than Equal To')
                        ? "lte"
                        : (mod === 'Less Than')
                            ? "lt"
                            : (mod === 'Equal To')
                                ? "et"
                                : ""
    }

    const getTransformedState = () => {
        let transformedStateObj = [];

        Object.keys(props.answers).map(key => {
            if (key === "state") {
                return {key: props.answers[key]};
            }
            return Object.keys(props.answers[key]).map(subKey => {
                return {
                    name: key + "_" + subKey,
                    temp: props.answers[key][subKey].value,
                    mod: modFormatter(props.answers[key][subKey].RelationalModifier)
                }
            })
        }).forEach(x => {
            if (!Array.isArray(x)) return;
            x.forEach(y => {
                if (y.temp !== null) transformedStateObj.push(y)
            })
        });

        console.log(transformedStateObj)

        return transformedStateObj;
    }

    const transformedStateToQuery = (arr) => {
        return arr.map(x => {
            return x.name + "_temp" + ((x.mod === '') ? "" : "[" + x.mod + "]") + "=" + x.temp;
        }).join("&")
    }


    const fetchWeather = async () => {

        apiURL = apiURL + transformedStateToQuery(getTransformedState(props.answers))

        setWeather(
            await fetch(apiURL)
                .then(response => response.json())
        )

    }

    useEffect(() => {
        document.title = "Weather Application";
        fetchWeather().then(x => x)
    }, []);

    if (Weather === ""){
        return(
            <div>
                Data Not Loaded.
            </div>
        )
    } else{
    return (
     //   <Button onClick={()=>{fetchWeather()}}> {Weather}</Button>
        <Pane>
        <Button onClick={()=>{
            stateFormatter(props.answers.state)
            fetchWeather()

            console.log(props.answers)
            console.log(Weather)
       //     console.log(apiURL + transformedStateToQuery(getTransformedState(props.answers)))
        }}></Button>
        </Pane>

    )
    }
}
