function Input(props) {
  const setData = props.setData;

  const handleInput = (e) => {
    console.log(e);
    const content = e.target.value;
    console.log(content);
    setData((data) => {
      console.log(data);
      return { ...data, content: content }; //입력하기 직전의 state값이 data에 저장됨
    });
  };
  return (
    <>
      내용 :{' '}
      <input
        type="text"
        onChange={handleInput}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
