import React from 'react';
import {Button, majorScale, Pane, SelectMenu, Strong, TextInput} from "evergreen-ui";


// actual_mean_temp
export default function WeatherFilter(props) {
    const [selected, setSelected] = React.useState(null)
    const [value, setValue] = React.useState('')
    return (
        <Pane>
            <Pane display="flex" alignItems="center" marginX={majorScale(3)}>
                <Strong>{props.name} </Strong>
            </Pane>
            <Pane display="flex" alignItems="center" padding={8} marginX={majorScale(3)}>
                <SelectMenu
                    title="Select name"
                    options={['Greater Than', 'Less Than', 'Equal To'].map((label) => ({ label, value: label }))}
                    selected={selected}
                    hasFilter={false}
                    hasTitle={false}
                    onSelect={
                        (item)=>{
                            setSelected(item.value)

                            let temp = props.answers
                            let tempName = props.name

                            temp[tempName].RelationalModifier = item.value
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
                            temp[tempName].value = e.target.value
                            props.handler(temp)
                        }
                    }
                />

            </Pane>
        </Pane>
    )
}