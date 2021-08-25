import {ActionTypes} from "../actions/actionTypes";
import {cellsToHighlight, cellTypes, increaseTypes, stateTypes, tableTypes} from "../typeScript/types";
import {addRow, calcColAverage, calcRowSum, removeRow} from "../utils/utils";

const reducer = (
    state: stateTypes,
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
    let stateModifications: {newTable: tableTypes[]; newAmountObj?: increaseTypes} = {newTable: state.table};
    switch (actions.type) {
        case ActionTypes.ADD_AMOUNT:
            return {
                ...state,
                amountObj: actions.value,
                rowSum: calcRowSum(state.table, actions.value),
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
                cellsToHighlight: actions.value.cellsToHighlight,
                M: actions.value.M,
                N: actions.value.N,
                X: actions.value.X,
                amountObj: actions.value.amountObj,
            };

        case ActionTypes.ADD_ROW:
            stateModifications = addRow(state.table, state.N, state.amountObj);
            return {
                ...state,
                table: stateModifications.newTable,
                amountObj: stateModifications.newAmountObj,
                M: Number(state.M) + 1,
                rowSum: calcRowSum(stateModifications.newTable, stateModifications.newAmountObj),
                colAverage: calcColAverage(
                    state.M,
                    state.N,
                    stateModifications.newTable,
                    stateModifications.newAmountObj
                ),
            };

        case ActionTypes.REMOVE_ROW:
            if (state.table.length === 1) {
                return {...state};
            }

            stateModifications = removeRow(state.table);

            return {
                ...state,
                M: state.M - 1,
                table: stateModifications.newTable,
                amountObj: stateModifications.newAmountObj,
                rowSum: calcRowSum(stateModifications.newTable, stateModifications.newAmountObj),
                colAverage: calcColAverage(
                    state.M - 1,
                    state.N,
                    stateModifications.newTable,
                    stateModifications.newAmountObj
                ),
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
