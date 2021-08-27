import React, {useEffect} from 'react';
import {Button} from "evergreen-ui";

export default function ApiButton(props) {
    const [Weather, setWeather] = React.useState(null)
    //example http://localhost:3000/weather/KPHX/?actual_max_temp=101
    const fetchWeather = async () => {
        let stateTemp = props.answers.state
        let temp = props.answers.actual.max.value
        let apiURL = "http://localhost:3000/weather/KPHX/?" + stateTemp
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

        <Button onClick={()=>{fetchWeather()}}> {Weather} </Button>
      //  <Button onClick={()=>{console.log(props.answers)}}/>
    )
    }
}
