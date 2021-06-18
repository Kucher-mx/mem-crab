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

        if(value.X > (value.M * value.N) - 1){
            window.location.reload();
            alert('X should be less than M * N')
            // history.push('/')
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
