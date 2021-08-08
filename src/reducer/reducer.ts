import {ActionTypes} from "../actions/actionTypes";
import {cellsToHighlight, cellTypes, increaseTypes, stateTypes, tableTypes} from "../typeScript/types";
import {addRow, calcColAverage, calcRowSum} from "../utils/utils";

const initialState: stateTypes = {
    M: 0,
    N: 0,
    X: 0,
    table: [],
    rowSum: [],
    colAverage: [],
    cellsToHighlight: {},
    amountObj: {},
};

const reducer = (
    // eslint-disable-next-line default-param-last
    state: stateTypes = initialState,
    actions:
        | {type: typeof ActionTypes.ADD_AMOUNT; value: increaseTypes}
        | {type: typeof ActionTypes.HIGHLIGHT; value: cellsToHighlight}
        | {type: typeof ActionTypes.UNHIGHLIGHT}
        | {type: typeof ActionTypes.SET_CONSTS; value: stateTypes}
        | {type: typeof ActionTypes.HIGHLIGHT_SUM; value: string}
        | {type: typeof ActionTypes.ADD_ROW; value: string}
        | {type: typeof ActionTypes.REMOVE_ROW}
        | {type: typeof ActionTypes.UNHIGHLIGHT_SUM}
) => {
    let stateModifications: {newTable: tableTypes[]} = {newTable: state.table};
    switch (actions.type) {
        case ActionTypes.ADD_AMOUNT:
            return {
                ...state,
                amountObj: actions.value,
                rowSum: calcRowSum(state.M, state.N, state.table, actions.value),
                colAverage: calcColAverage(state.M, state.N, stateModifications.newTable, actions.value),
            };

        case ActionTypes.HIGHLIGHT:
            return {
                ...state,
                cellsToHighlight: actions.value,
            };

        case ActionTypes.UNHIGHLIGHT:
            return {
                ...state,
                cellsToHighlight: {},
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
                amountObj: actions.value.amountObj,
            };

        case ActionTypes.ADD_ROW:
            stateModifications = addRow(state.table, state.N);
            return {
                ...state,
                table: stateModifications.newTable,
                M: Number(state.M) + 1,
                rowSum: calcRowSum(state.M, state.N, stateModifications.newTable, state.amountObj),
                colAverage: calcColAverage(state.M, state.N, stateModifications.newTable, state.amountObj),
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
                rowSum: calcRowSum(state.M, state.N, stateModifications.newTable, state.amountObj),
                colAverage: calcColAverage(state.M - 1, state.N, stateModifications.newTable, state.amountObj),
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
