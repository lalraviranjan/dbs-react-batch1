

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
    componentDidMount() {
        console.log("Greeting :: componentDidMount()");
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greeting :: componentDidUpdate()");
    }
    componentWillUnmount() {
        console.log("Greeting :: componentWillUnmount()");
        clearInterval(this.interval);
    }
}

export default Greeting;