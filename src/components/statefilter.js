import React from 'react';
import {Button, majorScale, Pane, SelectMenu} from "evergreen-ui";


export default function StateFilter(props) {
    const [selected, setSelected] = React.useState(null)
    const [filter, setFilter] = React.useState('')
    const cities = ['Charlotte', 'Los Angeles','Houston', 'Indianapolis', 'Jacksonville','Chicago', 'New York City', 'Philadelphia','Phoenix', 'Seattle']
    return (
        <Pane display="flex" alignItems="center" padding={8} marginX={majorScale(3)}>
            <SelectMenu
                title="Select City"
                onFilterChange={(filter) => setFilter(filter)}
                options={cities.map((label) => ({ label, value: label }))}
                selected={selected}
                onSelect={
                    (item)=>{
                        setSelected(item.value)
                        let temp = props.answers
                        temp.state= item.value
                        props.handler(temp)
                    }
                }
            >
                <Button>{selected || 'Select State...'}</Button>
            </SelectMenu>
        </Pane>
    )
}