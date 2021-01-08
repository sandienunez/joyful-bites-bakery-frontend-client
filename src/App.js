import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { getItems } from './actions/items'

class App extends Component {
  componentDidMount(){
    this.props.getItems()
  }


  render(){
    const items = this.props.items.map((item, i) => {
      return <li key={i}>{item.name}</li>
    })
    return (
      <div className="App">
        <header className="App-header">
       <h3>Joyful Bites Bakery</h3>
       <ul>{this.props.loading ? <h3>Just a moment...</h3>: items } </ul>
        </header>
      </div>
    );
  }
} 

const mapStateToProps = state => {
  return {
    items: state.itemReducer.items,
    loading: state.itemReducer.loading
  }
}

export default connect(mapStateToProps, {getItems })(App);
