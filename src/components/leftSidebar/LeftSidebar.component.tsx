import React, {BaseSyntheticEvent} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import {HIGHLITE_SUM, UNHIGHLITE_SUM} from "../../actions/action";
import {rowSumTypes} from "../../typeScript/types";

import "./leftSidebar.styles.css";

function LeftSidebar({
    rowSum,
    highlite_sum,
    unHighlite_sum,
}: {
    rowSum: rowSumTypes[];
    highlite_sum: (id: string) => {};
    unHighlite_sum: () => {};
}) {
    const inHoverSumHandle = (e: BaseSyntheticEvent) => {
        highlite_sum(e.target.id);
    };

    const outHoverSumHandle = (e: BaseSyntheticEvent) => {
        unHighlite_sum();
    };

    return (
        <div className="left-sidebar">
            {rowSum.map((item: rowSumTypes) => {
                const backgroundStyles = item.isHoveredSum
                    ? {
                          width: `${item.rowPersent}%`,
                      }
                    : {width: `${0}%`};
                return (
                    <div
                        id={item.id}
                        key={`_${item.rowSum + item.rowPersent}`}
                        className="sum-cell"
                        onMouseEnter={e => {
                            inHoverSumHandle(e);
                        }}
                        onMouseLeave={e => {
                            outHoverSumHandle(e);
                        }}
                    >
                        <div className="background" style={backgroundStyles} />
                        {item.isHoveredSum ? `${item.rowPersent}%` : item.rowSum}
                    </div>
                );
            })}
        </div>
    );
}

const stateToProps = (state: {M: number; N: number; X: number; rowSum: rowSumTypes[]}) => ({
    items: {M: state.M, N: state.N, X: state.X},
    rowSum: state.rowSum,
});

function mapDispatchToProps(dispatch: (arg0: {type: string; id?: string}) => {}) {
    return {
        highlite_sum: (id: string) => dispatch(HIGHLITE_SUM(id)),
        unHighlite_sum: () => dispatch(UNHIGHLITE_SUM()),
    };
}

export default withRouter(connect(stateToProps, mapDispatchToProps)(LeftSidebar));
