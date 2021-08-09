import React, {Dispatch, FC, MouseEvent} from "react";
import {connect} from "react-redux";

import {HIGHLIGHT_SUM, UNHIGHLIGHT_SUM} from "../../actions/action";
import {rowSumTypes, stateTypes} from "../../typeScript/types";

import "./leftSidebar.styles.css";

interface IProps {
    rowSum: rowSumTypes[];
    highlight_sum: (id: string) => void;
    unHighlight_sum: () => void;
}

function LeftSidebar({rowSum, highlight_sum, unHighlight_sum}: IProps): React.ReactElement<IProps> {
    const inHoverSumHandle = (e: MouseEvent) => {
        highlight_sum(e.currentTarget.id);
    };

    const outHoverSumHandle = () => {
        unHighlight_sum();
    };

    return (
        <div className="left-sidebar">
            {rowSum.map(item => {
                const backgroundStyles = item.isHoveredSum
                    ? {
                          width: `${item.rowPercent}%`,
                      }
                    : {width: `${0}%`};
                return (
                    <div
                        id={item.id}
                        key={item.id}
                        className="sum-cell"
                        onMouseEnter={inHoverSumHandle}
                        onMouseLeave={outHoverSumHandle}
                    >
                        <div className="background" style={backgroundStyles} />
                        {item.isHoveredSum ? `${item.rowPercent}%` : item.rowSum}
                    </div>
                );
            })}
        </div>
    );
}

interface MapStateToPropsTypes {
    items: {M: number; N: number; X: number};
    rowSum: rowSumTypes[];
}

interface MapDispatchToPropsTypes {
    highlight_sum: (id: string) => void;
    unHighlight_sum: () => void;
}

const stateToProps = (state: stateTypes) => ({
    items: {M: state.M, N: state.N, X: state.X},
    rowSum: state.rowSum,
});

function mapDispatchToProps(dispatch: Dispatch<{type: string; id?: string}>) {
    return {
        highlight_sum: (id: string) => dispatch(HIGHLIGHT_SUM(id)),
        unHighlight_sum: () => dispatch(UNHIGHLIGHT_SUM()),
    };
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes, IProps, stateTypes>(
    stateToProps,
    mapDispatchToProps
)(LeftSidebar);
