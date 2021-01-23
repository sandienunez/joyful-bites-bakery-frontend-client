import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getLists, deleteList} from '../actions/lists'


class Orders extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this
            .props
            .deleteList(event.target.id)
    }

    render() {
        console.log("hi props", this.props)
        // debugger
        const lists = this
            .props
            .lists
            .map((list, i ) => {
                console.log(list, "hi")

                return <div className = "Orders"style={{ border: "4px solid turquoise", width: "100%",
                float: 'center',
                textAlign: 'center'
               }} 
                >
                <p></p>
                <label>Client Name: </label>
                <li key={i}> {list.client_name}                    
                    <b><p></p></b>
                  <label>Order Date: {list.date_order_made}</label> 
                  
                  {list
                        .list_items
                        .map((item, i) => {
                            return (
                                <div>
                                    <label>Cookie order: {list.items[i].product_name}</label>
                                    <p></p>

                                    <label>Quantity: {item.quantity}</label>
                                    <p></p>
                                    <button id={list.id} onClick={this.handleClick}>Delete</button>
                                </div>
                             
                            )
                        
                        })}
                        </li> 
                      </div> 
            })
        // debugger

        return (
            <div>
                {lists}
            </div>

        );

    }

}

const mapStateToProps = state => {
    // debugger connects your db to parent to child component
    return {lists: state.listReducer.lists, loading: state.listReducer.loading}
}

export default connect(mapStateToProps, {getLists, deleteList})(Orders);