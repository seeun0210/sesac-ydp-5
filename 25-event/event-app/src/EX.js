import { Component } from 'react';
class HandlerEx extends Component {
  state = { msg: 'Hello World!' };
  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1>{msg}</h1>
        <button
          onClick={() => {
            this.setState({ msg: 'Goodbye World!' });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}
export default HandlerEx;
