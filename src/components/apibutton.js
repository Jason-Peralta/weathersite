import React from 'react';
import {Button} from "evergreen-ui";

export default function ApiButton(props) {
    return (
        <Button onClick={()=>{console.log(props.answers)}}/>
    )

}
