import {rowSumTypes, tableTypes} from "../typeScript/types";

export const getRandomInt = (): number => Math.floor(Math.random() * 899) + 100;

export const generateID = (): string =>
    `_${Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9)}`;

export const addRow = (table: tableTypes[], rowLength: number): {newTable: tableTypes[]} => {
    const newTable: tableTypes[] = [...table];
    const rowValues = Array.from({length: rowLength}, () => ({
        id: generateID(),
        amount: getRandomInt(),
        isHighlighted: false,
    }));
    newTable.push({id: generateID(), row: rowValues});

    return {newTable};
};

export const calcColAverage = (M: number, N: number, table: tableTypes[]): {amount: number; id: string}[] => {
    const colInfoArr: {amount: number; id: string}[] = table
        .reduce(
            (a, b) => {
                b.row.forEach((el, i) => {
                    a[i].amount += el.amount;
                });
                return a;
            },
            Array.from({length: N}, () => ({amount: 0, id: generateID()}))
        )
        .map(el => ({...el, amount: Math.round(el.amount / M)}));

    return colInfoArr;
};

export const calcRowSum = (M: number, N: number, table: tableTypes[]): rowSumTypes[] => {
    const rowSumArr: rowSumTypes[] = [];
    const genSum = table
        .map(({row}) => row.reduce((acc, item) => acc + item.amount, 0))
        .reduce((acc, item) => acc + item, 0);

    table.forEach(({row}) => {
        const arrSum: number = row.reduce((acc, b: {amount: number}) => acc + b.amount, 0);
        const percent = Number(((arrSum * 100) / genSum).toFixed(1));
        rowSumArr.push({rowSum: arrSum, rowPercent: percent, isHoveredSum: false, id: generateID()});
    });

    return rowSumArr;
};
