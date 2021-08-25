import {findClosestNumbersInTable} from "./Main.utils";

describe("test findClosestNumbersInTable function: ", () => {
    let tempArr, findClosestResult;
    const elementId = "cellId_5",
        x = 3;

    beforeAll(() => {
        tempArr = [
            {id: "cellId_1", amount: 100, rowId: "rowId_1"},
            {id: "cellId_2", amount: 110, rowId: "rowId_1"},
            {id: "cellId_3", amount: 120, rowId: "rowId_1"},
            {id: "cellId_4", amount: 130, rowId: "rowId_2"},
            {id: "cellId_5", amount: 140, rowId: "rowId_2"},
            {id: "cellId_6", amount: 150, rowId: "rowId_2"},
            {id: "cellId_7", amount: 160, rowId: "rowId_3"},
            {id: "cellId_8", amount: 170, rowId: "rowId_3"},
            {id: "cellId_9", amount: 180, rowId: "rowId_3"},
        ];

        findClosestResult = findClosestNumbersInTable(tempArr, elementId, x);
    });

    test("function defined", () => {
        expect(findClosestResult).toBeDefined();
    });

    test("function return an array with correct length", () => {
        expect(Object.entries(findClosestResult).length).toBe(1);
    });

    test("function return an array of strings", () => {
        const keys = Object.keys(findClosestResult);
        expect(typeof findClosestResult[keys[0]]).toBe("object");
    });

    test("function returns proper ids to highlight", () => {
        const keys = Object.keys(findClosestResult);
        expect(Object.keys(findClosestResult[keys[0]])).toContain("cellId_4");
        expect(Object.keys(findClosestResult[keys[0]])).toContain("cellId_5");
        expect(Object.keys(findClosestResult[keys[0]])).toContain("cellId_6");
    });

    test("function choose proper amount of elements to highlight, X >= tempArr.length", () => {
        tempArr = [
            {id: "cellId_1", amount: 100, rowId: "rowId_1"},
            {id: "cellId_2", amount: 110, rowId: "rowId_1"},
            {id: "cellId_3", amount: 120, rowId: "rowId_1"},
        ];

        const findClosestResult = findClosestNumbersInTable(tempArr, "cellId_2", 4),
            rowKey = Object.keys(findClosestResult)[0],
            cellKeys = Object.keys(findClosestResult[rowKey]);
        expect(cellKeys).toContain("cellId_2");
        expect(cellKeys).toContain("cellId_1");
        expect(cellKeys).toContain("cellId_3");
    });
});
