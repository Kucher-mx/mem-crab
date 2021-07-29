import * as React from "react";

import {tableTypes} from "../../typeScript/types";
import TableRow from "../tableRow/TableRow.component";

interface ITable {
    table: tableTypes[];
    hoverEnter: (e: React.MouseEvent) => void;
    hoverOut: () => void;
    click: (id: string) => void;
}

function Table({table, hoverOut, hoverEnter, click}: ITable) {
    return (
        <table className="table">
            <tbody>
                {table.map(({row, id}) => (
                    <TableRow
                        key={id}
                        row={row}
                        hoverEnter={hoverEnter}
                        hoverOut={hoverOut}
                        click={click}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
