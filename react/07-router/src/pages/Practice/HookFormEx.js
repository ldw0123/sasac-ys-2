//  Hook Form 실습
import { useForm } from 'react-hook-form';

export default function HookFormEx() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log('성공', data);
  };

  const onInvalid = (err) => {
    console.log('실패', err);
  };

  console.log(watch('ID'));

  return (
    <>
      <h4>React Hook Form 실습</h4>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="이름"
          {...register('username', {
            required: ' 이름은 필수로 작성해야 합니다',
            minLength: {
              value: 2,
              message: ' 이름은 두 글자 이상 입력해야 합니다',
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="나이"
          {...register('age', {
            required: ' 나이는 필수로 작성해야 합니다',
            // 방법 1
            min: { value: 0, message: ' 0 이상의 숫자만 입력 가능합니다' },
            // 방법 2: validate 이용
            // validate: {
            //   useNumber: (v) =>
            //     Number(v) >= 0 || '0이상의 숫자만 입력 가능합니다.',
            // },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
