import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import {act as actUtils} from "react-dom/test-utils";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer/reducer";
import {create, act} from "react-test-renderer";
import {stateTypes} from "./typeScript/types";
import StyleContext from "isomorphic-style-loader/StyleContext";
import App from "./App";
import {MemoryRouter} from "react-router-dom";

let container, store, component, createComponent, renderComponent;
const insertCss = (...styles) => {
    return {};
};

beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
});

describe("testing app component: ", () => {
    let preloadedState: stateTypes;
    beforeAll(() => {
        global.fetch = jest.fn().mockImplementation(
            () =>
                new Promise(resolve => {
                    resolve({
                        json: () => ({
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
                            cellsToHighlight: {},
                            amountObj: {
                                el_id_1: 1,
                                el_id_2: 2,
                                el_id_3: 3,
                                el_id_4: 4,
                                el_id_5: 5,
                                el_id_6: 6,
                            },
                            rowSum: [
                                {
                                    rowSum: 6,
                                    rowPercent: 28.6,
                                    isHoveredSum: false,
                                    id: "rowSum_id_1",
                                },
                                {
                                    rowSum: 15,
                                    rowPercent: 71.4,
                                    isHoveredSum: false,
                                    id: "rowSum_id_2",
                                },
                            ],
                            colAverage: [
                                {amount: 3, id: "colSum_id_1"},
                                {amount: 4, id: "colSum_id_2"},
                                {amount: 5, id: "colSum_id_3"},
                            ],
                            M: 2,
                            N: 3,
                            X: 2,
                        }),
                    });
                })
        );
    });
    afterAll(() => {
        //@ts-ignore
        global.fetch.mockClear();
        delete global.fetch;
    });

    beforeEach(() => {
        preloadedState = {
            table: [],
            rowSum: [],
            colAverage: [],
            M: null,
            N: null,
            X: null,
            amountObj: {},
            cellsToHighlight: {},
        };

        store = createStore(reducer, preloadedState);

        act(() => {
            component = create(
                <StyleContext.Provider value={{insertCss}}>
                    <Provider store={store}>
                        <MemoryRouter initialEntries={["/"]}>
                            <React.StrictMode>
                                <App />
                            </React.StrictMode>
                        </MemoryRouter>
                    </Provider>
                </StyleContext.Provider>
            );
        });
    });

    test("app tests preloaded state setup", () => {
        expect(store.getState().M).toEqual(null);
        expect(store.getState().N).toEqual(null);
        expect(store.getState().X).toEqual(null);

        expect(component.toJSON()).toMatchSnapshot();

        preloadedState = {
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
            cellsToHighlight: {},
            amountObj: {
                el_id_1: 1,
                el_id_2: 2,
                el_id_3: 3,
                el_id_4: 4,
                el_id_5: 5,
                el_id_6: 6,
            },
            rowSum: [
                {
                    rowSum: 6,
                    rowPercent: 28.6,
                    isHoveredSum: false,
                    id: "rowSum_id_1",
                },
                {
                    rowSum: 15,
                    rowPercent: 71.4,
                    isHoveredSum: false,
                    id: "rowSum_id_2",
                },
            ],
            colAverage: [
                {amount: 3, id: "colSum_id_1"},
                {amount: 4, id: "colSum_id_2"},
                {amount: 5, id: "colSum_id_3"},
            ],
            M: 2,
            N: 3,
            X: 2,
        };

        store = createStore(reducer, preloadedState);
        actUtils(() => {
            component.update(
                <StyleContext.Provider value={{insertCss}}>
                    <Provider store={store}>
                        <MemoryRouter initialEntries={["/"]}>
                            <React.StrictMode>
                                <App />
                            </React.StrictMode>
                        </MemoryRouter>
                    </Provider>
                </StyleContext.Provider>
            );
        });
        expect(preloadedState).toEqual(store.getState());

        expect(component.toJSON()).toMatchSnapshot();
    });

    test("send params", async () => {
        const instance = component.root;

        const M = instance.findByProps({id: "M"});
        const N = instance.findByProps({id: "N"});
        const X = instance.findByProps({id: "X"});

        expect(M.props.value).toEqual("");

        const mEvent = {currentTarget: {value: "2", name: "M"}};
        const nEvent = {currentTarget: {value: "3", name: "N"}};
        const xEvent = {currentTarget: {value: "2", name: "X"}};

        actUtils(() => {
            M.props.onChange(mEvent);
        });
        actUtils(() => {
            N.props.onChange(nEvent);
        });
        actUtils(() => {
            X.props.onChange(xEvent);
        });
        const form = instance.findByProps({id: "startForm"});
        const formEvent = {preventDefault: () => {}};

        await actUtils(async () => await form.props.onSubmit(formEvent));

        expect(store.getState().M).toEqual(2);
        expect(store.getState().N).toEqual(3);
        expect(store.getState().X).toEqual(2);

        expect(store.getState().table.length).toBe(2);
        expect(store.getState().table[0].row.length).toBe(3);
    });

    test("validate params in the form", () => {
        const instance = component.root;

        const M = instance.findByProps({id: "M"});
        const N = instance.findByProps({id: "N"});
        const X = instance.findByProps({id: "X"});

        const mEvent = {currentTarget: {value: "-1", name: "M"}};
        const nEvent = {currentTarget: {value: "3", name: "N"}};
        const xEvent = {currentTarget: {value: "2", name: "X"}};

        act(() => {
            M.props.onChange(mEvent);
        });
        act(() => {
            N.props.onChange(nEvent);
        });
        act(() => {
            X.props.onChange(xEvent);
        });

        const form = instance.findByProps({id: "startForm"});
        const formEvent = {preventDefault: () => {}};

        act(() => form.props.onSubmit(formEvent));

        expect(M.props.value).toBe("");
        expect(X.props.value).toBe("");
        expect(N.props.value).toBe("");
    });
});

