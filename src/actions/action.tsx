import {ActionTypes} from "../actions/actionTypes";
import type {cellsToHighlight, increaseTypes, stateTypes} from "../typeScript/types";

const SET_CONSTS = (value: stateTypes) => ({type: ActionTypes.SET_CONSTS, value});

const ADD_ROW = () => ({type: ActionTypes.ADD_ROW});

const REMOVE_ROW = () => ({type: ActionTypes.REMOVE_ROW});

const ADD_AMOUNT = (value: increaseTypes) => ({type: ActionTypes.ADD_AMOUNT, value});

const HIGHLIGHT = (value: cellsToHighlight) => ({type: ActionTypes.HIGHLIGHT, value});

const UNHIGHLIGHT = () => ({type: ActionTypes.UNHIGHLIGHT});

const HIGHLIGHT_SUM = (id: string) => ({type: ActionTypes.HIGHLIGHT_SUM, value: id});

const UNHIGHLIGHT_SUM = () => ({type: ActionTypes.UNHIGHLIGHT_SUM});

export {ADD_AMOUNT, ADD_ROW, HIGHLIGHT, HIGHLIGHT_SUM, REMOVE_ROW, SET_CONSTS, UNHIGHLIGHT, UNHIGHLIGHT_SUM};
