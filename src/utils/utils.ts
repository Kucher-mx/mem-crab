import {cellTypes, rowSumTypes} from "../typeScript/types";

export const getRandomInt = (): number => Math.floor(Math.random() * 899) + 100;

export const generateID = (): string => `_${Math.random().toString(36).substr(2, 9)}`;

export const addRow = (table: cellTypes[][], rowLength: number): cellTypes[][] => {
    const newTable: cellTypes[][] = [...table];
    newTable.push([]);

    // eslint-disable-next-line no-loops/no-loops
    for (let i = 0; i < rowLength; i++) {
        newTable[newTable.length - 1].push({
            id: generateID(),
            amount: getRandomInt(),
            isHighlited: false,
        });
    }

    return newTable;
};

export const calcColAverage = (M: number, N: number, table: cellTypes[][]): number[] => {
    const colInfoArr: number[] = [];
    // eslint-disable-next-line no-loops/no-loops
    for (let col = 0; col < N; col++) {
        let sumCol = 0;
        // eslint-disable-next-line no-loops/no-loops
        for (let row = 0; row < M; row++) {
            sumCol = sumCol + table[row][col].amount;
        }
        colInfoArr.push(Math.round(sumCol / M));
    }

    return colInfoArr;
};

export const calcRowSum = (M: number, N: number, table: cellTypes[][]): rowSumTypes[] => {
    const rowSumArr: rowSumTypes[] = [];
    const genSum = table
        .map(subArr => subArr.reduce((acc, item) => acc + item.amount, 0))
        .reduce((acc, item) => acc + item, 0);

    table.forEach(subArr => {
        const arrSum: number = subArr.reduce((acc, b: {amount: number}) => (acc + b.amount), 0);
        const persent = Number(((arrSum * 100) / genSum).toFixed(1));
        rowSumArr.push({rowSum: arrSum, rowPersent: persent, isHoveredSum: false, id: generateID()});
    });

    return rowSumArr;
};
