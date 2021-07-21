import { cellTypes, valueTypes } from "../../typeScript/types"
import { generateID, getRandomInt } from "../../utils/utils";

export const generateTable = (values: valueTypes): {table: cellTypes[][], consts: valueTypes} => {
    const table: cellTypes[][] = []
    // eslint-disable-next-line no-loops/no-loops
    for (let i = 0; i < values.M; i++) {
        table[i] = [];
        // eslint-disable-next-line no-loops/no-loops
        for (let j = 0; j < values.N; j++) {
            const obj: cellTypes = {
                id: generateID(),
                amount: getRandomInt(),
                isHighlited: false,
            };
            table[i][j] = obj;
        }
    }

    const stateSetUp: {table: cellTypes[][], consts: valueTypes} = {
        table, consts: {M: values.M, N: values.N, X: values.X}
    }

    return stateSetUp
}