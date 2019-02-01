import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { varA, funcB } from './components/Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.panggilData = this.panggilData.bind(this);
    this.panggilDelayData = this.panggilDelayData.bind(this);
    this.setState({
      drugs: []
    });
  }

  componentWillMount() {
    this.panggilDelayData();
  }

  state = {
    drugs: []
  };

  panggilDelayData = () => {
    setTimeout(this.panggilData, 100);
  };

  panggilData = () => {

    fetch('http://localhost:8081/viewDrug')
    .then(res => res.json())
    .then(res => {
      this.setState({
        drugs: JSON.stringify(res.result)
      });
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <span onClick={this.panggilDelayData}>helo wol</span>
        <span>|{this.state.drugs}|</span>
      </div>
    );
  }
}

export default App;
