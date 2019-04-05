import React, { Component } from 'react';

class Summary extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="card card-body">
                <div className="alert alert-danger">
                    Total Actions : <span className="badge badge-dark">{value}</span>
                </div>
            </div>
        );
    }
}

export default Summary;