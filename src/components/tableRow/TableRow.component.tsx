import React, {FC, MouseEvent} from "react";

import {cellTypes} from "../../typeScript/types";
import Cell from '../cell/Cell.component'

interface iRow {
    row: cellTypes[];
    hoverEnter: (e: MouseEvent) => void;
    hoverOut: () => void;
    click: (id: string) => void
}

function TableRow({row, click, hoverEnter, hoverOut}: iRow) {
    return (
        <tr key={`_C${row[0].id}`}>
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

// class TableRow extends React.Component<iRow>{
//     shouldComponentUpdate(nextProps: any, _: any){
//         console.log(this.props, nextProps);
        
//         return true
//     }
    
//     render(){
//         const {row, click, hoverEnter, hoverOut} = this.props
//         console.log(this.props);
        
//         return (
//             <tr key={`_C${row[0].id}`}>
//                 {row.map(({id, amount, isHighlited}) => {
//                     const classes = [];
//                     if (isHighlited) {
//                         classes.push("highlite");
//                     }
    
//                     return (
//                         <Cell
//                             key={id}
//                             classes={classes.join(" ")}
//                             amount={amount}
//                             onClickHandler={click}
//                             id={id}
//                             mouseEnter={hoverEnter}
//                             mouseLeave={hoverOut}
//                             highlite={isHighlited}
//                         />
//                     );
//                 })}
//             </tr>
//         );
//     }
// }

export default TableRow;
