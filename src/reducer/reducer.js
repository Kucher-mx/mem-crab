const initialState = {
    M: 0,
    N: 0,
    X: 0,
    table: [[], []],
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'SET_CONSTS':
            console.log(actions);
            return {
                M: actions.value.M,
                N: actions.value.N,
                X: actions.value.X,
            }
        case 'ADD_ROW':
            return { M: state.M + 1 }
        case 'REMOVE_ROW':
            return { M: state.M - 1 }
        case 'ADD_AMOUNT':
            const tableClone = state.table
            for(let arr of tableClone){
                for(let cell of arr){
                    if(cell.id === actions.idToChange){
                        cell.amount++
                    }
                }
            }
            return { table: tableClone }
        default:
            break;
    }

    return state;
}

export default reducer;