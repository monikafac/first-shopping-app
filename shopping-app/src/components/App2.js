import React, { Component } from 'react';
import './App.css';


class App2 extends Component {
  state={
   productsAvaliable:10,
   amount:0,
  
  }

 handleRemoveFormCard=() =>{
 this.setState({
   amount: this.state.amount - 1,
  
 })
 }

  handleAddToCard=() =>{
    if (this.state.amount >= this.state.productsAvaliable){
      this.setState({
        amount: `10 jabłek, nie mamy już `
      })
    } else
    this.setState({
      amount: this.state.amount + 1,
      
    })
  }
  
  handleReset = () =>{
    this.setState({
      amount: 0
    })
  }
  
  render() {
    return (
      <div className="app">
      <div><img src="img/carrot.jpg" alt="" /></div>
      <h1>Kupiłeś: {this.state.amount} marchewek! </h1>
      <button disabled={this.state.amount ? false: true} onClick={this.handleRemoveFormCard}>Usuń</button>
      <button disabled={this.state.productsAvaliable===this.state.amount ? true : false} onClick={this.handleAddToCard}>Dodaj</button>
      <button onClick={this.handleReset}>Reset</button>
      </div>
      
    );
  }
}


export default App2;
