import React, {Dispatch, FC, MouseEvent} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

import {ADD_AMOUNT, HIGHLIGHT, UNHIGHLIGHT} from "../../actions/action";
import BottomSidebar from "../../components/bottomSidebar/BottomSidebar.component";
import Buttons from "../../components/buttons/Buttons.component";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar.component";
import Table from "../../components/table/table.component";
import type {cellTypes, stateTypes, tableTypes, valueTypes} from "../../typeScript/types";

import "./main.styles.css";

interface IProps {
    items: valueTypes;
    table: tableTypes[];
    increase: (id: string) => void;
    highlight: (id: string[]) => void;
    unHighlight: (id: string[]) => void;
}

function MainPage({items, table, increase, highlight, unHighlight}: IProps): React.ReactElement<IProps> {
    const navigate = useNavigate();
    if (table.length === 0) {
        navigate("/");
    }

    const tempArr: cellTypes[] = React.useMemo(
        () => table.reduce((acc, tableEl) => acc.concat(tableEl.row), []).sort((a, b) => a.amount - b.amount),
        [table]
    );

    const inHoverCellHandle = React.useCallback(
        (e: MouseEvent) => {
            const cellsToHighlight: string[] = [];
            const hoverElementIdx = tempArr.findIndex(el => (e.currentTarget ? el.id === e.currentTarget.id : false));

            cellsToHighlight.push(tempArr[hoverElementIdx].id);

            let iterateLess = hoverElementIdx === 0 ? 0 : hoverElementIdx - 1;
            let iterateMany = hoverElementIdx === tempArr.length ? tempArr.length : hoverElementIdx + 1;

            // eslint-disable-next-line no-loops/no-loops
            while (cellsToHighlight.length <= items.X) {
                if (iterateLess === 0) {
                    cellsToHighlight.push(tempArr[iterateMany].id);
                    iterateMany += 1;
                    continue;
                }

                if (iterateMany === tempArr.length) {
                    cellsToHighlight.push(tempArr[iterateLess].id);
                    iterateLess -= 1;
                    continue;
                }

                const diffLess = Math.abs(tempArr[iterateLess].amount - tempArr[hoverElementIdx].amount);
                const diffMany = Math.abs(tempArr[iterateMany].amount - tempArr[hoverElementIdx].amount);

                if (diffLess < diffMany) {
                    cellsToHighlight.push(tempArr[iterateLess].id);
                    iterateLess - 1 === 0 ? (iterateLess = 0) : (iterateLess -= 1);
                    continue;
                } else {
                    cellsToHighlight.push(tempArr[iterateMany].id);
                    iterateMany + 1 === tempArr.length - 1 ? (iterateMany = tempArr.length - 1) : (iterateMany += 1);
                    continue;
                }
            }
            highlight(cellsToHighlight);
        },
        [highlight, items.X, tempArr]
    );

    const outHoverCellHandle = React.useCallback(
        (e: MouseEvent) => {
            const cellToUnhighlight = tempArr.filter(el => el.isHighlighted).map(el => el.id);

            unHighlight(cellToUnhighlight);
        },
        [tempArr, unHighlight]
    );

    return (
        <div className="main-page">
            <Link to="/" className="title">
                MEM-CRAB React Test
            </Link>
            <div className="table-wrapper">
                <Table table={table} hoverEnter={inHoverCellHandle} hoverOut={outHoverCellHandle} click={increase} />

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
    };
}

function mapDispatchToProps(dispatch: Dispatch<{type: string; id?: string}>) {
    return {
        increase: (id: string) => dispatch(ADD_AMOUNT(id)),
        highlight: (id: string[]) => dispatch(HIGHLIGHT(id)),
        unHighlight: (id: string[]) => dispatch(UNHIGHLIGHT(id)),
    };
}

interface MapStateToPropsTypes {
    items: {M: number; N: number; X: number};
    table: tableTypes[];
}

interface MapDispatchToPropsTypes {
    increase: (id: string) => void;
    highlight: (id: string[]) => void;
    unHighlight: (id: string[]) => void;
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes, IProps, stateTypes>(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
