import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartBadge from './components/CartBadge';

class App extends Component {


  state = {
    cart: []
  }

  addToCart(e) {
    let { item, qty } = e;
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
  }

  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <CartBadge value={cart.length} />
        <hr />
        <ProductList onBuy={e => this.addToCart(e)} />
      </div>
    );
  }
}

export default App;
