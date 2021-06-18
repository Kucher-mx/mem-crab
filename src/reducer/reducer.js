const initialState = {
    M: 0,
    N: 0,
    X: 0,
    table: [],
}

function getRandomInt() {
    return (Math.floor(Math.random() * 899) + 100);
}

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'ADD_AMOUNT':
            const tableClone = state.table
            for(let arr of tableClone){
                for(let cell of arr){
                    if(cell.id === actions.value){
                        cell.amount++
                    }
                }
            }
            return { ...state, table: tableClone }

        case 'SET_CONSTS':
            const newTable = []
            for (let i = 0; i < actions.value.M; i++) {
                newTable[i] = []
                for (let j = 0; j < actions.value.N; j++) {
                    newTable[i][j] = {id: ID(), amount: getRandomInt()}
                }
            }
            return {
                ...state,
                table: newTable,
                M: +actions.value.M,
                N: +actions.value.N,
                X: +actions.value.X,
            }
        case 'ADD_ROW':
            const addTable = [...state.table]
            const arrToPush = []
            for(let i = 0; i < state.N; i++){
                arrToPush.push({id: ID(), amount: getRandomInt()})
            }
            addTable.push(arrToPush)

            console.log(state.table, addTable);
            return { ...state, table: addTable, M: +state.M + 1}

        case 'REMOVE_ROW':
            const removeTable = [...state.table]
            removeTable.pop()
            return { ...state, M: state.M - 1, table: removeTable }
            
        default:
            return state;
    }
}

export default reducer;