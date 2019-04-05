import React, { Component } from 'react';
import ColorContext from './ColorContext';

class C extends Component {
    render() {
        return (
            <div className="card card-body">
                <span className="badge badge-dark">C component</span>
                <ColorContext.Consumer>
                    {value => value}
                </ColorContext.Consumer>
            </div>
        );
    }
}

export default C;