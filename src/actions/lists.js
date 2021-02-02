//getLists= action object creator function = =function that returns objects returns a thunk 
//make API Calls with Redux
// backend API = answers to GET /lists 
//make Redux action to do the fetching
//Before you start the API call, you dispatch the BEGIN action.

//Then after the call succeeds, you dispatch SUCCESS with the data.
//by setting a “loading” flag true in response to the BEGIN action

export const getLists = () => {
    return (dispatch)  => { //returns thunk function passed to dispatch, thunk middleware intercepts it 
        dispatch({
            type: "LOADING_LISTS"
        })
        fetch("http://localhost:3001/lists")
        .then(res => res.json())
        .then(lists => dispatch({type: "LISTS_LOADED", payload: lists}))
        .catch((error) => {
            console.log(error)
        });
    }
}

// action creator in normal redux = returns an action 
//in world of thunk = action object creator function returns thunk function 
//do it in 2 steps with dispatch 

export const addList = (list) => {
    // debugger
    return dispatch => {
        dispatch({ 
            type: "ADDING_LIST" 
        })
        fetch("/lists", {
            method: "POST",
            body: JSON.stringify(list),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(list => dispatch(
            { 
            type: "LIST_ADDED",
            payload: list 
        }
        ))
        .catch((error) => {
            console.log(error)
        });
    }
}

export const deleteList = (id) => {
    // debugger 
    return dispatch => {
        // debugger 
        dispatch({ 
            type: "DELETING_LIST" 
        })
        fetch(`/lists/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(() => dispatch(
            { 
            type: "LIST_DELETED",
            payload: id 
        }))
        .catch((error) => {
            console.log(error)
            });
        }
    }