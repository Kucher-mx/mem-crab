type valueTypes = {M: number; N: number; X: number};
type stateTypes = {
    M: number;
    N: number;
    X: number;
    table: {
        id: string;
        amount: number;
        isHighlited: boolean;
    }[][];
};
type cellTypes = {id: string; amount: number; isHighlited: boolean};
type actionTypes = {table: cellTypes[][], consts: valueTypes}
type rowSumTypes = {rowSum: number, rowPersent: number, isHoveredSum: boolean, id: string}

export type {actionTypes,cellTypes,rowSumTypes,stateTypes, valueTypes};
