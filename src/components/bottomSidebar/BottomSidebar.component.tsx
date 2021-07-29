import React, {FC} from "react";
import {connect} from "react-redux";

import {cellTypes, rowSumTypes, stateTypes, tableTypes, valueTypes} from "../../typeScript/types";
import { calcColAverage } from "../../utils/utils";

import "./bottomSidebar.styles.css";

interface IBottom {
    items: valueTypes;
    elements: cellTypes[];
    table: tableTypes[];
    rowSum: rowSumTypes[];
}

function BottomSidebar({items, elements, table, rowSum}: IBottom) {
    let genSum: {genSum: number} = {genSum: 0};
    if (elements.length !== 0) {
        genSum = rowSum
            .reduce((a, b) => ({genSum: a.genSum + b.rowSum}), {
                genSum: 0,
            });
    }

    const colInfo = calcColAverage(items.M, items.N, table);

    return (
        <div className="bottom">
            <div className="bottom-sidebar" style={{gridTemplateColumns: `repeat(${items.N}, 1fr)`}}>
                {colInfo.map(({amount, id}) => (
                    <div key={`_${id}`} className="cell">
                        {amount}
                    </div>
                ))}
            </div>

            {genSum ? <div className="general-sum">{genSum.genSum}</div> : null}
        </div>
    );
}

interface MapStateToPropsTypes {
    items: {M: number; N: number; X: number};
    elements: cellTypes[];
    rowSum: rowSumTypes[],
    table: tableTypes[];
}

const stateToProps = (state: stateTypes) => ({
    items: {M: state.M, N: state.N, X: state.X},
    elements: state.elements,
    rowSum: state.rowSum,
    table: state.table
});

export default connect<IBottom, MapStateToPropsTypes, {}, stateTypes>(stateToProps)(BottomSidebar);
