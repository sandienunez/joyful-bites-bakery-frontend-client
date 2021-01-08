//action object creator function 

export const getItems = () => {
    return dispatch  => {
        dispatch({type: "LOADING_ITEMS"})
        fetch("/items")
        .then(res => res.json())
        .then(items => dispatch({type: "ITEMS_LOADED", payload: items}))
    }
  
}
  

