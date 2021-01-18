import React from 'react'


const Orders = (props) => { 
    console.log("hi props", props)
   
//   debugger 
const handleClick = (event) => {
    event.preventDefault()
    props.deleteList(event.target.id)
  }
    const lists = props.lists.map((list, i) => {
    // debugger 
        return <div>
            <b><p></p></b>
            <b><p></p></b>
            <label>Client Name: </label>
            <li key={i}> {list.client_name} 
                <b><p></p></b>
              <label>Order Date: {list.date_order_made}</label> 
              <b><p></p></b>
              <label>Cookie order: {list.product_name}</label> 
              <b><p></p></b>
              <label>Quantity: {list.quantity}</label> 
              <b><p></p></b>
              <b><p></p></b>
                <button id={list.id} onClick={handleClick}>Delete</button>
               </li> 
      
        </div>
    }) 
    return (
        <div>
            {lists}
        </div>
    )
}

export default Orders