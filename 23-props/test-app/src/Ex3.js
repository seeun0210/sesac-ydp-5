import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Props_ex3 extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <br />
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

Props_ex3.defaultProps = {
  text: '이건 기본 text props입니다.',
};

Props_ex3.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Props_ex3;
