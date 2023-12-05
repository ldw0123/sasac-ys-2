// 일반적인 css 방식을 사용한 컴포넌트
import '../styles/origin.css'; // css 사용하기

function OriginCss() {
  return (
    <>
      <div className="origin">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
        <div className="box green"></div>
        <div className="box blue"></div>
        <div className="box purple"></div>
      </div>
    </>
  );
}

export default OriginCss;
