import React, { Component } from 'react';

class CartBadge extends Component {
    render() {
        let { value } = this.props;
        return (
            <div>
                <i className="fa fa-shopping-cart"></i>
                <span className="badge badge-danger">{value}</span>
                &nbsp;item{value > 1 ? 's' : ''} in cart
            </div>
        );
    }
}

export default CartBadge;