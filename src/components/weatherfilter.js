import React from 'react';
import {Button, majorScale, Pane, SelectMenu, Text, TextInput} from "evergreen-ui";



export default function WeatherFilter() {
    const [selected, setSelected] = React.useState(null)
    return (
        <Pane display="flex" alginItems="center" marginX={majorScale(3)}>
        <SelectMenu
            title="Select name"
            options={['Greater Than', 'Less Than', 'Equal To'].map((label) => ({ label, value: label }))}
            selected={selected}
            hasFilter={false}
            hasTitle={false}
            onSelect={(item) => setSelected(item.value)}
        >
            <Button>{selected || 'Select Relational Operator...'}</Button>
        </SelectMenu>
            <TextInput  width="20%" placeholder="Input Value" />
        </Pane>
    )
}