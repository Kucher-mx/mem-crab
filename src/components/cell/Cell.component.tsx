// import React, {MouseEvent} from "react";

// interface IProps {
//     classes: string;
//     onClickHandler: (id: string) => void;
//     amount: number;
//     id: string;
//     mouseEnter: (e: MouseEvent) => void;
//     mouseLeave: (e: MouseEvent) => void;
//     highlight: boolean;
// }

// const compareProps = (currentProps: IProps, nextProps: IProps) => {
//     if (nextProps.highlight !== currentProps.highlight || nextProps.amount !== currentProps.amount) {
//         return false;
//     }
//     return true;
// };

// export default React.memo(
//     ({classes, onClickHandler, amount, id, mouseEnter, mouseLeave}: IProps): React.ReactElement<IProps> => (
//         <td
//             className={classes}
//             onClick={e => onClickHandler(e.currentTarget.id)}
//             id={id}
//             onMouseEnter={mouseEnter}
//             onMouseLeave={mouseLeave}
//         >
//             {amount}
//         </td>
//     ),
//     compareProps
// );

import React, {MouseEvent} from "react";

import {cellsToHighlight} from "../../typeScript/types";

interface IProps {
    classes: string;
    onClickHandler: (id: string) => void;
    amount: number;
    id: string;
    mouseEnter: (e: MouseEvent) => void;
    mouseLeave: (e: MouseEvent) => void;
}

const compareProps = (currentProps: IProps, nextProps: IProps) => {
    if (nextProps.classes !== currentProps.classes || nextProps.amount !== currentProps.amount) {
        return false;
    }
    return true;
};

function Cell({classes, onClickHandler, amount, id, mouseEnter, mouseLeave}: IProps): React.ReactElement<IProps> {
    return (
        <td
            className={classes}
            onClick={e => onClickHandler(e.currentTarget.id)}
            id={id}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {amount}
        </td>
    );
}

export default React.memo(Cell, compareProps);
