// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {lists: [], loading: false}, action) => {

 //loading flag that sets to false    
//define a reducer function= determines what the new state should be when something happens in the app 
// reducer receives two arguments, 
//the current state and an action object describing what happened.
// When the Redux app starts up, we don't have any state yet,
// so we provide the initialState as the default value for this reducer:
// Reducers = look at the type of action that happened
  // to decide how to update the state
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
    // If the reducer doesn't care about this action type,
      // return the existing state unchanged
            return state
    }    
}

//Based on the type of the action, we either need to return a brand-new object 
//to be the new state result, or return the existing state object 
//if nothing should change. Note that we update the state immutably 
//by copying the existing state and updating the copy, instead 
//of modifying the original object directly.


