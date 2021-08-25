import {cellsToHighlight, cellTypes} from "../../typeScript/types";

export const findClosestNumbersInTable = (tempArr: cellTypes[], elId: string, X: number): cellsToHighlight => {
    const hoverElementIdx = tempArr.findIndex(el => el.id === elId);

    const mappedArr = tempArr.map(cell => ({
        ...cell,
        amount: Math.abs(cell.amount - tempArr[hoverElementIdx].amount),
    }));

    const hoveredStart = Math.max(0, hoverElementIdx - X);
    const hoveredEnd = Math.min(mappedArr.length, X * 2 + 1 + hoveredStart);

    const splicedArr = mappedArr
        .slice(hoveredStart, hoveredEnd)
        // .filter((_, idx) => idx >= hoveredStart && idx <= hoveredEnd)
        .sort((a, b) => a.amount - b.amount)
        .slice(0, X);

    const objToHighlight = splicedArr
        .map(cell => ({cellId: cell.id, rowId: cell.rowId}))
        .reduce((acc, {rowId, cellId}) => {
            if (!acc[rowId]) {
                acc[rowId] = {};
                acc[rowId][cellId] = true;
            } else {
                acc[rowId][cellId] = true;
            }
            return acc;
        }, {});

    return objToHighlight;
};
