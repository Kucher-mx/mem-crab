const SET_CONSTS = (value) => {
    return {type: 'SET_CONSTS', value };
}

const ADD_ROW = (newMenu) => {
    return {type: 'ADD_ROW', cards: newMenu};
}

const REMOVE_ROW = (newMenu) => {
    return {type: 'REMOVE_ROW', cards: newMenu};
}

const ADD_AMOUNT = (newMenu) => {
    return {type: 'ADD_AMOUNT', cards: newMenu};
}

export {
    SET_CONSTS,
    ADD_ROW,
    REMOVE_ROW,
    ADD_AMOUNT
}