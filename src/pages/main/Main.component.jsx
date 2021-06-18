import React from 'react'
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import './main.styles.css'
import {ADD_AMOUNT} from '../../actions/action'

import LeftSidebar from '../../components/leftSidebar/LeftSidebar.component'
import BottomSidebar from '../../components/bottomSidebar/BottomSidebar.component'
import Buttons from '../../components/buttons/Buttons.component'

const MainPage = ({items, table, increase, history}) => {

    if(table.length === 0){
        history.push('/')
    }

    const inHoverCellHandle = (e) => {
        const value = +e.target.innerText;
        const cellsToHighlite = []
        let tempArr = table.flat()
        tempArr = tempArr.filter((el) => +el.amount !== +value)

        for(let i = 0; i < items.X; i++){
            const itemToHighlite = tempArr.reduce((acc, obj) => Math.abs(value - obj.amount) < Math.abs(value - acc.amount) ? obj : acc);
            tempArr = tempArr.filter((el) => +el.amount !== +itemToHighlite.amount)
            cellsToHighlite.push(itemToHighlite.id)
        }

        const cells = document.querySelectorAll('td')

        Array.from(cells).forEach(node => {
            if (cellsToHighlite.includes(node.id) || +node.innerText === value) {
                node.style.background = 'rgba(238, 40, 49, 0.576)'
            }
            
        });
    }

    const outHoverCellHandle = (e) => {
        const cells = document.querySelectorAll('td')

        Array.from(cells).forEach(node => {
            node.style.background = 'transparent'
        });
    }

    const renderTableCells = () => {
        return table.map((collumn, idx) => {
            return(
                <tr key={idx}>
                    {collumn.map(({id, amount}) => {
                        return (
                            <td onClick={(e) => increase(id)} 
                            key={id}
                            id={id}
                            onMouseEnter={(e) => {
                                inHoverCellHandle(e)
                            }}
                            onMouseLeave={(e) => {
                                outHoverCellHandle(e)
                            }}
                            >{amount}</td>
                        )
                    })}
                </tr>
            )
        })
     }

    return (
        <div className="main-page">
            <Link to="/" className='title'>MEM-CRAB React Test</Link>
            <div className="table-wrapper">
                <table className='table'>
                    <tbody>
                        {renderTableCells()}
                    </tbody>
                </table>
                <LeftSidebar />
            </div>
            <BottomSidebar />

            <Buttons/>
         </div>
    )
}

function mapStateToProps(state){
    return {
        items: {M: state.M, N: state.N, X: state.X},
        table: state.table
    }
}

function mapDispatchToProps(dispatch){
    return{
      increase: (id) => dispatch(ADD_AMOUNT(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage))
