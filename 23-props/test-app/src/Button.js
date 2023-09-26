import './Button.css';
const Button = (props) => {
  const { link, children } = props;
  return (
    <a href={link}>
      {/* 부모컨포넌트의 google이라는 값이 props.children으로 들어감 */}
      <button className="Button">{children}</button>
    </a>
  );
};
export default Button;
