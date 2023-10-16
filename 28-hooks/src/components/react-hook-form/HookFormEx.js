import React from 'react';
import { useForm } from 'react-hook-form';

export default function HookFormEx() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register('name', {
            required: '이름을 입력해주세요',
            pattern: {
              value: /^[가-힣]{2,5}$/,
              message: '2~5글자의 한글 이름을 입력해주세요',
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />

        <input
          type="number"
          placeholder="나이"
          {...register('age', {
            required: '나이를 입력해주세요',
            min: {
              value: 0,
              message: '나이는 0 이상이어야 합니다',
            },
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
        <br />

        <button type="submit">제출</button>
      </form>
    </div>
  );
}
