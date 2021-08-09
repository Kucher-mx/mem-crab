import {tableTypes} from "../typeScript/types";
import helpers, {generateTable, genMatrix, genInitialState, renderFullPage} from "./server.utils";

describe("test genMatrix function: ", () => {
    const rows: number = 3,
        cols: number = 4;

    test("function defined", () => {
        expect(genMatrix(rows, cols)).toBeDefined();
    });

    test("function returns an array", () => {
        expect(Array.isArray(genMatrix(rows, cols))).toBe(true);
    });

    describe("test cols and rows amount: ", () => {
        let matrix: tableTypes[];
        beforeAll(() => {
            matrix = genMatrix(rows, cols);
        });

        test("function correct number of rows", () => {
            expect(matrix.length).toBe(rows);
        });

        test("function correct number of cols", () => {
            expect(matrix[0].row.length).toBe(cols);
            expect(matrix[1].row.length).toBe(cols);
            expect(matrix[2].row.length).toBe(cols);
        });
    });
});

describe("test generateTable function: ", () => {
    const values = {M: 3, N: 4, X: 2};

    test("function defined", () => {
        expect(generateTable(values)).toBeDefined();
    });

    test("function returns object", () => {
        expect(typeof generateTable(values)).toBe("object");
    });

    describe("generateTable return correct table", () => {
        test("table row's number correct", () => {
            expect(generateTable(values).table.length).toBe(values.M);
        });

        test("table col's number correct", () => {
            expect(generateTable(values).table[0].row.length).toBe(values.N);
            expect(generateTable(values).table[1].row.length).toBe(values.N);
            expect(generateTable(values).table[2].row.length).toBe(values.N);
        });
    });

    describe("generateTable return correct amount object", () => {
        test("amount object has correct length", () => {
            expect(Object.values(generateTable(values).amountObj).length).toBe(values.N * values.M);
        });

        test("amount object is an object", () => {
            expect(typeof generateTable(values)).toBe("object");
        });
    });

    test("generateTable return correct values", () => {
        expect(generateTable(values).consts.M).toBe(values.M);
        expect(generateTable(values).consts.N).toBe(values.N);
        expect(generateTable(values).consts.X).toBe(values.X);
    });
});

describe("test renderFullPage function: ", () => {
    const html = `<div>i'm html</div>`,
        preloadedState = {},
        styles = `display: flex`;

    test("function defined", () => {
        expect(renderFullPage(html, preloadedState, styles)).toBeDefined();
    });
    test("return string", () => {
        expect(typeof renderFullPage(html, preloadedState, styles)).toBe("string");
    });
    test("string matches with html template", () => {
        expect(renderFullPage(html, preloadedState, styles)).toContain("<!doctype html>");
    });
});

describe("test genInitialState function: ", () => {
    const values = {M: 2, N: 3, X: 2};

    helpers.generateTable = jest.fn().mockReturnValue({
        values,
        table: [
            {
                id: "row_id_1",
                row: [
                    {id: "el_id_1", rowId: "row_id_1"},
                    {id: "el_id_2", rowId: "row_id_1"},
                    {id: "el_id_3", rowId: "row_id_1"},
                ],
            },
            {
                id: "row_id_2",
                row: [
                    {id: "el_id_4", rowId: "row_id_2"},
                    {id: "el_id_5", rowId: "row_id_2"},
                    {id: "el_id_6", rowId: "row_id_2"},
                ],
            },
        ],
        consts: {M: 2, N: 3, X: 2},
        amountObj: {
            el_id_1: 1,
            el_id_2: 2,
            el_id_3: 3,
            el_id_4: 4,
            el_id_5: 5,
            el_id_6: 6,
        },
    });

    test("return correct values", () => {
        const genInitialStateRes = genInitialState(values);

        expect(genInitialStateRes.M).toBe(values.M);
        expect(genInitialStateRes.N).toBe(values.N);
        expect(genInitialStateRes.X).toBe(values.X);

        expect(genInitialStateRes.colAverage.length).toBe(values.N);
        expect(genInitialStateRes.rowSum.length).toBe(values.M);
        expect(Object.values(genInitialStateRes.amountObj).length).toBe(values.M * values.N);

        expect(genInitialStateRes.table.length).toBe(values.M);
    });
});
