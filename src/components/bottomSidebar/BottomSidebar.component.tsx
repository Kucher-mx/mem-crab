import React, {FC} from "react";
import {connect} from "react-redux";

import {cellTypes, valueTypes} from "../../typeScript/types";

import "./bottomSidebar.styles.css";

interface IBottom {
    items: valueTypes;
    table: cellTypes[][];
}

const calcColValue = (items: valueTypes, table: cellTypes[][]): number[] => {
    const colInfoArr: number[] = [];

    for (let col = 0; col < items.N; col++) {
        let sumCol = 0;
        for (let row = 0; row < items.M; row++) {
            sumCol = sumCol + table[row][col].amount;
        }
        colInfoArr.push(Math.round(sumCol / items.M));
    }

    return colInfoArr;
};

const BottomSidebar: FC<IBottom> = ({items, table}) => {
    let genSum: {amount: number} = {amount: 0};
    if (table.length !== 0) {
        genSum = table.flat().reduce((a, b) => ({amount: a.amount + b.amount}), {
            amount: 0,
        });
    }

    const colInfo: number[] = calcColValue(items, table);

    return (
        <div className="bottom">
            <div className="bottom-sidebar" style={{gridTemplateColumns: `repeat(${items.N}, 1fr)`}}>
                {colInfo.map((num) => (
                    <div key={`_${num + Math.random().toString(36).substr(2, 7)}`} className="cell">
                        {num}
                    </div>
                ))}
            </div>

            {genSum ? <div className="general-sum">{genSum.amount}</div> : null}
        </div>
    );
};

const stateToProps = (state: {M: number; N: number; X: number; table: cellTypes[][]}) => ({
    items: {M: state.M, N: state.N, X: state.X},
    table: state.table,
});

export default connect(stateToProps)(BottomSidebar);
