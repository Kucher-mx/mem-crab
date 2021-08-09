import * as React from "react";
import {connect} from "react-redux";
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

import withStyles from "isomorphic-style-loader/withStyles";
//@ts-ignore
import s from "./main.module.css";
import {findClosestNumbersInTable} from "./Main.utils";

interface IProps {
    items: valueTypes;
    table: tableTypes[];
    amountObj: increaseTypes;
    increase: (value: increaseTypes) => void;
    highlight: (value: cellsToHighlight) => void;
    unHighlight: () => void;
    cellsToHighlight: cellsToHighlight;
}

function mapStateToProps(state: stateTypes) {
    return {
        items: {M: state.M, N: state.N, X: state.X},
        table: state.table,
        cellsToHighlight: state.cellsToHighlight,
        amountObj: state.amountObj,
    };
}

function mapDispatchToProps(dispatch: React.Dispatch<{type: string; id?: string}>) {
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
    cellsToHighlight: cellsToHighlight;
}

interface MapDispatchToPropsTypes {
    increase: (value: increaseTypes) => void;
    highlight: (value: cellsToHighlight) => void;
    unHighlight: () => void;
}

function MainPage({
    items,
    table,
    cellsToHighlight,
    increase,
    highlight,
    amountObj,
    unHighlight,
}: IProps): React.ReactElement<IProps> {
    const tempArr: cellTypes[] = React.useMemo(
        () =>
            table
                .reduce((acc, tableEl) => acc.concat(tableEl.row), [])
                .map(el => ({...el, amount: amountObj[el.id]}))
                .sort((a, b) => a.amount - b.amount),
        [amountObj, table]
    );

    const inHoverCellHandle = React.useCallback(
        (e: React.MouseEvent) => {
            highlight(findClosestNumbersInTable(tempArr, e.currentTarget.id, items.X));
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
        <div>
            <div className={s.mainPage}>
                <Link to="/" className={s.title}>
                    MEM-CRAB React Test
                </Link>
                <div className={s.mpTableWrapper}>
                    <Table
                        table={table}
                        cellsHoHighlight={cellsToHighlight}
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
        </div>
    );
}

export default withStyles(s)(
    connect<MapStateToPropsTypes, MapDispatchToPropsTypes, IProps, stateTypes>(
        mapStateToProps,
        mapDispatchToProps
    )(MainPage)
);
