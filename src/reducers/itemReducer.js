export default (state = {items: [], loading: false}, action) => {
    switch(action.type){
        case("LOADING_ITEMS"):
            return {...state, loading: true}
        case("ITEMS_LOADED"):
        debugger 
            return {...state, loading: false, items: action.payload }
        default:
            return state
    }
}