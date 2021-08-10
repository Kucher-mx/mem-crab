import * as React from "react";
import {connect} from "react-redux";

import {ADD_ROW, REMOVE_ROW} from "../../actions/action";
import {stateTypes} from "../../typeScript/types";

import withStyles from "isomorphic-style-loader/withStyles";
import s from "./buttons.module.css";

interface IProps {
    add: () => void;
    remove: () => void;
}

function Buttons({add, remove}: IProps): React.ReactElement<IProps> {
    return (
        <div className={s.buttons}>
            <button id={"addRow"} className={s.button} onClick={add} type="button">
                +
            </button>
            <button id={"removeRow"} className={s.button} onClick={remove} type="button">
                -
            </button>
        </div>
    );
}

interface MapDispatchToPropsTypes {
    add: () => void;
    remove: () => void;
}

function mapDispatchToProps(dispatch: React.Dispatch<{type: string; id?: string}>) {
    return {
        add: () => dispatch(ADD_ROW()),
        remove: () => dispatch(REMOVE_ROW()),
    };
}

export {Buttons};

export default withStyles(s)(
    connect<IProps, MapDispatchToPropsTypes, {}, stateTypes>(null, mapDispatchToProps)(Buttons)
);
