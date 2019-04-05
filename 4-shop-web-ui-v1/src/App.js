import React, { Component } from 'react';
import classNames from 'classnames';

class App extends Component {

  state = {
    currentTab: 1,
    products: [
      {
        id: 111,
        name: "Laptop",
        price: 198000,
        canBuy: true,
        image: 'images/Laptop.png',
        description: 'New Mac pro'
      },
      {
        id: 222,
        name: "Mobile",
        price: 18000,
        canBuy: true,
        image: 'images/Mobile.png',
        description: 'New  pro'
      }
    ]
  }
  changeTab(tabIndex, e) {
    e.preventDefault();
    this.setState({ currentTab: tabIndex })
  }
  renderBuyBtn(product) {
    if (product.canBuy) return (<button className="btn btn-sm btn-dark">buy</button>)
    else return null;
  }
  renderTabPanel(product) {
    let { currentTab } = this.state;
    switch (currentTab) {
      case 1: return (<div>{product.description}</div>)
      case 2: return (<div>Not Yet</div>)
      case 3: return (<div>None Yet</div>)
      default: return null;
    }
  }
  renderProducts() {
    let { products, currentTab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={product.id} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.image} className="img-fluid" alt={product.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              {this.renderBuyBtn(product)}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(1, e)}
                    className={classNames('nav-link', { active: currentTab === 1 })}
                    href="/">
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(2, e)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Specfication</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(3, e)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">

        <nav className="navbar navbar-light bg-info">
          <a className="navbar-brand" href="/">online-shopping</a>
        </nav>

        <hr />
        <hr />

        {this.renderProducts()}

      </div>
    );
  }
}

export default App;
