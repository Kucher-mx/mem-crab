import React, {MouseEvent} from "react";

import {cellTypes} from "../../typeScript/types";
import Cell from '../cell/Cell.component'

interface iRow {
    row: cellTypes[];
    hoverEnter: (e: MouseEvent) => void;
    hoverOut: (e: MouseEvent) => void;
    click: (id: string) => void
}

function TableRow({row, click, hoverEnter, hoverOut}: iRow) {
    return (
        <tr>
            {row.map(({id, amount, isHighlited}) => {
                const classes = [];
                if (isHighlited) {
                    classes.push("highlite");
                }

                return (
                    <Cell
                        key={id}
                        classes={classes.join(" ")}
                        amount={amount}
                        onClickHandler={click}
                        id={id}
                        mouseEnter={hoverEnter}
                        mouseLeave={hoverOut}
                        highlite={isHighlited}
                    />
                );
            })}
        </tr>)
}

export default TableRow;
