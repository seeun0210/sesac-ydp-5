import React from 'react';
import PropTypes from 'prop-types';
import img from './grass.png';
const Props = ({ title, author, price, type }) => {
  //   const { name } = props;
  //   props가 여러개있다면 구조분해해서사용하는것이 좋겠지?

  return (
    <div className="all">
      <div className="best">이번주 베스트 셀러</div>
      <img src={img}></img>
      <h1 className="title">{title}</h1>
      <p className="content">저자:{author}</p>
      <p className="content">판매가:{price}</p>
      <p className="content">구분:{type}</p>
    </div>
  );
};
export default Props;
