import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions/lists' 


class ListForm extends Component {
    state = {
        client_name: "",
        date_order_made: "",
        product_name: "Almond Chocolate Chip",
        quantity: "",
        total_amount: ""
    };
      

      handleSubmit = (event) => {
        event.preventDefault()
        // debugger 
        const list = { client_name: this.state.client_name, date_order_made: this.state.date_order_made, quantity: this.state.quantity, product_name: this.state.product_name, total_amount: this.state.total_amount}
        // debugger

        this.props.addList(list)

        this.setState({
            client_name: "",
            date_order_made: "",
            product_name: "",
            quantity: "",
            total_amount: ""
        })

    }

    handleChange = (event) => {
        // debugger 
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                Client name:
                    <input type="text" name="client_name" value={this.state.client_name} onChange={this.handleChange}/>
                    <b><p></p></b>
                    Date Order Made 
                    <input type="text" name="date_order_made" value={this.state.date_order_made} onChange={this.handleChange}/>
                    <b><p></p></b>
                    Quantity
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                    <b><p></p></b>
                   Pick a flavor:
          <select value={this.state.product_name} name="product_name" onChange={this.handleChange}>
            <option value="Almond Chocolate Chip">Almond Chocolate Chip</option>
            <option value="Chocolate Chip"> Chocolate Chip</option>

          </select>
          <b><p></p></b>
                    <input type="submit" value="Place Order"/>
                    </label>
                </form>
                
            </div>
        )
    }

}

export default connect(null, { addList })(ListForm)
//controlled form 