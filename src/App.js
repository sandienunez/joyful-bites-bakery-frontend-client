import './App.css';
import React, { Component } from 'react'
import JBlogo from './JBlogo.png';
import cookie from './cookie.png';
import { connect } from 'react-redux' 
import { getLists, deleteList } from './actions/lists'
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import DisplayForm from './containers/DisplayForm';
import DisplayMenu from './containers/DisplayMenu';
import Mission from './components/Mission';
import Orders from './components/Orders';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';
import Ingredients from './components/Ingredients';



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
          <Route exact path="/menuitems" component={DisplayMenu} />
          <Route exact path="/neworder" component={DisplayForm} />
          <Route exact path="/lists" component={() => <Orders lists={this.props.lists}/>} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/ourstory" component={OurStory} />
          <Route exact path="/ingredients" component={Ingredients} />
          <Route exact path="/contactus" component={ContactUs} />
        </Switch>
      </div>

      <div className="ItemForm">
      <h3>Click on the logo to Order! </h3>

      <Link to="/neworder">
        <img src={JBlogo} alt="JB logo" height={500} width={576}/>
        </Link>
        <header className="App-header">
        <h1>Eating healthy never felt so good!</h1>
        <img src={cookie} alt="Cookie" height={700} width={500}/>
        <h2>Joyful Bites Community Order Feed: </h2>
       <ul>{this.props.loading ? <h3>Just a moment...</h3>: lists } </ul>
        </header>
      </div>
      </Router> 
    );
   
  }
    
} 


const mapStateToProps = state => {
  // debugger 
  return {
    lists: state.listReducer.lists,
    loading: state.listReducer.loading
  }
}


export default connect(mapStateToProps, {getLists, deleteList})(App);
