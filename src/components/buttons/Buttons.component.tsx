import React, {Dispatch, FC} from "react";
import {connect} from "react-redux";

import {ADD_ROW, REMOVE_ROW} from "../../actions/action";
import {stateTypes} from "../../typeScript/types";

import "./buttons.styles.css";

interface IProps {
    add: () => void;
    remove: () => void;
}

function Buttons({add, remove}: IProps): React.ReactElement<IProps> {
    return (
        <div className="buttons">
            <button onClick={add} type="button">
                +
            </button>
            <button onClick={remove} type="button">
                -
            </button>
        </div>
    );
}

interface MapDispatchToPropsTypes {
    add: () => void;
    remove: () => void;
}

function mapDispatchToProps(dispatch: Dispatch<{type: string; id?: string}>) {
    return {
        add: () => dispatch(ADD_ROW()),
        remove: () => dispatch(REMOVE_ROW()),
    };
}

export default connect<IProps, MapDispatchToPropsTypes, {}, stateTypes>(null, mapDispatchToProps)(Buttons);
