

import React, { Component } from 'react';
import Action from './Action';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount() {
        let { totalCount } = this.state;
        totalCount += 1;
        this.setState({ totalCount })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">Action Box : <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    <Action value={10} onAction={e => this.incrementTotalCount()} />
                    <Action value={-10} onAction={e => this.incrementTotalCount()} />
                </div>
            </div>
        );
    }
}

export default ActionBox;