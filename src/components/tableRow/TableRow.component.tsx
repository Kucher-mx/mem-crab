import React, {MouseEvent} from "react";

import {cellTypes} from "../../typeScript/types";
import Cell from "../cell/Cell.component";

interface IProps {
    row: cellTypes[];
    hoverEnter: (e: MouseEvent) => void;
    hoverOut: (e: MouseEvent) => void;
    click: (id: string) => void;
}

function TableRow({row, click, hoverEnter, hoverOut}: IProps): React.ReactElement<IProps> {
    return (
        <tr>
            {row.map(({id, amount, isHighlighted}) => {
                const classes = [];
                if (isHighlighted) {
                    classes.push("highlight");
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
                        highlight={isHighlighted}
                    />
                );
            })}
        </tr>
    );
}

export default TableRow;
