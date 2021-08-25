import React, {useEffect} from 'react';
import {Button} from "evergreen-ui";

export default function ApiButton(props) {
    const [Weather, setWeather] = React.useState(null)

    const fetchWeather = async () => {
        setWeather(
            await fetch("http://localhost:3000/weather/KPHX/?actual_max_temp[eq]=104&actual_mean_temp[gt]=94")
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
    )
    }
}
