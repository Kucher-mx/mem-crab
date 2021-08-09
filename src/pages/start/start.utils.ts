import {increaseTypes, stateTypes, tableTypes, valueTypes} from "../../typeScript/types";
import {calcColAverage, calcRowSum, generateID, getRandomInt} from "../../utils/utils";

const generateTable = (values: valueTypes): {table: tableTypes[]; consts: valueTypes; amountObj: increaseTypes} => {
    const {M, N, X} = values;
    const table = genMatrix(M, N);
    const amountObj = table.reduce((outerAcc, b) => {
        const tempArr = [].concat(b.row);
        return {...outerAcc, ...tempArr.reduce((acc, elItem) => ({...acc, [elItem.id]: getRandomInt()}), {})};
    }, {});
    const stateSetUp: {table: tableTypes[]; consts: valueTypes; amountObj: increaseTypes} = {
        table,
        consts: {M, N, X},
        amountObj,
    };

    return stateSetUp;
};

const genMatrix = (rows: number, cols: number): tableTypes[] => {
    const matrix = Array.from({length: rows}, () => {
        const rowId = generateID();
        const row = Array.from({length: cols}, () => {
            const cell = {
                id: generateID(),
                rowId,
            };
            return cell;
        });
        return {id: rowId, row};
    });
    return matrix;
};

export const genState = (values): stateTypes => {
    const {consts, table, amountObj} = generateTable(values);
    return {
        table,
        rowSum: calcRowSum(consts.M, consts.N, table, amountObj),
        colAverage: calcColAverage(consts.M, consts.N, table, amountObj),
        cellsToHighlight: {},
        M: consts.M,
        N: consts.N,
        X: consts.X,
        amountObj,
    };
};
