import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting'
import ActionBox from './components/ActionBox';

class App extends Component {

  state = {
    message: 'greetings'
  }

  constructor(props) {
    super();
    //console.log(props);
    console.log("App :: constructor");
  }

  changeMessage(message) {
    this.setState({ message: message });
  }

  render() {
    console.log("App :: render");

    // let title = this.props.title;
    // let trainer = this.props.trainer;

    // or

    let { title, trainer } = this.props;  // de-structuring
    let { message } = this.state;

    // this.props.trainer = "New Trainer"; // illegal, becoz all props by default immutable in react component

    return (
      <div className="container">
        <hr />
        <h1>{title}</h1> by {trainer}
        <hr />
        <ActionBox />
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <hr />

        <Greeting message={message} />

      </div>
    );
  }
}

App.defaultProps = {
  trainer: 'Anonymous'
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}

export default App;
