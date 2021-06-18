import React from 'react'
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import {SET_CONSTS} from '../../actions/action'

import './start.styles.css'

const StartPage = ({history, SET_CONSTS}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = {
            M: e.target[0].value,
            N: e.target[1].value,
            X: e.target[2].value
        }
        SET_CONSTS(value)
        history.push('/app')
    }

    return (
        <div className="start-page">
            <form onSubmit={handleSubmit}>
                <div className="label-wrapper">
                    <label>M:
                        <input type="number" required/>
                    </label>

                    <label>N:
                        <input type="number" required/>
                    </label>

                    <label>X:
                        <input type="number" required/>
                    </label>
                </div>
                <button type="submit">sumbit</button>
            </form>
        </div>
    )
}

const stateToProps = (state) => {
    return {}
}

const actionToProps = {
    SET_CONSTS,
}

export default connect(stateToProps, actionToProps)(withRouter(StartPage))
