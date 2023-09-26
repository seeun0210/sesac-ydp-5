import React from 'react';

const PropsEx1 = (props) => {
  return (
    <h1>
      내가 좋아하는 음식: <span style={{ color: 'Red' }}>{props.food}</span>
    </h1>
  );
};
PropsEx1.defaultProps = {
  food: '엽기닭볶음탕',
};
export default PropsEx1;
