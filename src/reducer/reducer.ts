import types from "../actions/actionTypes";
import {actionTypes, cellTypes, rowSumTypes} from "../typeScript/types";
import {addRow, calcColAverage, calcRowSum} from "../utils/utils";

const initialState: {M: number; N: number; X: number; table: []; rowSum: rowSumTypes[]; colAverage: []} = {
    M: 0,
    N: 0,
    X: 0,
    table: [],
    rowSum: [],
    colAverage: [],
};

const reducer = (
    state: {
        M: number;
        N: number;
        X: number;
        table: cellTypes[][];
        rowSum: rowSumTypes[];
        colAverage: number[];
    } = initialState,
    actions: {type: string; value?: actionTypes; id?: string | string[]}
) => {
    switch (actions.type) {
        case types.ADD_AMOUNT:
            if (actions.value) {
                return {
                    ...state,
                    table: state.table.map((arr: cellTypes[]) => {
                        arr.map((cell: cellTypes) => {
                            if (cell.id === actions.id) {
                                cell.amount++;
                            }
                            return cell;
                        });
                        return arr;
                    }),
                    rowSum: calcRowSum(actions.value.consts.M, actions.value.consts.N, actions.value.table),
                    colAverage: calcColAverage(actions.value.consts.M, actions.value.consts.N, actions.value.table),
                };
            }
            return state;

        case types.HIGHLITE:
            return {
                ...state,
                table: state.table.map(arr => {
                    arr.map(el => {
                        if(actions.id?.includes(el.id)){
                            el.isHighlited = true;
                        }
                        return el;
                    });
                    return arr;
                }),
            };

        case types.UNHIGHLITE:
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

        case types.SET_CONSTS:
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

        case types.ADD_ROW:
            const addRowTable = addRow(state.table, state.N);

            return {
                ...state,
                table: addRowTable,
                M: Number(state.M) + 1,
                rowSum: calcRowSum(state.M, state.N, addRowTable),
                colAverage: calcColAverage(state.M, state.N, addRowTable),
            };

        case types.REMOVE_ROW:
            if (state.table.length === 1) {
                return {...state};
            }

            const removeTable = state.table.filter((_, idx) => idx < state.table.length - 1);

            return {
                ...state,
                M: state.M - 1,
                table: removeTable,
                rowSum: calcRowSum(state.M, state.N, removeTable),
                colAverage: calcColAverage(state.M - 1, state.N, removeTable),
            };

        case types.HIGHlITE_SUM:
            return {
                ...state,
                rowSum: state.rowSum.map(item => {
                    if (item.id === actions.id) {
                        item.isHoveredSum = true;
                    }
                    return item;
                }),
            };

        case types.UNHIGHlITE_SUM:
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
