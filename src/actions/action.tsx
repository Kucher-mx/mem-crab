import type {cellTypes, valueTypes} from "../typeScript/types";

const SET_CONSTS = (value: {table: cellTypes[][]; consts: valueTypes}) => ({type: "SET_CONSTS", value});

const ADD_ROW = () => ({type: "ADD_ROW"});

const REMOVE_ROW = () => ({type: "REMOVE_ROW"});

const ADD_AMOUNT = (id: String) => ({type: "ADD_AMOUNT", id});

const HIGHLITE = (id: String) => ({type: "HIGHLITE", id});

const UNHIGHLITE = () => ({type: "UNHIGHLITE"});

const HIGHLITE_SUM = (id: string) => ({type: "HIGHlITE_SUM", id});

const UNHIGHLITE_SUM = () => ({type: "UNHIGHlITE_SUM"});

export {ADD_AMOUNT, ADD_ROW, HIGHLITE, HIGHLITE_SUM, REMOVE_ROW, SET_CONSTS, UNHIGHLITE, UNHIGHLITE_SUM};
