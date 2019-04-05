import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting'
import ActionBox from './components/ActionBox';
import Layout from './components/Layout'
import Veg from './components/Veg'
import NonVeg from './components/NonVeg'
import A from './components/A'


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
        <A color="red" />
        <A color="green" />
        <A color="blue" />
        <hr />
        <Layout>
          <Veg />
          <Veg />
        </Layout>
        <Layout>
          <NonVeg />
          <NonVeg />
          <NonVeg />
        </Layout>
        <hr />
        <ActionBox />
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage('')} className="btn btn-danger">Remove Greeting</button>&nbsp;
        <hr />

        {message ? <Greeting message={message} /> : null}

      </div>
    );
  }
  componentDidMount() {
    console.log("App :: componentDidMount()");
    // n/w call
    // setTimeout(() => {
    //   let response = "Hello React! Hope u r rocking at broweser side"
    //   this.setState({ message: response })
    // }, 3000);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App :: componentDidUpdate()");
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
