import styled from 'styled-components';

// styled-components : css의 네이밍 중복을 방지한다
// css in js (style-jsx) : js 안에서 css를 사용할 수 있도록 도와준다

// const 컨테이너 = styled.태그 이름 `스타일`
const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || 'black'};

  &:hover {
    transform: scale(1.2);
  }
`;
// 백틱 내부에서 변수 사용: ${}
// props 객체 (props: 컴포넌트의 속성)를 받아서 color를 사용하겠다는 뜻
// props.color 속성값이 false라면 기본적으로 black을 사용하도록 지정

export default function StyledComponent() {
  return (
    <>
      <h2>styled-components</h2>
      <Container>
        <Box color="red"></Box>
        <Box color="orange"></Box>
        <Box color="yellow"></Box>
        <Box color="green"></Box>
        <Box color="blue"></Box>
        <Box color="purple"></Box>

        {/* <div className="origin">
          <div className="box red"></div>
          <div className="box orange"></div>
          <div className="box yellow"></div>
          <div className="box green"></div>
          <div className="box blue"></div>
          <div className="box purple"></div>
        </div> */}
      </Container>
    </>
  );
}
