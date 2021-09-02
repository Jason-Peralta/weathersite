import Tabulator from "tabulator-tables";
import {Pane} from "evergreen-ui";


export default function WeatherTable(props) {
    let table = new Tabulator("#example-table", {
        data:props.Weather, //assign data to table
        layout:"fitColumns",      //fit columns to width of table
        responsiveLayout:"hide",  //hide columns that dont fit on the table
        tooltips:true,            //show tool tips on cells
        addRowPos:"top",          //when adding a new row, add it to the top of the table
        pagination:"local",       //paginate the data
        paginationSize:7,         //allow 7 rows per page of data
        movableColumns:true,      //allow column order to be changed
        resizableRows:true,       //allow row order to be changed
        height:100
    });
    return(
        <Pane>
            <div id="example-table"></div>
        </Pane>
    )
}