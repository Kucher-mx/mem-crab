import React from 'react'
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import './buttons.styles.css'

import {ADD_ROW, REMOVE_ROW} from '../../actions/action'
const Buttons = ({add, remove}) => {
    return (
        <div className="buttons">
            <button onClick={add} >+</button>
            <button onClick={remove} >-</button>
        </div>
    )
}

const stateToProps = (state) => {
    return {
        items: {M: state.M, N: state.N, X: state.X},
        table: state.table
    }
}

function mapDispatchToProps(dispatch){
    return{
      add: () => dispatch(ADD_ROW()),
      remove: () => dispatch(REMOVE_ROW()),
    }
}

export default connect(stateToProps, mapDispatchToProps)(withRouter(Buttons))
