import React, {useEffect} from 'react';
import {Button} from "evergreen-ui";

export default function ApiButton(props) {

    let apiURL = "http://localhost:3000/weather/KPHX/"
    const [Weather, setWeather] = React.useState(null)
    //example http://localhost:3000/weather/KPHX/?actual_max_temp=101



    const modFormatter = (mod) => {
        return (mod === 'Greater Than')
            ? "gt"
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
        return "?" + arr.map(x => {
            return x.name + "_temp" + ((x.mod === '') ? "" : "[" + x.mod + "]") + "=" + x.temp;
        }).join("&")
    }


    const fetchWeather = async () => {

        let stateTemp = props.answers.state
        let temp = props.answers.actual.max.value
        if (temp){
            apiURL = apiURL + "actual_max_temp=" + temp
        }



        setWeather(
            await fetch(apiURL)
                .then(response => response.json())
                .then(json => json.KPHX)
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

        //<Button onClick={()=>{fetchWeather()}}> {Weather} </Button>
       // <Button onClick={()=> {console.log(queryString)}}/>
        <Button onClick={()=>{

            console.log(props.answers)
            console.log(apiURL + transformedStateToQuery(getTransformedState(props.answers)))
        }}/>
    )
    }
}
