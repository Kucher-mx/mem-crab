import {ActionTypes} from "../actions/actionTypes";
import {cellTypes, stateTypes, tableTypes} from "../typeScript/types";
import {addRow, calcColAverage, calcRowSum} from "../utils/utils";

const initialState: stateTypes = {
    M: 0,
    N: 0,
    X: 0,
    table: [],
    rowSum: [],
    colAverage: [],
    elements: [],
};

const reducer = (
    // eslint-disable-next-line default-param-last
    state: stateTypes = initialState,
    actions:
        | {type: typeof ActionTypes.ADD_AMOUNT; value: string}
        | {type: typeof ActionTypes.HIGHLIGHT; value: string}
        | {type: typeof ActionTypes.UNHIGHLIGHT; value: string}
        | {type: typeof ActionTypes.SET_CONSTS; value: stateTypes}
        | {type: typeof ActionTypes.HIGHLIGHT_SUM; value: string}
        | {type: typeof ActionTypes.ADD_ROW; value: string}
        | {type: typeof ActionTypes.REMOVE_ROW}
        | {type: typeof ActionTypes.UNHIGHLIGHT_SUM}
) => {
    let stateModifications: {newTable: tableTypes[]} = {newTable: state.table};
    switch (actions.type) {
        case ActionTypes.ADD_AMOUNT:
            stateModifications.newTable = state.table.map((arr: tableTypes) => {
                arr.row.map((cell: cellTypes) => {
                    if (cell.id === actions.value) {
                        cell.amount++;
                    }
                    return cell;
                });
                return arr;
            });
            return {
                ...state,
                table: stateModifications.newTable,
                rowSum: calcRowSum(state.M, state.N, stateModifications.newTable),
                colAverage: calcColAverage(state.M, state.N, stateModifications.newTable),
                elements: stateModifications.newTable
                    .reduce((a: cellTypes[], b) => a.concat(b.row), [])
                    .sort((a, b) => a.amount - b.amount),
            };

        case ActionTypes.HIGHLIGHT:
            return {
                ...state,
                table: state.table.map(arr => {
                    arr.row.map(el => {
                        if (actions.value.includes(el.id)) {
                            el.isHighlighted = true;
                        }
                        return el;
                    });
                    return arr;
                }),
            };

        case ActionTypes.UNHIGHLIGHT:
            return {
                ...state,
                table: state.table.map(arr => {
                    arr.row.map(el => {
                        if (actions.value.includes(el.id)) {
                            el.isHighlighted = false;
                        }
                        return el;
                    });
                    return arr;
                }),
            };

        case ActionTypes.SET_CONSTS:
            return {
                ...state,
                table: actions.value.table,
                rowSum: actions.value.rowSum,
                colAverage: actions.value.colAverage,
                M: actions.value.M,
                N: actions.value.N,
                X: actions.value.X,
                elements: actions.value.elements,
            };

        case ActionTypes.ADD_ROW:
            stateModifications = addRow(state.table, state.N);
            return {
                ...state,
                table: stateModifications.newTable,
                M: Number(state.M) + 1,
                rowSum: calcRowSum(state.M, state.N, stateModifications.newTable),
                colAverage: calcColAverage(state.M, state.N, stateModifications.newTable),
                elements: stateModifications.newTable
                    .reduce((a: cellTypes[], b) => a.concat(b.row), [])
                    .sort((a, b) => a.amount - b.amount),
            };

        case ActionTypes.REMOVE_ROW:
            if (state.table.length === 1) {
                return {...state};
            }

            stateModifications.newTable = state.table.filter((_, idx) => idx < state.table.length - 1);

            return {
                ...state,
                M: state.M - 1,
                table: stateModifications.newTable,
                rowSum: calcRowSum(state.M, state.N, stateModifications.newTable),
                colAverage: calcColAverage(state.M - 1, state.N, stateModifications.newTable),
                elements: stateModifications.newTable
                    .reduce((a: cellTypes[], b) => a.concat(b.row), [])
                    .sort((a, b) => a.amount - b.amount),
            };

        case ActionTypes.HIGHLIGHT_SUM:
            return {
                ...state,
                rowSum: state.rowSum.map(item => {
                    if (item.id === actions.value) {
                        item.isHoveredSum = true;
                    }
                    return item;
                }),
            };

        case ActionTypes.UNHIGHLIGHT_SUM:
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
