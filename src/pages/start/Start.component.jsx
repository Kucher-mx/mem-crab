import React from 'react'
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import {SET_CONSTS} from '../../actions/action'

import './start.styles.css'

const StartPage = ({history, setConsts}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = {
            M: e.target[0].value,
            N: e.target[1].value,
            X: e.target[2].value
        }

        if(value.X > (value.M * value.N) - 1 || value.M < 0 || value.N < 0){
            window.location.reload();
            alert('X < M * N, M&N > 0')
        }else{
            setConsts(value)
            history.push('/app')
        }
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

function mapDispatchToProps(dispatch){
    return{
        setConsts: (value) => dispatch(SET_CONSTS(value)),
    }
}

export default connect(stateToProps, mapDispatchToProps)(withRouter(StartPage))
