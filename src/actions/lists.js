//action object creator function 

export const getLists = () => {
    return dispatch  => {
        dispatch({type: "LOADING_LISTS"})
        fetch("http://localhost:3001/lists")
        .then(res => res.json())
        .then(lists => dispatch({type: "LISTS_LOADED", payload: lists}))
    }
  
}
  
export const addList = (list) => {
    // debugger
    return dispatch => {
        dispatch({ type: "ADDING_LIST" })
        fetch("/lists", {
            method: "POST",
            body: JSON.stringify(list),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(lists => {
            // debugger
            dispatch({ type: "LIST_ADDED", payload: {...lists, items:[{product_name: list.product_name}],list_items: [{quantity: list.quantity}]} })}) 
            //format list object same way we get back from api 
            // setTimeout(() => {
            // getLists() 
            // }, 1000
            // )
            // })

    }
}

export const deleteList = (id) => {
    // debugger 
    return dispatch => {
        // debugger 
        dispatch({ type: "DELETING_LIST" })
        fetch(`/lists/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then()
        .then(() => dispatch({ type: "LIST_DELETED", payload: id }))
    }
}