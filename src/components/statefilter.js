import React from 'react';
import {Button, majorScale, Pane, SelectMenu, Text} from "evergreen-ui";


export default function StateFilter() {
    const [selected, setSelected] = React.useState(null)
    const [filter, setFilter] = React.useState('')
    return (
        <Pane display="flex" alginItems="center" marginX={majorScale(3)}>
            <SelectMenu
                title="Select State"
                onFilterChange={(filter) => setFilter(filter)}
                options={['New York', 'New Jersey'].map((label) => ({ label, value: label }))}
                selected={selected}
                onSelect={(item) => setSelected(item.value)}
            >
                <Button>{selected || 'Select State...'}</Button>
            </SelectMenu>
        </Pane>
    )
}