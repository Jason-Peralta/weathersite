import React from 'react';
import {Button, majorScale, Pane, SelectMenu, Strong, TextInput} from "evergreen-ui";
import Tabulator from "tabulator-tables";


// actual_mean_temp
export default function WeatherFilter(props) {
    const [selected, setSelected] = React.useState(null)
    const [value, setValue] = React.useState('')
    const options = ['Greater Than', 'Greater Than Equal To' , 'Less Than', 'Less Than Equal To', 'Equal To']

    return (
        <Pane>
            <Pane display="flex" alignItems="center" marginX={majorScale(3)}>
                <Strong>{props.name + " " + props.name2 + " temp"} </Strong>
            </Pane>
            <Pane display="flex" alignItems="center" padding={8} marginX={majorScale(3)}>
                <SelectMenu
                    title="Select name"
                    options={options.map((label) => ({ label, value: label }))}
                    selected={selected}
                    hasFilter={false}
                    hasTitle={false}
                    onSelect={
                        (item)=>{
                            setSelected(item.value)

                            let temp = props.answers
                            let tempName = props.name
                            let temp2 = props.answers[tempName]
                            let tempName2 = props.name2
                            temp2[tempName2].RelationalModifier = item.value
                            props.handler(temp)
                        }
                    }
                >
                    <Button>{selected || 'Select Relational Operator...'}</Button>
                </SelectMenu>
                <TextInput
                    placeholder="enter value"
                    onChange={
                        (e)=>{
                            let temp = props.answers
                            let tempName = props.name
                            let temp2 = props.answers[tempName]
                            let tempName2 = props.name2
                            temp2[tempName2].value = e.target.value
                            props.handler(temp)
                        }
                    }
                />

            </Pane>
        </Pane>
    )
}