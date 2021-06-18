import React from 'react'
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

const MainPage = ({items}) => {
    console.log(items)
    return (
        <div className="main-page">
            hello
        </div>
    )
}

const stateToProps = (state) => {
    return {
        items: {M: state.M, N: state.N, X: state.X}
    }
}

const actionToProps = {
}

export default connect(stateToProps, actionToProps)(withRouter(MainPage))
