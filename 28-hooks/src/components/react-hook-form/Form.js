import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, //input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    watch, //특정 폼 필드의 값을 실시간으로 사용
    formState: { errors }, //폼 상태 객체
  } = useForm(); //useForm주요 키워드 객체 구조분해로 빼옴

  //handleSubmit(FucA[,FuncB]):두개의 함수를 받음
  //   -FuncA:필수, 유효할 떄 실행
  //   -FuncB:선택, 유효하지 않을 떄 실행
  const onValid = (data) => {
    console.log('onValid', data);
  };
  const onInValid = (err) => {
    console.log('onInValid', err);
  };
  console.log('error', errors);
  console.log('watch', watch('username')); //username의 값이 변경되는게 실시간으로 찍힘
  //   폼 안의 input들 중에서 조건을 만족하지 않는 객체만 반환함
  //   만약 이메일 입력하지 않으면 email
  // {type: 'required', message: '이메일을 입력해주세요', ref: input}
  // 둘다 입력하지 않으면
  // email
  // :
  // {type: 'required', message: '이메일을 입력해주세요', ref: input}
  // username
  // :
  // {type: 'required', message: '이름을 입력해주세요', ref: input}
  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="username"
          {...register('username', {
            required: '이름을 입력해주세요',
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요',
              value: 2,
            },
          })}
        />
        {errors.username?.message}
        {/* errors객체에 username이 있으면 그 메세지 보여주기 */}
        <br />
        <input
          type="email"
          placeholder="email"
          {...register('email', {
            required: '이메일을 입력해주세요',
            validate: {
              useGmail: (v) =>
                v.includes('gmail.com') || 'gmail로만 가입 가능합니다.',
            },
          })}
        />
        {errors.email?.message}
        <br />
        <input type="text" placeholder="password" {...register('password')} />
        {/* 어떠한 유효성 검사도 걸고 싶지 않다면 validate를 걸지 않으면 된다 */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
