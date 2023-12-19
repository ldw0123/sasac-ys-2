import { useEffect, useRef } from 'react';
import io from 'socket.io-client'; // 소켓 불러오기

// 소켓 객체를 생성해서 서버 열기
// autoConnect옵션 false: 자동으로 connecting하지 않겠다
const socket = io.connect('http://localhost:8000', { autoConnect: false });

export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect(); // 연결이 안 되어 있을 때만 연결을 하겠다
  };

  useEffect(() => {
    // mount 될 때 실행
    initSocketConnect();

    socket.on('resHello', (res) => {
      console.log(res);
      resultMsg(res);
    });

    socket.on('resStudy', (res) => {
      console.log(res);
      resultMsg(res);
    });

    socket.on('resBye', (res) => {
      console.log(res);
      resultMsg(res);
    });
  }, []);

  const resultMsg = (res) => {
    // node의 server1.js에서 보낸 res.msg
    result.current.innerText = res.msg;
  };

  const hello = () => {
    socket.emit('hello', { msg: '헬로' });
  };

  const study = () => {
    socket.emit('study', { msg: '공부 시러' });
  };

  const bye = () => {
    socket.emit('bye', { msg: '빠이' });
  };

  const result = useRef(null);

  return (
    <>
      <h3>소켓 공부 1</h3>
      <button onClick={hello}>hello</button>{' '}
      <button onClick={study}>study</button> <button onClick={bye}>bye</button>
      <p ref={result}></p>
    </>
  );
}
