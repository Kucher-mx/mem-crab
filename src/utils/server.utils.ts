import {valueTypes, tableTypes, cellTypes, increaseTypes, stateTypes} from "../typeScript/types";
import {calcColAverage, calcRowSum, generateID, getRandomInt} from "./utils";

export const generateTable = (
    values: valueTypes
): {table: tableTypes[]; consts: valueTypes; amountObj: increaseTypes} => {
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

export const genMatrix = (rows: number, cols: number): tableTypes[] => {
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

export const genInitialState = (values): stateTypes => {
    const {consts, table, amountObj} = generateTable(values);
    return {
        table,
        rowSum: calcRowSum(table, amountObj),
        colAverage: calcColAverage(consts.M, consts.N, table, amountObj),
        cellsToHighlight: {},
        M: consts.M,
        N: consts.N,
        X: consts.X,
        amountObj,
    };
};

export const renderFullPage = (html, preloadedState, styles) => {
    return `
    <!doctype html>
    <html>
      <head>
        <title>mem-crab ssr</title>
        <style>${[...styles].join("")}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
        </script>
        <script src="/static/bundle.client.js"></script>
      </body>
    </html>
    `;
};

const helpers = {
    genInitialState,
    renderFullPage,
    genMatrix,
    generateTable,
};

export default helpers;
