import React from 'react';
import {Button, majorScale, Pane, SelectMenu, Strong, TextInput} from "evergreen-ui";


// actual_mean_temp
export default function AverageMaxFilter(props) {
    const [selected, setSelected] = React.useState(null)
    const [value, setValue] = React.useState('')
    return (
        <Pane>
            <Pane display="flex" alignItems="center" marginX={majorScale(3)}>
                <Strong> Average Max Temp </Strong>
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
                            temp.averageMaxTemp.RelationalModifier = item.value
                            props.handler(temp)
                        }
                    }
                >
                    <Button>{selected || 'Select Relational Operator...'}</Button>
                </SelectMenu>
                <TextInput
                    placeholder="Enter Number Of Average Max Temp"
                    onChange={
                        (e)=>{
                            let temp = props.answers
                            temp.averageMaxTemp.value = e.target.value
                            props.handler(temp)
                        }
                    }
                />

            </Pane>
        </Pane>
    )
}