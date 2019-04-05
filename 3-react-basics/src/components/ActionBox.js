

import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.amt;
        this.setState({ totalCount })
    }
    renderActions() {
        let numbers = [1, 2, 3, 4, -5, 6, 7, 8, -9];
        return numbers.map((number, idx) => {
            return <Action key={idx} value={number} onAction={e => this.incrementTotalCount(e)} />
        });
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">Action Box : <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    {
                        /* 
                        <Action value={10} onAction={e => this.incrementTotalCount(e)} />
                        <Action value={-10} onAction={e => this.incrementTotalCount(e)} /> 
                        */
                    }
                    {this.renderActions()}
                    <div style={{ clear: 'both' }}>
                        <Summary value={totalCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionBox;