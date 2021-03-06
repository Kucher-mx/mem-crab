import React, {MouseEvent} from "react";

import {cellsToHighlight, cellTypes, increaseTypes} from "../../typeScript/types";
import Cell from "../cell/Cell.component";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./tableRow.module.css";

interface IProps {
    row: cellTypes[];
    rowId: string;
    hoverEnter: (e: MouseEvent) => void;
    hoverOut: () => void;
    highlight: cellsToHighlight;
    click: (id: string) => void;
    amountObj: increaseTypes;
}

function TableRow({row, amountObj, rowId, highlight, click, hoverEnter, hoverOut}: IProps): React.ReactElement<IProps> {
    return (
        <tr>
            {row.map(({id}) => {
                const cellClasses = [s.cell];

                if (highlight[rowId] && highlight[rowId][id]) {
                    cellClasses.push(s.highlight);
                }
                return (
                    <Cell
                        key={id}
                        classes={cellClasses.join(" ")}
                        amount={amountObj[id]}
                        onClickHandler={click}
                        id={id}
                        mouseEnter={hoverEnter}
                        mouseLeave={hoverOut}
                    />
                );
            })}
        </tr>
    );
}

export default withStyles(s)(TableRow);
