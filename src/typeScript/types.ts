type valueTypes = {M: number; N: number; X: number};
type stateTypes = {
    M: number;
    N: number;
    X: number;
    table: tableTypes[];
    rowSum: rowSumTypes[];
    colAverage: {amount: number; id: string}[];
    elements: cellTypes[];
};
type cellTypes = {id: string; amount: number; isHighlighted: boolean};
type actionTypes = {table: tableTypes[]; consts: valueTypes; elements: cellTypes[]};
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

export type {actionTypes, ActionTypesType, cellTypes, rowSumTypes, stateTypes, tableTypes, valueTypes};
