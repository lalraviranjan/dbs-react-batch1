import React, { Component } from 'react';
import './Action.css'

class Action extends Component {
    state = {
        count: 0
    }
    incremetCount() {
        let { count } = this.state;
        count += 1;
        this.setState({ count })
        let { onAction } = this.props;
        if (onAction) {
            onAction();
        }
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div className="action">
                <div className="card card-body">
                    <button onClick={e => this.incremetCount()} className="btn btn-primary">{value}</button>
                    <hr />
                    <span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;