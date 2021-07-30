import {ActionTypes} from "../actions/actionTypes";
import type {stateTypes} from "../typeScript/types";


const SET_CONSTS = (value: stateTypes) => ({type: ActionTypes.SET_CONSTS, value});

const ADD_ROW = () => ({type: ActionTypes.ADD_ROW});

const REMOVE_ROW = () => ({type: ActionTypes.REMOVE_ROW});

const ADD_AMOUNT = (id: string) => ({type: ActionTypes.ADD_AMOUNT, value: id});

const HIGHLITE = (id: string[]) => ({type: ActionTypes.HIGHLITE, value: id});

const UNHIGHLITE = (id: string[]) => ({type: ActionTypes.UNHIGHLITE, value: id});

const HIGHLITE_SUM = (id: string) => ({type: ActionTypes.HIGHlITE_SUM, value: id});

const UNHIGHLITE_SUM = () => ({type: ActionTypes.UNHIGHlITE_SUM});

export {ADD_AMOUNT, ADD_ROW, HIGHLITE, HIGHLITE_SUM, REMOVE_ROW, SET_CONSTS, UNHIGHLITE, UNHIGHLITE_SUM};