describe("Testing mouse events: ", () => {
    const preloadedState = {
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
        cellsToHighlight: {},
        amountObj: {
            el_id_1: 1,
            el_id_2: 2,
            el_id_3: 3,
            el_id_4: 4,
            el_id_5: 5,
            el_id_6: 6,
        },
        rowSum: [
            {
                rowSum: 6,
                rowPercent: 28.6,
                isHoveredSum: false,
                id: "rowSum_id_1",
            },
            {
                rowSum: 15,
                rowPercent: 71.4,
                isHoveredSum: false,
                id: "rowSum_id_2",
            },
        ],
        colAverage: [
            {amount: 3, id: "colSum_id_1"},
            {amount: 4, id: "colSum_id_2"},
            {amount: 5, id: "colSum_id_3"},
        ],
        M: 2,
        N: 3,
        X: 2,
    };

    container = document.createElement("div");
    document.body.appendChild(container);

    beforeEach(() => {
        store = createStore(reducer, preloadedState);

        act(() => {
            component = create(
                <StyleContext.Provider value={{insertCss}}>
                    <Provider store={store}>
                        <MemoryRouter initialEntries={["/app/2/3/2"]}>
                            <React.StrictMode>
                                <App />
                            </React.StrictMode>
                        </MemoryRouter>
                    </Provider>
                </StyleContext.Provider>
            );
        });

        actUtils(() => {
            renderComponent = ReactDOM.render(
                <StyleContext.Provider value={{insertCss}}>
                    <Provider store={store}>
                        <MemoryRouter initialEntries={["/app/2/3/2"]}>
                            <React.StrictMode>
                                <App />
                            </React.StrictMode>
                        </MemoryRouter>
                    </Provider>
                </StyleContext.Provider>,
                container
            );
        });
    });

    test("show table and handle ceil`s increase", () => {
        const instance = component.root;

        const ceil = instance.findByProps({id: "el_id_2"});

        const ceilDom = container.querySelector("#el_id_2");

        actUtils(() => ReactTestUtils.Simulate.click(ceilDom));
        const amount = store.getState().amountObj["el_id_2"];

        expect(+ceil.props.amount).toEqual(amount);
        // expect(component.toJSON()).toMatchSnapshot();
    });

    test("test hover on cell", () => {
        const ceil = container.querySelector("#el_id_2");

        actUtils(() => ReactTestUtils.Simulate.mouseEnter(ceil));
        const afterIn = store.getState().cellsToHighlight.row_id_1.el_id_2;
        expect(afterIn).toBe(true);

        actUtils(() => ReactTestUtils.Simulate.mouseLeave(ceil));
        const afterOut = store.getState().cellsToHighlight.row_id_1;
        expect(afterOut).toBeFalsy();

        expect(component.toJSON()).toMatchSnapshot();
    });

    test("test hover on sum element", () => {
        const sumCeil = container.querySelector("#rowSum_id_1");

        actUtils(() => ReactTestUtils.Simulate.mouseEnter(sumCeil));
        const afterEnter = store.getState().rowSum[0].isHoveredSum;
        expect(afterEnter).toBe(true);

        actUtils(() => ReactTestUtils.Simulate.mouseLeave(sumCeil));
        const afterLeave = store.getState().rowSum[0].isHoveredSum;
        expect(afterLeave).toBe(false);

        expect(component.toJSON()).toMatchSnapshot();
    });

    test("test adding row to the end button", () => {
        const rowsAmount = store.getState().table.length;
        const addButton = container.querySelector("#addRow");
        expect(component.toJSON()).toMatchSnapshot();

        actUtils(() => ReactTestUtils.Simulate.click(addButton));
        const lengthAfterAdd = store.getState().table.length;

        expect(rowsAmount + 1).toBe(lengthAfterAdd);
    });

    test("test removing row button", () => {
        const rowsAmount = store.getState().table.length;
        const removeButton = container.querySelector("#removeRow");

        actUtils(() => ReactTestUtils.Simulate.click(removeButton));
        const lengthAfterRemove = store.getState().table.length;

        expect(rowsAmount - 1).toBe(lengthAfterRemove);
        // expect(component.toJSON()).toMatchSnapshot();
    });

    test("test removing last row rows", () => {
        const rowsAmount = store.getState().table.length;
        const removeButton = container.querySelector("#removeRow");

        actUtils(() => ReactTestUtils.Simulate.click(removeButton));
        actUtils(() => ReactTestUtils.Simulate.click(removeButton));
        const lengthAfterRemove = store.getState().table.length;

        expect(rowsAmount - 1).toBe(lengthAfterRemove);
        // expect(component.toJSON()).toMatchSnapshot();
    });
});
