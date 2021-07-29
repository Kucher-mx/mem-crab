// import {rowSumTypes, tableTypes} from "../typeScript/types";

// export const getRandomInt = (): number => Math.floor(Math.random() * 899) + 100;

// export const generateID = (): string => `_${Math.random().toString(36).substr(2, 9)}`;

// export const addRow = (table: tableTypes[], rowLength: number): tableTypes[] => {
//     const newTable: tableTypes[] = [...table];
//     newTable.push({
//         id: generateID(),
//         row: Array.from({length: rowLength}, () => ({
//             id: generateID(),
//             amount: getRandomInt(),
//             isHighlited: false,
//         })),
//     });

//     // eslint-disable-next-line no-loops/no-loops
//     // for (let i = 0; i < rowLength; i++) {
//     //     newTable[newTable.length - 1].row.push({
//     //         id: generateID(),
//     //         amount: getRandomInt(),
//     //         isHighlited: false,
//     //     });
//     // }

//     // Array.from({length: rowLength}, () => ({
//     //     id: generateID(),
//     //     amount: getRandomInt(),
//     //     isHighlited: false,
//     // }));

//     return newTable;
// };

// export const calcColAverage = (M: number, N: number, table: tableTypes[]): {id: string; amount: number}[] => {
//     const colsAvg = table
//         .reduce(
//             (a, b) => {
//                 b.row.forEach((el, i) => {
//                     a[i].amount += el.amount;
//                 });
//                 return a;
//             },
//             Array.from({length: N}, () => ({amount: 0, id: generateID()}))
//         )
//         .map(el => ({...el, amount: Math.round(el.amount / M)}));
//     return colsAvg;
// };

// export const calcRowSum = (M: number, N: number, table: tableTypes[]): rowSumTypes[] => {
//     const rowSumArr: rowSumTypes[] = [];
//     const genSum = table
//         .map(subArr => subArr.row.reduce((acc, item) => acc + item.amount, 0))
//         .reduce((acc, item) => acc + item, 0);

//     table.forEach(subArr => {
//         const arrSum: number = subArr.row.reduce((acc, b: {amount: number}) => acc + b.amount, 0);
//         const persent = Number(((arrSum * 100) / genSum).toFixed(1));
//         rowSumArr.push({rowSum: arrSum, rowPersent: persent, isHoveredSum: false, id: generateID()});
//     });

//     return rowSumArr;
// };


import {rowSumTypes, tableTypes} from "../typeScript/types";

export const getRandomInt = (): number => Math.floor(Math.random() * 899) + 100;

export const generateID = (): string =>
    `_${Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9)}`;

export const addRow = (
    table: tableTypes[],
    rowLength: number
): {newTable: tableTypes[]} => {
    const newTable: tableTypes[] = [...table];
    const rowValues = Array.from({length: rowLength}, () => ({
        id: generateID(),
        amount: getRandomInt(),
        isHighlited: false,
    }))
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
        const persent = Number(((arrSum * 100) / genSum).toFixed(1));
        rowSumArr.push({rowSum: arrSum, rowPersent: persent, isHoveredSum: false, id: generateID()});
    });

    return rowSumArr;
};
