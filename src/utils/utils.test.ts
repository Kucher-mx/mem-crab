import {increaseTypes, rowSumTypes, tableTypes} from "../typeScript/types";
import {generateID, getRandomInt, addRow, calcColAverage, calcRowSum, calcGenSum} from "./utils";

describe("testing generateID function: ", () => {
    test("function defined", () => {
        expect(generateID()).toBeDefined();
    });
    test("length of string", () => {
        expect(generateID()).toHaveLength(19);
    });
    test("function return string", () => {
        expect(typeof generateID()).toBe("string");
    });
});

describe("testing getRandomInt function: ", () => {
    test("function defined", () => {
        expect(getRandomInt()).toBeDefined();
    });
    test("function NOT return NAN", () => {
        expect(getRandomInt()).not.toBeNaN();
    });
    test("function return number", () => {
        expect(typeof getRandomInt()).toBe("number");
    });
    test("less than 1000", () => {
        expect(getRandomInt()).toBeLessThan(1000);
    });
    test("more than 100", () => {
        expect(getRandomInt()).toBeGreaterThan(100);
    });
});

describe("test utils functions: ", () => {
    let matrixData: tableTypes[], amountObj: increaseTypes;
    beforeAll(() => {
        amountObj = {
            cellId_1: 1,
            cellId_2: 2,
            cellId_3: 3,
            cellId_4: 4,
            cellId_5: 5,
            cellId_6: 6,
            cellId_7: 7,
            cellId_8: 8,
            cellId_9: 9,
        };
        matrixData = [
            {
                id: generateID(),
                row: [
                    {id: "cellId_1", rowId: "row_id_1"},
                    {id: "cellId_2", rowId: "row_id_2"},
                    {id: "cellId_3", rowId: "row_id_3"},
                ],
            },
            {
                id: generateID(),
                row: [
                    {id: "cellId_4", rowId: "row_id_4"},
                    {id: "cellId_5", rowId: "row_id_5"},
                    {id: "cellId_6", rowId: "row_id_6"},
                ],
            },
            {
                id: generateID(),
                row: [
                    {id: "cellId_7", rowId: "row_id_7"},
                    {id: "cellId_8", rowId: "row_id_8"},
                    {id: "cellId_9", rowId: "row_id_9"},
                ],
            },
        ];
    });

    describe("testing addRow function: ", () => {
        const cols: number = 3;

        test("function defined", () => {
            expect(addRow(matrixData, 3, amountObj)).toBeDefined();
        });

        test("function change amount of rows", () => {
            expect(addRow(matrixData, cols, amountObj).newTable.length).toBe(4);
        });

        test("function creates right amount of columns", () => {
            const {newTable} = addRow(matrixData, cols, amountObj);
            expect(newTable[newTable.length - 1].row.length).toBe(cols);
        });
    });

    describe("test calcColAverage function: ", () => {
        let calcColAvgResult: {amount: number; id: string}[];
        const cols: number = 3,
            rows: number = 3;
        beforeAll(() => {
            calcColAvgResult = calcColAverage(rows, cols, matrixData, amountObj);
        });

        test("function returns an array", () => {
            expect(Array.isArray(calcColAvgResult)).toBe(true);
        });

        test("function returns right amount of columns", () => {
            expect(calcColAvgResult.length).toBe(cols);
        });

        test("function right calculates average amount in the column", () => {
            expect(calcColAvgResult[0].amount).toBe(Math.round(12 / rows));
            expect(calcColAvgResult[1].amount).toBe(Math.round(15 / rows));
            expect(calcColAvgResult[2].amount).toBe(Math.round(18 / rows));
        });
    });

    describe("test calcRowSum function: ", () => {
        let genSum: number, calcRes: rowSumTypes[];
        const rows: number = 3;
        beforeAll(() => {
            genSum = calcGenSum(amountObj);
            calcRes = calcRowSum(matrixData, amountObj);
        });

        test("function returns an array", () => {
            expect(Array.isArray(calcRes)).toBe(true);
        });

        test("function returns right amount of rows", () => {
            expect(calcRes.length).toBe(rows);
        });

        test("function right calculates sum in the row", () => {
            expect(calcRes[0].rowSum).toBe(6);
            expect(calcRes[1].rowSum).toBe(15);
            expect(calcRes[2].rowSum).toBe(24);
        });

        test("function right calculates sum percent in the row", () => {
            expect(calcRes[0].rowPercent).toBe(Number(((calcRes[0].rowSum * 100) / genSum).toFixed(1)));
            expect(calcRes[1].rowPercent).toBe(Number(((calcRes[1].rowSum * 100) / genSum).toFixed(1)));
            expect(calcRes[2].rowPercent).toBe(Number(((calcRes[2].rowSum * 100) / genSum).toFixed(1)));
        });
    });

    describe("testing calcGenSum function: ", () => {
        let genSum: number;
        beforeAll(() => {
            genSum = calcGenSum(amountObj);
        });

        test("function defined", () => {
            expect(genSum).toBeDefined();
        });

        test("function return a number", () => {
            expect(typeof genSum).toBe("number");
        });

        test("function return correct result", () => {
            expect(genSum).toBe(45);
        });
    });
});
