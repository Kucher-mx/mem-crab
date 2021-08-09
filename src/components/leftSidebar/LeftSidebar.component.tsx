import * as React from "react";
import {connect} from "react-redux";

import {HIGHLIGHT_SUM, UNHIGHLIGHT_SUM} from "../../actions/action";
import {rowSumTypes, stateTypes} from "../../typeScript/types";

import withStyles from "isomorphic-style-loader/withStyles";
//@ts-ignore
import s from "./leftSidebar.module.css";

interface IProps {
    rowSum: rowSumTypes[];
    highlight_sum: (id: string) => void;
    unHighlight_sum: () => void;
}

function LeftSidebar({rowSum, highlight_sum, unHighlight_sum}: IProps): React.ReactElement<IProps> {
    const inHoverSumHandle = (e: React.MouseEvent) => {
        highlight_sum(e.currentTarget.id);
    };

    const outHoverSumHandle = () => {
        unHighlight_sum();
    };

    return (
        <div className={s.leftSidebar}>
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
                        className={s.lsSumCell}
                        onMouseEnter={inHoverSumHandle}
                        onMouseLeave={outHoverSumHandle}
                    >
                        <div className={s.lsSumCellBack} style={backgroundStyles} />
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

function mapDispatchToProps(dispatch: React.Dispatch<{type: string; id?: string}>) {
    return {
        highlight_sum: (id: string) => dispatch(HIGHLIGHT_SUM(id)),
        unHighlight_sum: () => dispatch(UNHIGHLIGHT_SUM()),
    };
}

export default withStyles(s)(
    connect<MapStateToPropsTypes, MapDispatchToPropsTypes, IProps, stateTypes>(
        stateToProps,
        mapDispatchToProps
    )(LeftSidebar)
);
