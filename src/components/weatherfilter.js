import React from 'react';
import {Button, majorScale, Pane, SelectMenu, Strong, TextInput} from "evergreen-ui";



export default function WeatherFilter(props) {
    const [selected, setSelected] = React.useState(null)
    const [value, setValue] = React.useState('')
    return (
        <Pane>
        <Pane display="flex" alginItems="center" marginX={majorScale(3)}>
            <Strong> Weather Variable </Strong>
        </Pane>
            <Pane display="flex" alginItems="center" padding={8} marginX={majorScale(3)}>
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
                    temp.minTemp.minTempRelationalModifier = item.value
                    props.handler(temp)
                }
            }
        >
            <Button>{selected || 'Select Relational Operator...'}</Button>
        </SelectMenu>
                <TextInput
                    placeholder="Enter Number Of Minimum Temperature"
                    onChange={
                        (e)=>{
                            let temp = props.answers
                            temp.minTemp.value = e.target.value
                            props.handler(temp)
                        }
                    }
                />

        </Pane>
        </Pane>
    )
}