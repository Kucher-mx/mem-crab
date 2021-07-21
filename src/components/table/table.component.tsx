import React, {FC, MouseEvent} from "react";

import {cellTypes} from "../../typeScript/types";
import TableRow from "../tableRow/TableRow.component";

interface ITable {
    table: cellTypes[][];
    hoverEnter: (e: MouseEvent) => void;
    hoverOut: () => void;
    click: (id: string) => void;
}

function Table({table, hoverOut, hoverEnter, click}: ITable) {
    return (
        <table className="table">
            <tbody>
                {table.map(row => (
                    <TableRow
                        key={`_${row[0].id}`}
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
