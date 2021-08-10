import React from "react";
import {connect} from "react-redux";

import {increaseTypes, rowSumTypes, stateTypes, tableTypes, valueTypes} from "../../typeScript/types";
import {calcColAverage} from "../../utils/utils";

import withStyles from "isomorphic-style-loader/withStyles";
import s from "./bottomSidebar.module.css";

interface IProps {
    items: valueTypes;
    table: tableTypes[];
    rowSum: rowSumTypes[];
    amountObj: increaseTypes;
}

function BottomSidebar({items, amountObj, table, rowSum}: IProps): React.ReactElement<IProps> {
    const genSum: number = React.useMemo(
        () => Object.values(amountObj).reduce((acc, cellValue) => acc + cellValue, 0),
        [amountObj]
    );

    const colInfo = calcColAverage(items.M, items.N, table, amountObj);

    return (
        <div className={s.bottom}>
            <div className={s.bottomSidebar} style={{gridTemplateColumns: `repeat(${items.N}, 1fr)`}}>
                {colInfo.map(({amount, id}) => (
                    <div key={`_${id}`} className={s.bsCell}>
                        {amount}
                    </div>
                ))}
            </div>

            <div className={s.bsGeneralSum}>{genSum}</div>
        </div>
    );
}

interface MapStateToPropsTypes {
    items: {M: number; N: number; X: number};
    rowSum: rowSumTypes[];
    table: tableTypes[];
    amountObj: increaseTypes;
}

const stateToProps = (state: stateTypes) => ({
    items: {M: state.M, N: state.N, X: state.X},
    rowSum: state.rowSum,
    table: state.table,
    amountObj: state.amountObj,
});

export default withStyles(s)(connect<IProps, MapStateToPropsTypes, {}, stateTypes>(stateToProps)(BottomSidebar));
