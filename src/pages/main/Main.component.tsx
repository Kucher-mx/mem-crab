import React, {BaseSyntheticEvent} from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {Link} from "react-router-dom";

import {ADD_AMOUNT, HIGHLITE, UNHIGHLITE} from "../../actions/action";
import BottomSidebar from "../../components/bottomSidebar/BottomSidebar.component";
import Buttons from "../../components/buttons/Buttons.component";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar.component";
import type {cellTypes, valueTypes} from "../../typeScript/types";

import "./main.styles.css";

function MainPage({
    items,
    table,
    increase,
    history,
    highlite,
    unHighlite,
}: {
    items: valueTypes;
    table: {id: string; amount: number; isHighlited: boolean}[][];
    history: RouteComponentProps["history"];
    increase: (id: string) => {};
    highlite: (id: string) => {};
    unHighlite: () => {};
}) {
    if (table.length === 0) {
        history.push("/");
    }

    const inHoverCellHandle = (e: BaseSyntheticEvent) => {
        const cellsToHighlite: cellTypes[] = [];
        let tempArr: cellTypes[] = [];

        table.forEach((subArr: cellTypes[]) => {
            tempArr = tempArr.concat(subArr);
        });
        tempArr.sort((a, b) => a.amount - b.amount);

        const hoverElementIdx = tempArr.findIndex(el => (e.target ? el.id === e.target.id : false));

        cellsToHighlite.push(tempArr[hoverElementIdx]);

        let iterateLess = hoverElementIdx === 0 ? 0 : hoverElementIdx - 1;
        let iterateMany = hoverElementIdx === tempArr.length ? tempArr.length : hoverElementIdx + 1;

        while (cellsToHighlite.length <= items.X) {
            if (iterateLess === 0) {
                cellsToHighlite.push(tempArr[iterateMany]);
                iterateMany += 1;
                continue;
            }

            if (iterateMany === tempArr.length) {
                cellsToHighlite.push(tempArr[iterateLess]);
                iterateLess -= 1;
                continue;
            }

            const diffLess = Math.abs(tempArr[iterateLess].amount - tempArr[hoverElementIdx].amount);
            const diffMany = Math.abs(tempArr[iterateMany].amount - tempArr[hoverElementIdx].amount);

            if (diffLess < diffMany) {
                cellsToHighlite.push(tempArr[iterateLess]);
                iterateLess - 1 === 0 ? (iterateLess = 0) : (iterateLess -= 1);
                continue;
            } else {
                cellsToHighlite.push(tempArr[iterateMany]);
                iterateMany + 1 === tempArr.length - 1 ? (iterateMany = tempArr.length - 1) : (iterateMany += 1);

                continue;
            }
        }

        cellsToHighlite.forEach(el => {
            highlite(el.id);
        });
    };

    const outHoverCellHandle = () => {
        unHighlite();
    };

    const renderTableCells = () =>
        table.map((collumn: cellTypes[]) => (
            <tr key={`_C${Math.random().toString(36).substr(2, 7)}`}>
                {collumn.map(({id, amount, isHighlited}: cellTypes) => {
                    const classes = [];
                    if (isHighlited) {
                        classes.push("highlite");
                    }
                    return (
                        <td
                            className={classes.join(" ")}
                            onClick={() => increase(id)}
                            key={id + Math.random().toString(36).substr(2, 9)}
                            id={id}
                            onMouseEnter={e => {
                                inHoverCellHandle(e);
                            }}
                            onMouseLeave={outHoverCellHandle}
                        >
                            {amount}
                        </td>
                    );
                })}
            </tr>
        ));

    return (
        <div className="main-page">
            <Link to="/" className="title">
                MEM-CRAB React Test
            </Link>
            <div className="table-wrapper">
                <table className="table">
                    <tbody>{renderTableCells()}</tbody>
                </table>
                <LeftSidebar />
            </div>
            <BottomSidebar />

            <Buttons />
        </div>
    );
}

function mapStateToProps(state: {
    M: number;
    N: number;
    X: number;
    table: cellTypes[][];
}) {
    return {
        items: {M: state.M, N: state.N, X: state.X},
        table: state.table,
    };
}

function mapDispatchToProps(dispatch: (arg0: {type: string; value?: String}) => {}) {
    return {
        increase: (id: String) => dispatch(ADD_AMOUNT(id)),
        highlite: (id: String) => dispatch(HIGHLITE(id)),
        unHighlite: () => dispatch(UNHIGHLITE()),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));