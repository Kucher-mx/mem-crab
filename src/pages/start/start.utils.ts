import { cellTypes, tableTypes, valueTypes } from "../../typeScript/types"
import { generateID, getRandomInt } from "../../utils/utils";

export const generateTable = (values: valueTypes): {table: tableTypes[], consts: valueTypes} => {
    const {M, N} = values
    const stateSetUp: {table: tableTypes[], consts: valueTypes} = {
        table: genMatrix(M, N), consts: {M, N, X: values.X}
    }

    return stateSetUp
}

const genMatrix = (rows: number, cols: number): tableTypes[] => {
    const matrix =  Array.from({length: rows}, () => {
          const row = Array.from({length: cols}, () => {
              const cell = {
                  id: generateID(),
                  amount: getRandomInt(),
                  isHighlited: false,
              };
            return (cell)
          })
          return {id: generateID(), row}
        })
    return matrix
}