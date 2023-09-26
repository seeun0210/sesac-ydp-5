import PropTypes from 'prop-types';

// export default function FunctionComponent(props) {
export default function FunctionComponent({ name }) {
  const student = 'SeEun';
  //   const { name } = props;
  //   props가 여러개있다면 구조분해해서사용하는것이 좋겠지?

  return (
    <div>
      <h1>Hi {student}!</h1>
      <p>여기는 FunctionComponent</p>
      {/* <p>
        새로운 컴포넌트의 이름은 <b>{props.name}</b>
      </p> */}
      {/* 위의 코드와 같은 코드 */}
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}
FunctionComponent.defaultProps = {
  name: '홍길동',
};
FunctionComponent.propTypes = {
  name: PropTypes.string,
};
