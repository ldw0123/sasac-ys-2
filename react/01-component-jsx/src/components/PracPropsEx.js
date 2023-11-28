// 함수형 컴포넌트 props 실습
// 새로운 파일을 하나 만들어주세요. 그리고 본인이 좋아하는 음식을 소개하는 문구를 작성해주세요.
// food라는 props를 생성하세요.
// props 기본값을 설정하여 food에 값이 없을 때도 기본값이 출력되도록 해주세요.
// food props만 빨간색 출력되도록 설정해주세요.

function PracPropsEx({ food, title, author, price, type }) {
  return (
    <>
      <div>
        <h5>
          제가 좋아하는 음식은 <span className="PracPropsEx__food">{food}</span>
          입니다
        </h5>
      </div>
      <div>
        <h2 style={{ color: 'rgb(249, 171, 75)' }}>이번주 베스트셀러</h2>
        <img src="/4_30.jpg" style={{ width: '200px' }} />
        <h3>{title}</h3>
        저자: {author} <br />
        판매가: {price} <br />
        구분: {type}
      </div>
      <br />
    </>
  );
}

PracPropsEx.defaultProps = {
  food: '깍두기',
};

function PracBook({ title, author, price, type }) {}

export default PracPropsEx;
