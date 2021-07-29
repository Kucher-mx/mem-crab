import React, {Dispatch, FC, MouseEvent} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

import {ADD_AMOUNT, HIGHLITE, UNHIGHLITE} from "../../actions/action";
import BottomSidebar from "../../components/bottomSidebar/BottomSidebar.component";
import Buttons from "../../components/buttons/Buttons.component";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar.component";
import Table from "../../components/table/table.component";
import type {cellTypes, stateTypes, tableTypes, valueTypes} from "../../typeScript/types";

import "./main.styles.css";

interface IMain {
    items: valueTypes;
    table: tableTypes[];
    increase: (id: string) => void;
    highlite: (id: string[]) => void;
    unHighlite: () => void;
}

function MainPage({items, table, increase, highlite, unHighlite}: IMain) {
    const navigate = useNavigate();
    if (table.length === 0) {
        navigate("/");
    }

    const inHoverCellHandle = (e: MouseEvent) => {
        const cellsToHighlite: string[] = [];
        let tempArr: cellTypes[] = [];

        table.forEach(({row}) => {
            tempArr = tempArr.concat(row);
        });
        tempArr.sort((a, b) => a.amount - b.amount);

        const hoverElementIdx = tempArr.findIndex(el => (e.currentTarget ? el.id === e.currentTarget.id : false));

        cellsToHighlite.push(tempArr[hoverElementIdx].id);

        let iterateLess = hoverElementIdx === 0 ? 0 : hoverElementIdx - 1;
        let iterateMany = hoverElementIdx === tempArr.length ? tempArr.length : hoverElementIdx + 1;

        // eslint-disable-next-line no-loops/no-loops
        while (cellsToHighlite.length <= items.X) {
            if (iterateLess === 0) {
                cellsToHighlite.push(tempArr[iterateMany].id);
                iterateMany += 1;
                continue;
            }

            if (iterateMany === tempArr.length) {
                cellsToHighlite.push(tempArr[iterateLess].id);
                iterateLess -= 1;
                continue;
            }

            const diffLess = Math.abs(tempArr[iterateLess].amount - tempArr[hoverElementIdx].amount);
            const diffMany = Math.abs(tempArr[iterateMany].amount - tempArr[hoverElementIdx].amount);

            if (diffLess < diffMany) {
                cellsToHighlite.push(tempArr[iterateLess].id);
                iterateLess - 1 === 0 ? (iterateLess = 0) : (iterateLess -= 1);
                continue;
            } else {
                cellsToHighlite.push(tempArr[iterateMany].id);
                iterateMany + 1 === tempArr.length - 1 ? (iterateMany = tempArr.length - 1) : (iterateMany += 1);
                continue;
            }
        }
        highlite(cellsToHighlite);
    };

    const outHoverCellHandle = () => {
        unHighlite();
    };

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

function mapStateToProps(state: stateTypes, ownprops: IMain) {
    return {
        items: {M: state.M, N: state.N, X: state.X},
        table: state.table,
    };
}

function mapDispatchToProps(dispatch: Dispatch<{type: string; id?: string}>) {
    return {
        increase: (id: string) => dispatch(ADD_AMOUNT(id)),
        highlite: (id: string[]) => dispatch(HIGHLITE(id)),
        unHighlite: () => dispatch(UNHIGHLITE()),
    };
}

interface MapStateToPropsTypes {
    items: {M: number; N: number; X: number};
    table: tableTypes[];
}

interface MapDispatchToPropsTypes {
    increase: (id: string) => void;
    highlite: (id: string[]) => void;
    unHighlite: () => void;
}

// export default withRouter<RouteComponentProps<{}>, any>(connect<MapStateToPropsTypes, MapDispatchToPropsTypes, IMain, stateTypes>(mapStateToProps, mapDispatchToProps)(MainPage));

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes, IMain, stateTypes>(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
