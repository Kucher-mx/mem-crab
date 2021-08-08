import {cellsToHighlight, increaseTypes, rowSumTypes, tableTypes} from "../typeScript/types";

export const getRandomInt = (): number => Math.floor(Math.random() * 899) + 100;

export const generateID = (): string =>
    `_${Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9)}`;

export const addRow = (
    table: tableTypes[],
    rowLength: number,
    amountObj: increaseTypes
): {newTable: tableTypes[]; newAmountObj: increaseTypes} => {
    let newAmountObj = {...amountObj};
    const newTable: tableTypes[] = [...table];
    const rowId = generateID();

    const rowValues = Array.from({length: rowLength}, () => {
        const cellInfo = {id: generateID(), amount: getRandomInt()};
        newAmountObj = {...newAmountObj, [cellInfo.id]: cellInfo.amount};
        return {...cellInfo, rowId};
    });

    newTable.push({id: rowId, row: rowValues});

    return {newTable, newAmountObj};
};

export const removeRow = (table: tableTypes[]): {newTable: tableTypes[]; newAmountObj: increaseTypes} => {
    const newTable: tableTypes[] = [...table].filter((_, idx) => idx < table.length - 1);
    const newAmountObj = newTable.reduce((outerAcc, b) => {
        const tempArr = [].concat(b.row);
        return {...outerAcc, ...tempArr.reduce((acc, elItem) => ({...acc, [elItem.id]: getRandomInt()}), {})};
    }, {});

    return {newTable, newAmountObj};
};

export const calcColAverage = (
    M: number,
    N: number,
    table: tableTypes[],
    amountObj: increaseTypes
): {amount: number; id: string}[] => {
    const colInfoArr: {amount: number; id: string}[] = table
        .reduce(
            (a, b) => {
                b.row.forEach((el, i) => {
                    a[i].amount += amountObj[el.id];
                });
                return a;
            },
            Array.from({length: N}, () => ({amount: 0, id: generateID()}))
        )
        .map(el => ({...el, amount: Math.round(el.amount / M)}));

    return colInfoArr;
};

export const calcRowSum = (M: number, N: number, table: tableTypes[], amountObj: increaseTypes): rowSumTypes[] => {
    const rowSumArr: rowSumTypes[] = [];
    const genSum = Object.values(amountObj).reduce((acc, cellValue) => acc + cellValue, 0);

    table.forEach(({row}) => {
        const arrSum: number = row.reduce((acc, b: {id: string}) => acc + amountObj[b.id], 0);
        const percent = Number(((arrSum * 100) / genSum).toFixed(1));
        rowSumArr.push({rowSum: arrSum, rowPercent: percent, isHoveredSum: false, id: generateID()});
    });

    return rowSumArr;
};
