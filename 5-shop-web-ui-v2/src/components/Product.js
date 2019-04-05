import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';


class Product extends Component {

    state = {
        currentTab: 1,
        reviews: [
            { stars: 5, author: 'who@mail.com', body: 'sample-review-1' },
            { stars: 3, author: 'who@mail.com', body: 'sample-review-2' }
        ]
    }
    changeTab(tabIndex, e) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })
    }
    handleBuy(e) {
        let { value, onBuy } = this.props;
        if (onBuy) {
            onBuy({ item: value, qty: 1 })
        }
    }
    renderBuyBtn(product) {
        if (product.canBuy) return (<button onClick={e => this.handleBuy(e)} className="btn btn-sm btn-dark">buy</button>)
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
    }
    renderTabPanel(product) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return (<div>{product.description}</div>)
            case 2: return (<div>Not Yet</div>)
            case 3: return (<div>{this.renderReviews()}</div>)
            default: return null;
        }
    }
    render() {
        // let product=this.props.value;
        // or
        let { value: product } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
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
                                <a onClick={e => this.changeTab(1, e)} className={classNames('nav-link', { active: currentTab === 1 })} href="/">Description</a>
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
        );
    }
}

export default Product;