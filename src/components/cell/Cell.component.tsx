import React, { MouseEvent } from "react";

interface ICell {
    classes: string,
    onClickHandler: (id: string) => void;
    amount: number,
    id: string;
    mouseEnter: (e: MouseEvent) => void;
    mouseLeave: () => void,
    highlite: boolean,
}

function Cell ({classes, onClickHandler, amount, id, mouseEnter, mouseLeave}: ICell){
    return (
        <td
            className={classes}
            onClick={e => onClickHandler(e.currentTarget.id)}
            id={id}
            onMouseEnter={e => mouseEnter(e)}
            onMouseLeave={() => mouseLeave()}
        >
            {amount}
        </td>
    );
}

export default Cell;
