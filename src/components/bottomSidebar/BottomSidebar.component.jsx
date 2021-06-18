import React from 'react'
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import './bottomSidebar.styles.css'

const BottomSidebar = ({items, table}) => {
    const colInfo = []
    let genSum = 0
    if(table.length !== 0){
        genSum = table.flat().reduce((a, b) => ({amount: a.amount + b.amount}))
    }

    for(let col = 0; col < items.N; col++){
        let sumCol = 0;  
        for(let row = 0; row < items.M; row++){  
            sumCol = sumCol + table[row][col].amount;  
        } 
        colInfo.push(Math.round(sumCol/items.M))
    }

    return (
        <div className="bottom">
            <div className='bottom-sidebar' style={{gridTemplateColumns: `repeat(${items.N}, 1fr)`}}>
                {colInfo.map((num, idx) => {
                    return (
                        <div key={idx} className="cell">{num}</div>
                    )
                })}
            </div>

            {genSum ? <div className="general-sum">{genSum.amount}</div> : null}
            
        </div>
    )
}

const stateToProps = (state) => {
    return {
        items: {M: state.M, N: state.N, X: state.X},
        table: state.table
    }
}

const actionToProps = {}

export default connect(stateToProps, actionToProps)(withRouter(BottomSidebar))
