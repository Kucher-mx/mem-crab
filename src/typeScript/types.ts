type valueTypes = {M: number; N: number; X: number};
type increaseTypes = {[id: string]: number};
type stateTypes = {
    M: number;
    N: number;
    X: number;
    table: tableTypes[];
    rowSum: rowSumTypes[];
    colAverage: {amount: number; id: string}[];
    cellsToHighlight: cellsToHighlight;
    amountObj: increaseTypes;
};
type cellsToHighlight = {rowId?: {cellId: boolean}};
type cellTypes = {id: string; amount?: number; rowId: string};
type actionTypes = {table: tableTypes[]; consts: valueTypes};
type rowSumTypes = {rowSum: number; rowPercent: number; isHoveredSum: boolean; id: string};
type tableTypes = {id: string; row: cellTypes[]};
type ActionTypesType = {
    ADD_AMOUNT: string;
    HIGHLIGHT: string;
    UNHIGHLIGHT: string;
    SET_CONSTS: string;
    ADD_ROW: string;
    REMOVE_ROW: string;
    HIGHLIGHT_SUM: string;
    UNHIGHLIGHT_SUM: string;
};

export type {
    actionTypes,
    ActionTypesType,
    cellsToHighlight,
    cellTypes,
    increaseTypes,
    rowSumTypes,
    stateTypes,
    tableTypes,
    valueTypes,
};
