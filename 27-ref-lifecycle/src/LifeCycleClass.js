import React, { Component } from 'react';
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      visible: true,
    };
  }

  changeNumberState = () => this.setState({ number: this.state.number + 1 });
  changeVisibleState = () => this.setState({ visible: !this.state.visible });

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>
        {this.state.visible && (
          <LifeCycleClassChild number={this.state.number} />
        )}
      </>
    );
  }
}
