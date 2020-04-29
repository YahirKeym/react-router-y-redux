let initialState = [];

export default (state = initialState,action)=>{
    if(action.type === 'CREATE_TODO'){
        let newState = state;
        newState.push(action.payload);
        return newState
    }
    /**
     * 
     */
    if(action.type === 'UPDATE_TODO'){
        let newState = state;
        let idEnArray = action.payload.idEnArray;
            newState[idEnArray].title = action.payload.Titulo;
            newState[idEnArray].contenido = action.payload.Contenido;
            return newState;
    }
    /**
     * 
     */
    if(action.type === 'DELETE_TODO'){
        let newState = state;
        let idEnArray = action.payload;
        newState = newState.splice(idEnArray,idEnArray+1);
        return newState
    }
    return state;
}

export const GetTodos = state => state.todoReducer;