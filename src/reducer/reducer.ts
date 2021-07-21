import {actionTypes, cellTypes, rowSumTypes} from "../typeScript/types";
import {addRow, calcColAverage, calcRowSum} from "../utils/utils";

const initialState: {
    M: number;
    N: number;
    X: number;
    table: cellTypes[][];
    rowSum: rowSumTypes[];
    colAverage: number[];
} = {
    M: 0,
    N: 0,
    X: 0,
    table: [],
    rowSum: [],
    colAverage: [],
};

const reducer = (
    // eslint-disable-next-line default-param-last
    state: {
        M: number;
        N: number;
        X: number;
        table: cellTypes[][];
        rowSum: rowSumTypes[];
        colAverage: number[];
    } = initialState,
    actions:
        | {type: "ADD_AMOUNT"; value: string}
        | {type: "HIGHLITE"; value: string}
        | {type: "UNHIGHLITE"}
        | {type: "SET_CONSTS"; value: actionTypes}
        | {type: "HIGHlITE_SUM"; value: string}
        | {type: "ADD_ROW"; value: string}
        | {type: "REMOVE_ROW"}
        | {type: "UNHIGHlITE_SUM"}
) => {
    let stateModifications: cellTypes[][] = state.table;

    switch (actions.type) {
        case "ADD_AMOUNT":
            stateModifications = state.table.map((arr: cellTypes[]) => {
                arr.map((cell: cellTypes) => {
                    if (cell.id === actions.value) {
                        cell.amount++;
                    }
                    return cell;
                });
                return arr;
            });
            return {
                ...state,
                table: stateModifications,
                rowSum: calcRowSum(state.M, state.N, stateModifications),
                colAverage: calcColAverage(state.M, state.N, stateModifications),
            };

        case "HIGHLITE":
            return {
                ...state,
                table: state.table.map(arr => {
                    arr.map(el => {
                        if (actions.value.includes(el.id)) {
                            el.isHighlited = true;
                        }
                        return el;
                    });
                    return arr;
                }),
            };

        case "UNHIGHLITE":
            return {
                ...state,
                table: state.table.map((arr: cellTypes[]) => {
                    arr.map((el: cellTypes) => {
                        if (el.isHighlited) {
                            el.isHighlited = false;
                        }
                        return el;
                    });
                    return arr;
                }),
            };

        case "SET_CONSTS":
            if (actions.value) {
                return {
                    ...state,
                    table: actions.value.table,
                    rowSum: calcRowSum(actions.value.consts.M, actions.value.consts.N, actions.value.table),
                    colAverage: calcColAverage(actions.value.consts.M, actions.value.consts.N, actions.value.table),
                    M: actions.value.consts.M,
                    N: actions.value.consts.N,
                    X: actions.value.consts.X,
                };
            }
            return state;

        case "ADD_ROW":
            stateModifications = addRow(state.table, state.N);

            return {
                ...state,
                table: stateModifications,
                M: Number(state.M) + 1,
                rowSum: calcRowSum(state.M, state.N, stateModifications),
                colAverage: calcColAverage(state.M, state.N, stateModifications),
            };

        case "REMOVE_ROW":
            if (state.table.length === 1) {
                return {...state};
            }

            stateModifications = state.table.filter((_, idx) => idx < state.table.length - 1);

            return {
                ...state,
                M: state.M - 1,
                table: stateModifications,
                rowSum: calcRowSum(state.M, state.N, stateModifications),
                colAverage: calcColAverage(state.M - 1, state.N, stateModifications),
            };

        case "HIGHlITE_SUM":
            return {
                ...state,
                rowSum: state.rowSum.map(item => {
                    if (item.id === actions.value) {
                        item.isHoveredSum = true;
                    }
                    return item;
                }),
            };

        case "UNHIGHlITE_SUM":
            return {
                ...state,
                rowSum: state.rowSum.map(item => {
                    item.isHoveredSum = false;
                    return item;
                }),
            };

        default:
            return state;
    }
};

export default reducer;
