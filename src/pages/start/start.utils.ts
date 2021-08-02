import {cellTypes, stateTypes, tableTypes, valueTypes} from "../../typeScript/types";
import {calcColAverage, calcRowSum, generateID, getRandomInt} from "../../utils/utils";

const generateTable = (values: valueTypes): {table: tableTypes[]; consts: valueTypes; elements: cellTypes[]} => {
    const {M, N, X} = values;
    const table = genMatrix(M, N);
    const elements = table.reduce((a, b) => a.concat(b.row), []).sort((a, b) => a.amount - b.amount);
    const stateSetUp: {table: tableTypes[]; consts: valueTypes; elements: cellTypes[]} = {
        table,
        consts: {M, N, X},
        elements,
    };

    return stateSetUp;
};

const genMatrix = (rows: number, cols: number): tableTypes[] => {
    const matrix = Array.from({length: rows}, () => {
        const row = Array.from({length: cols}, () => {
            const cell = {
                id: generateID(),
                amount: getRandomInt(),
                isHighlighted: false,
            };
            return cell;
        });
        return {id: generateID(), row};
    });
    return matrix;
};

export const genState = (values): stateTypes => {
    const {consts, table, elements} = generateTable(values);
    return {
        table,
        rowSum: calcRowSum(consts.M, consts.N, table),
        colAverage: calcColAverage(consts.M, consts.N, table),
        M: consts.M,
        N: consts.N,
        X: consts.X,
        elements,
    };
};
