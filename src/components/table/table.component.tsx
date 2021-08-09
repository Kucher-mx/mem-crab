import * as React from "react";

import {cellsToHighlight, increaseTypes, tableTypes} from "../../typeScript/types";
import TableRow from "../tableRow/TableRow.component";

import withStyles from "isomorphic-style-loader/withStyles";
//@ts-ignore
import s from "./table.module.css";

interface IProps {
    table: tableTypes[];
    hoverEnter: (e: React.MouseEvent) => void;
    hoverOut: () => void;
    click: (id: string) => void;
    amountObj: increaseTypes;
    cellsHoHighlight: cellsToHighlight;
}

function Table({table, amountObj, cellsHoHighlight, hoverOut, hoverEnter, click}: IProps): React.ReactElement<IProps> {
    return (
        <table className={s.table}>
            <tbody>
                {table.map(({row, id}) => (
                    <TableRow
                        key={id}
                        highlight={cellsHoHighlight}
                        row={row}
                        rowId={id}
                        hoverEnter={hoverEnter}
                        hoverOut={hoverOut}
                        click={click}
                        amountObj={amountObj}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default withStyles(s)(Table);
