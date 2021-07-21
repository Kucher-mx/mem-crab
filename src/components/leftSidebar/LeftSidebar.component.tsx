import React, {Dispatch,FC, MouseEvent} from "react";
import {connect} from "react-redux";
import {RouteComponentProps,withRouter} from "react-router";

import {HIGHLITE_SUM, UNHIGHLITE_SUM} from "../../actions/action";
import {rowSumTypes, stateTypes} from "../../typeScript/types";

import "./leftSidebar.styles.css";

interface ILeftSidebar {
    rowSum: rowSumTypes[];
    highlite_sum: (id: string) => void;
    unHighlite_sum: () => void;
}

function LeftSidebar({rowSum, highlite_sum, unHighlite_sum}: ILeftSidebar) {
    const inHoverSumHandle = (e: MouseEvent) => {
        highlite_sum(e.currentTarget.id);
    };

    const outHoverSumHandle = () => {
        unHighlite_sum();
    };

    return (
        <div className="left-sidebar">
            {rowSum.map(item => {
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
                            outHoverSumHandle();
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

interface MapStateToPropsTypes {
    items: {M: number; N: number; X: number},
    rowSum: rowSumTypes[]
}

interface MapDispatchToPropsTypes {
    highlite_sum: (id: string) => void;
    unHighlite_sum: () => void;
}

const stateToProps = (state: stateTypes) => ({
    items: {M: state.M, N: state.N, X: state.X},
    rowSum: state.rowSum,
});

function mapDispatchToProps(dispatch: Dispatch<{type: string; id?: string}>) {
    return {
        highlite_sum: (id: string) => dispatch(HIGHLITE_SUM(id)),
        unHighlite_sum: () => dispatch(UNHIGHLITE_SUM()),
    };
}


export default withRouter<RouteComponentProps<{}>, any>(connect<MapStateToPropsTypes, MapDispatchToPropsTypes, ILeftSidebar, stateTypes>(stateToProps, mapDispatchToProps)(LeftSidebar));
