import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getLists, deleteList} from '../actions/lists'


class Orders extends Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = {sortedOrders: [], 
        clicked: false
        }
    }

    handleSortClick = () => {
        const sortedLists = this.props.lists.slice()
        switch(this.state.clicked) {
            case true: 
                this.setState({
                    sortedOrders: [sortedLists.sort()],
                    clicked: false
                    //new array 
                }) 
            break;
            case false: 
                this.setState({
                    sortedOrders: [sortedLists],
                    clicked: true 
                    //new array 
                }) 
            break;
            default:
        console.log(`Sorry, try again.`);
           
        }     
    }

    handleClick = (event) => {
        event.preventDefault()
        // debugger
        this
            .props
            .deleteList(event.target.id)
    }

    render() {
        console.log("hi props", this.props)
        let lists 
        // debugger
        switch(this.state.clicked) {
            case false:
                lists = this
                    .props
                    .lists
                    .map((list, i ) => {
                        console.log(list, "hi")

                        return <div key={i} className = "Orders" style={{ border: "4px solid turquoise", width: "100%",
                        float: 'center',
                        textAlign: 'center'
                    }} 
                        >
                        <p></p>
                        <label>Client Name: </label>
                        <li > {list.client_name}                    
                            <b><p></p></b>
                        <label>Order Date: {list.date_order_made}</label> 
                        
                        {list
                                .list_items
                                .map((item, i) => {
                                    return (
                                        <div key={i}>
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
        break;
            case true:
                let listsSorted = 
    // sort by name
        [...this.props.lists].sort(function(a, b) {
            var nameA = a.client_name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.client_name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
            // names must be equal
            return 0;
            
    });
    lists = listsSorted.map((list, i ) => {
        console.log(list, "hi")
        return <div key={i} className = "Orders" style={{ border: "4px solid turquoise", width: "100%",
        float: 'center',
        textAlign: 'center'
       }} 
        >
        <p></p>
        <label>Client Name: </label>
        <li > {list.client_name}                    
            <b><p></p></b>
          <label>Order Date: {list.date_order_made}</label> 
          
          {list
                .list_items
                .map((item, i) => {
                    return (
                        <div key={i}>
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
        break; 
        default:
            console.log(`Sorry, try again.`);
        }
        // debugger

        return (
            <div>
            <button onClick={this.handleSortClick}>Sort</button>
                {lists}
            </div>

        );
    }
}

const mapStateToProps = (state) => {

    return {
        lists: state.listReducer.lists 
    }
}

export default connect(mapStateToProps, {getLists, deleteList})(Orders);

