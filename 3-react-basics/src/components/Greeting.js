

import React from 'react';

class Greeting extends React.Component {
    constructor() {
        super();
        console.log("Greeting :: constructor");
    }
    render() {
        console.log("Greeting :: render");
        let { message } = this.props;
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                {new Date().toLocaleTimeString()}
            </div>
        )
    }
}

export default Greeting;