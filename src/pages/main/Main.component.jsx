import React from 'react'
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import './main.styles.css'
import {ADD_AMOUNT} from '../../actions/action'

import LeftSidebar from '../../components/leftSidebar/LeftSidebar.component'
import BottomSidebar from '../../components/bottomSidebar/BottomSidebar.component'
import Buttons from '../../components/buttons/Buttons.component'

const MainPage = ({items, table, increase}) => {

    const cellHoverHandle = (e) => {
        console.log(e);
    }

    const renderTableCells = () => {
        return table.map((collumn, idx) => {
            return(
                <tr key={idx}>
                    {collumn.map(({id, amount}) => {
                        return (
                            <td onClick={(e) => increase(id)} key={id}
                            onMouseOver={cellHoverHandle}
                            >{amount}</td>
                        )
                    })}
                </tr>
            )
        })
     }

    return (
        <div className="main-page">
            <h1 className='title'>MEM-CRAB React Test</h1>
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
