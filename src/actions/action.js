const SET_CONSTS = (value) => {
    return {type: 'SET_CONSTS', value };
}

const ADD_ROW = () => {
    return {type: 'ADD_ROW'};
}

const REMOVE_ROW = () => {
    return {type: 'REMOVE_ROW'};
}

const ADD_AMOUNT = (id) => {
    return {type: 'ADD_AMOUNT', value: id};
}

export {
    SET_CONSTS,
    ADD_ROW,
    REMOVE_ROW,
    ADD_AMOUNT
}