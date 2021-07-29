type valueTypes = {M: number; N: number; X: number};
type stateTypes = {
    M: number;
    N: number;
    X: number;
    table: cellTypes[][];
    rowSum: rowSumTypes[];
    colAverage: number[];
};
type cellTypes = {id: string; amount: number; isHighlited: boolean};
type actionTypes = {table: tableTypes[], consts: valueTypes}
type rowSumTypes = {rowSum: number, rowPersent: number, isHoveredSum: boolean, id: string}
type tableTypes = {id: string; row: cellTypes[]}

export type {actionTypes,cellTypes,rowSumTypes,stateTypes, tableTypes,valueTypes};
