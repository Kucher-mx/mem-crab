import React, {Dispatch, FC, MouseEvent} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

import {ADD_AMOUNT, HIGHLIGHT, UNHIGHLIGHT} from "../../actions/action";
import BottomSidebar from "../../components/bottomSidebar/BottomSidebar.component";
import Buttons from "../../components/buttons/Buttons.component";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar.component";
import Table from "../../components/table/table.component";
import type {
    cellsToHighlight,
    cellTypes,
    increaseTypes,
    stateTypes,
    tableTypes,
    valueTypes,
} from "../../typeScript/types";

import "./main.styles.css";

interface IProps {
    items: valueTypes;
    table: tableTypes[];
    amountObj: increaseTypes;
    increase: (value: increaseTypes) => void;
    highlight: (value: cellsToHighlight) => void;
    unHighlight: () => void;
    cellsHoHighlight: cellsToHighlight;
}

function MainPage({
    items,
    table,
    cellsHoHighlight,
    increase,
    highlight,
    amountObj,
    unHighlight,
}: IProps): React.ReactElement<IProps> {
    const navigate = useNavigate();
    if (table.length === 0) {
        navigate("/");
    }

    const tempArr: cellTypes[] = React.useMemo(
        () =>
            table
                .reduce((acc, tableEl) => acc.concat(tableEl.row), [])
                .map(el => ({...el, amount: amountObj[el.id]}))
                .sort((a, b) => a.amount - b.amount),
        [amountObj, table]
    );

    const inHoverCellHandle = React.useCallback(
        (e: MouseEvent) => {
            const hoverElementIdx = tempArr.findIndex(el => (e.currentTarget ? el.id === e.currentTarget.id : false));

            const mappedArr = tempArr.map(cell => ({
                ...cell,
                amount: Math.abs(cell.amount - tempArr[hoverElementIdx].amount),
            }));

            const hoveredStart = hoverElementIdx - items.X < 0 ? 0 : hoverElementIdx - items.X;
            const hoveredEnd =
                items.X * 2 + 1 + hoveredStart > mappedArr.length - 1
                    ? mappedArr.length - 1
                    : items.X * 2 + 1 + hoveredStart;

            const splicedArr = mappedArr
                // .slice(hoveredStart, hoveredEnd)
                .filter((_, idx) => idx >= hoveredStart && idx <= hoveredEnd)
                .sort((a, b) => a.amount - b.amount)
                .slice(0, items.X);

            const objToHighlight = splicedArr
                .map(cell => ({cellId: cell.id, rowId: cell.rowId}))
                .reduce((acc, {rowId, cellId}) => {
                    if (!acc[rowId]) {
                        acc[rowId] = {};
                        acc[rowId][cellId] = true;
                    } else {
                        acc[rowId] = {...acc[rowId], [cellId]: true};
                    }
                    return acc;
                }, {});

            highlight(objToHighlight);
        },
        [highlight, items.X, tempArr]
    );

    const outHoverCellHandle = React.useCallback(() => unHighlight(), [unHighlight]);

    const increaseFunc = (id: string) =>
        increase({
            ...amountObj,
            [id]: amountObj[id] + 1,
        });

    return (
        <div className="main-page">
            <Link to="/" className="title">
                MEM-CRAB React Test
            </Link>
            <div className="table-wrapper">
                <Table
                    table={table}
                    cellsHoHighlight={cellsHoHighlight}
                    hoverEnter={inHoverCellHandle}
                    hoverOut={outHoverCellHandle}
                    click={increaseFunc}
                    amountObj={amountObj}
                />

                {
                    // @ts-ignore
                    <LeftSidebar />
                }
            </div>
            <BottomSidebar />
            <Buttons />
        </div>
    );
}

function mapStateToProps(state: stateTypes) {
    return {
        items: {M: state.M, N: state.N, X: state.X},
        table: state.table,
        cellsHoHighlight: state.cellsToHighlight,
        amountObj: state.amountObj,
    };
}

function mapDispatchToProps(dispatch: Dispatch<{type: string; id?: string}>) {
    return {
        increase: (value: increaseTypes) => dispatch(ADD_AMOUNT(value)),
        highlight: (value: cellsToHighlight) => dispatch(HIGHLIGHT(value)),
        unHighlight: () => dispatch(UNHIGHLIGHT()),
    };
}

interface MapStateToPropsTypes {
    items: {M: number; N: number; X: number};
    table: tableTypes[];
    amountObj: increaseTypes;
}

interface MapDispatchToPropsTypes {
    increase: (value: increaseTypes) => void;
    highlight: (value: cellsToHighlight) => void;
    unHighlight: () => void;
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes, IProps, stateTypes>(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
