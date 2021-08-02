import * as React from "react";

import {tableTypes} from "../../typeScript/types";
import TableRow from "../tableRow/TableRow.component";

interface IProps {
    table: tableTypes[];
    hoverEnter: (e: React.MouseEvent) => void;
    hoverOut: (e: React.MouseEvent) => void;
    click: (id: string) => void;
}

function Table({table, hoverOut, hoverEnter, click}: IProps): React.ReactElement<IProps> {
    return (
        <table className="table">
            <tbody>
                {table.map(({row, id}) => (
                    <TableRow key={id} row={row} hoverEnter={hoverEnter} hoverOut={hoverOut} click={click} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
