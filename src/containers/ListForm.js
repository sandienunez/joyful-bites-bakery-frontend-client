import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions/lists' 
import '../ListForm.css';



class ListForm extends Component {
    state = {
        client_name: "",
        date_order_made: "",
        product_name: "Select Cookie Type",
        quantity: "",
    };
      

      handleSubmit = (event) => {
        event.preventDefault()
   
        // debugger 
        const list = { client_name: this.state.client_name, date_order_made: this.state.date_order_made, quantity: this.state.quantity, product_name: this.state.product_name}
        // debugger

        this.props.addList(list)

        this.setState({
            client_name: "",
            date_order_made: "",
            product_name: "",
            quantity: "",

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
                <header className="ItemForm-header"></header>
                <form onSubmit={this.handleSubmit} className="ItemForm">
                <h1>Joyful Bites Bakery Order</h1>
                <label>
                Client name:
                    <input type="text" name="client_name" value={this.state.client_name} onChange={this.handleChange}  />
                    <b><p></p></b>
                    Date Order Made: 
                    <input type="text" name="date_order_made" value={this.state.date_order_made} onChange={this.handleChange}/>
                    <b><p></p></b>
                    Quantity:
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                    <b><p></p></b>
                   Choose Cookie flavor:
          <select value={this.state.product_name} name="product_name" onChange={this.handleChange}>
          <option value="Select Cookie Type">Select Cookie Type</option>
            <option value="Almond Coconut">Almond Coconut $3.25</option>
            <option value="Chocolate Chip"> Chocolate Chip $3.00</option>
            <option value="Blueberry Lemon"> Blueberry Lemon $3.50</option>


          </select>
          <b><p></p></b>
                    <input type="submit" value="Place Order" className="button" disabled={this.state.product_name === "Select Cookie Type" ? true: false }/>
                    </label>
                </form>
                
            </div>
        )
    }

}

export default connect(null, { addList })(ListForm)
//controlled form 