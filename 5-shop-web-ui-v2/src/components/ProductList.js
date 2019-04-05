import React, { Component } from 'react';
import Product from './Product';


class ProductList extends Component {

    state = {
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
    renderProducts() {
        let { products } = this.state;
        return products.map((prod, idx) => {
            return (
                <div key={prod.id} className="list-group-item">
                    <Product value={prod} onBuy={e => this.props.onBuy(e)} />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

export default ProductList;