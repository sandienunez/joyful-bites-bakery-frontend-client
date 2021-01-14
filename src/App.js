import './App.css';
import React, { Component } from 'react'
import JBlogo from './JBlogo.png';
import cookie from './cookie.png';
import { connect } from 'react-redux' 
import { getLists, deleteList } from './actions/lists'
import ListForm from './containers/ListForm';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'

class App extends Component {
  componentDidMount(){
    
    this.props.getLists()
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.deleteList(event.target.id)
  }


    render(){
      console.log("hi props", this.props)
      // debugger
      const lists = this.props.lists.map((list, i) => {
         
        return <li key={i}>{list.client_name}
                  <b><p></p></b>
                <label>Order Date: {list.date_order_made}</label> 
                <b><p></p></b>

                <label>Cookie order: {list.product_name}</label> 
                <label>Quantity: {list.quantity}</label> 
                <label>Total Amount: {list.total_amount}</label> 

                  <button id={list.id} onClick={this.handleClick}>Delete</button>
                  </li>
      })
      // debugger

    return (
      <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
  
      <div className="App">
      <h2>Make an Order</h2>
       <ListForm />
        <img src={JBlogo} alt="JB logo" height={900} width={1200}/>
        <header className="App-header">
        <h3>Eating healthy never felt so good!</h3>
        <img src={cookie} alt="Cookie" height={900} width={600}/>
        <label>Order Summary:</label>
       <ul>{this.props.loading ? <h3>Just a moment...</h3>: lists } </ul>
        </header>
      </div>
      </Router> 
    );
   
  }

 
    
    
} 


const mapStateToProps = state => {
  // debugger 
  //connects your db to parent to child component 
  return {
    lists: state.listReducer.lists,
    loading: state.listReducer.loading
  }
}


export default connect(mapStateToProps, {getLists, deleteList})(App);
