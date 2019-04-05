import React, { Component } from 'react';
import C from './C';

class B extends Component {
    render() {
        return (
            <div className="card card-body">
                <span className="badge badge-dark">B component</span>
                <C />
            </div>
        );
    }
}

export default B;