// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {lists: [], loading: false}, action) => {
    switch(action.type){
        case("LOADING_LISTS"):
            return {...state, loading: true}
        case ("LISTS_LOADED"):
            // debugger 
            return { ...state, loading: false, lists: action.payload }
        case ("ADDING_LIST"):
            return { ...state, loading: true }
        case ("LIST_ADDED"):
            return { ...state, loading: false, lists: [...state.lists, action.payload] }
        case ("DELETING_LIST"):
            return { ...state, loading: true }
        case ("LIST_DELETED"):
            return { ...state, 
                    loading: false, 
                    lists: state.lists.filter(list => parseInt(list.id) !== parseInt(action.payload)) }
        default:
            return state
    }    
}



