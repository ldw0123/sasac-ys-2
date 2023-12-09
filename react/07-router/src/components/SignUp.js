// ⭐ Hook Form
import { useForm } from 'react-hook-form';

export default function SignUp() {
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

  // 변수로 지정해서 사용 가능
  const genderRegister = register('gender', {
    required: '성별은 필수값입니다.',
  });

  // watch() 함수: 실시간으로 입력값 확인
  console.log(watch('ID'));

  return (
    <>
      <h4>React Hook Form 테스트</h4>
      {/* handleSubmit(onValid[, onInvalid] ) */}
      {/* onValid : 폼을 성공적으로 전송할 수 있는 상태가 되었을 때 onValid 콜백함수를 실행 */}
      {/* onInvalid : (대괄호 안은 선택값)폼을 제출할 수 없을 때 onInvalid 콜백함수를 실행 */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        {/* register(인자 1 name, 인자 2 객체(정규표현식)) */}
        {/* register("ID") 함수는 { name: id } 객체를 반환하므로 스프레드 연산자 이용 */}
        <input
          type="text"
          placeholder="아이디"
          {...register('ID', {
            required: '아이디는 필수로 작성해야 합니다',
          })}
        />
        {/* errors 객체에 ID가 있으면 */}
        {/* errors.ID && errors.ID.message 와 아래 코드는 거의 동일 */}
        {errors.ID?.message}
        <br />
        <input
          type="text"
          placeholder="이름"
          {...register('username', {
            required: '이름은 필수로 작성해야 합니다',
            // minLength: 2, // 2글자 이상 입력해야 함
            minLength: {
              // minLength는 객체로도 넘길 수 있다
              value: 2, // 최소값 지정
              message: '이름은 두 글자 이상 입력해야 합니다', // 최소값을 만족하지 못 했을 때, 발생시키는 오류 메시지
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="이메일"
          {...register('email', {
            required: '이메일은 필수로 작성해야 합니다',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/, // 정규식 지정
              message: '올바른 형태의 이메일을 입력해 주세요', // 정규식을 만족하지 못했을 때, 발생시키는 오류 메세지
            },
            // validate(v) 함수 : 입력된 값 v가 'gmail.com'을 포함(.includes)하는지 확인하고, 포함하는 경우에는 유효한 값으로 판단한다. 그렇지 않은 경우에는 에러 메시지가 반환
            validate: (v) =>
              v.includes('gmail.com') || 'gmail로만 가입이 가능합니다.',
          })}
        />
        {errors.email?.message}
        <br />
        {/* label 태그의 htmlFor 속성은 for 속성과 같다. 텍스트를 클릭하기만 해도 클릭됨 */}
        <label htmlFor="gender-man">
          <input type="radio" value="남" id="gender-man" {...genderRegister} />
          남
        </label>
        <label htmlFor="gender-woman">
          <input
            type="radio"
            value="여"
            id="gender-woman"
            {...genderRegister}
          />
          여
        </label>{' '}
        {errors.gender?.message}
        <br />
        <select
          {...register('option', { required: '옵션은 필수로 작성해야 합니다' })}
        >
          <option value="">옵션</option>
          <option value="option-1">옵션1</option>
          <option value="option-2">옵션2</option>
          <option value="option-3">옵션3</option>
        </select>{' '}
        {errors.option?.message}
        <br />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
