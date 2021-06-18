import React from 'react'
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import './leftSidebar.styles.css'

const LeftSidebar = ({table}) => {
    
    const inHoverSumHandle = (e) => {
        const value = +e.target.innerText;

            let genSum = 0
            if(table.length !== 0){
                genSum = table.flat().reduce((a, b) => ({amount: a.amount + b.amount}))
            }
            const persent = +((value * 100) / genSum.amount).toFixed(1)
        if(!e.target.classList.contains('background')){
            e.target.children[0].style.width = persent + "%"
        }else {
            e.target.style.width = persent + "%"
        }
    }

    const outHoverSumHandle = (e) => {
        if(!e.target.classList.contains('background')){
            e.target.children[0].style.width = 0 + "%"
        }else{
            e.target.style.width = 0 + "%"
        }
    }



    return (
        <div className='left-sidebar'>
            {table.map((collumn, idx) => {
                let sum = 0;
                collumn.forEach((item) => {
                    sum += item.amount
                })
                return (
                    <div key={idx}
                        className="sum-cell"
                        onMouseEnter={(e) => {
                            inHoverSumHandle(e)
                        }}
                        onMouseLeave={(e) => {
                            outHoverSumHandle(e)
                        }}
                    >
                    <div className="background"></div>
                    {sum}</div>
                )
            })}
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

export default connect(stateToProps, actionToProps)(withRouter(LeftSidebar))
