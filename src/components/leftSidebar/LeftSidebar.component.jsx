import React from 'react'
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import './leftSidebar.styles.css'

const LeftSidebar = ({table}) => {
    
    const inHoverSumHandle = (e) => {
        let value = 0
        if(!e.target.classList.contains('background') && !e.target.classList.contains('persent')){
            value = e.target.innerText;
        }else{
            value = e.target.parentNode.innerText;
        }

        let genSum = 0
        if(table.length !== 0){
            genSum = table.flat().reduce((a, b) => ({amount: a.amount + b.amount}))
        }
        console.log(value);

        const persent = +((value * 100) / genSum.amount).toFixed(1)

        console.log(persent);

        if(!e.target.classList.contains('background') && !e.target.classList.contains('persent')){
            e.target.style.fontSize = '0px'
            e.target.children[0].style.width = persent + "%"

            e.target.children[1].innerText = persent + "%"
            e.target.children[1].style.zIndex = 3
            e.target.children[1].style.fontSize = '16px'
        }else if(e.target.classList.contains('background')){
            e.target.style.width = persent + "%"
            e.target.parentNode.style.fontSize = '0px'

            e.target.nextSibling.innerText = persent + "%"
            e.target.nextSibling.style.fontSize = '16px'
        }else{
            e.target.previousSibling.style.width = persent + "%"
            e.target.parentNode.style.fontSize = '0'

            e.target.innerText = persent + "%"
            e.target.style.fontSize = '16px'
        }
    }

    const outHoverSumHandle = (e) => {
        if(!e.target.classList.contains('background') && !e.target.classList.contains('persent')){
            e.target.children[0].style.width = 0 + "%"
            e.target.style.fontSize = '16px'
            e.target.children[1].innerText = ''
            e.target.children[1].style.zIndex = -1
            e.target.children[1].style.fontSize = '0px'
        }else if(e.target.classList.contains('background')){
            e.target.style.width = 0 + "%"
            e.target.parentNode.style.fontSize = '16px'
            e.target.nextSibling.innerText = ''
            e.target.nextSibling.fontSize = '0px'
        }else{
            e.target.previousSibling.style.width = ''
            e.target.style.fontSize = '0px'
            e.target.parentNode.style.fontSize = '16px'
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
                    <span className="persent"></span>
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
