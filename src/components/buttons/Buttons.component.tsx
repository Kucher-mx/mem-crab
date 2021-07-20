import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import {ADD_ROW, REMOVE_ROW} from "../../actions/action";

import "./buttons.styles.css";


function Buttons({add, remove}: {add: () => ({}); remove: () => ({})}) {
    return (
        <div className="buttons">
            <button onClick={add} type="button">+</button>
            <button onClick={remove} type="button">-</button>
        </div>
    );
}

function mapDispatchToProps(dispatch: (arg0: {type: string}) => {}) {
    return {
        add: () => dispatch(ADD_ROW()),
        remove: () => dispatch(REMOVE_ROW()),
    };
}

export default withRouter(connect(null, mapDispatchToProps)(Buttons));
