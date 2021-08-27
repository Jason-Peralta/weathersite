import React, {useEffect} from 'react';
import {Button} from "evergreen-ui";

export default function ApiButton(props) {
    const [Weather, setWeather] = React.useState(null)
    //example http://localhost:3000/weather/KPHX/?actual_max_temp=101


    let queryString = Object.keys(props.answers).map(key =>
        Object.keys(props.answers[key]).map(key2 =>
            key + '_' + key2 + '_temp' + '[' + props.answers[key][key2].RelationalModifier + ']=' + props.answers[key][key2].value).join('&')).join('&');

        queryString = queryString.replaceAll('Greater Than', 'gt').replaceAll('Less Than', 'lt').replaceAll('state_0_temp[undefined]=undefined&state_1_temp[undefined]=undefined&state_2_temp[undefined]=undefined&state_3_temp[undefined]=undefined&state_4_temp[undefined]=undefined&state_5_temp[undefined]=undefined&state_6_temp[undefined]=undefined&state_7_temp[undefined]=undefined','')

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

        //<Button onClick={()=>{fetchWeather()}}> {Weather} </Button>
       // <Button onClick={()=> {console.log(queryString)}}/>
        <Button onClick={()=>{

            console.log(props.answers)
            console.log(queryString)
        }}/>
    )
    }
}
