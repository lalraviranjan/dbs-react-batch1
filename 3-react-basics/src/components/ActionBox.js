

import React, { Component } from 'react';
import Action from './Action';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.amt;
        this.setState({ totalCount })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">Action Box : <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    <Action value={10} onAction={e => this.incrementTotalCount(e)} />
                    <Action value={-10} onAction={e => this.incrementTotalCount(e)} />
                </div>
            </div>
        );
    }
}

export default ActionBox;