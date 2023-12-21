import '../components/styles/chat.css';
import { useCallback, useMemo, useEffect, useState } from 'react';
import Chat from './Chat';
import Notice from './Notice';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000', { autoConnect: false });

export default function Chatting3() {
  const [msgInput, setMsgInput] = useState('');
  const [userIdInput, setUserIdInput] = useState('');
  const [chatList, setChatList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState({});
  const [dmTo, setDmTo] = useState('all');

  const initSocketConnect = () => {
    console.log('connected', socket.connected);
    if (!socket.connected) socket.connect();
  };

  // [실습 3-2] 닉네임 중복 방지
  // mount 시점에
  useEffect(() => {
    // initSocketConnect();

    socket.on('error', (res) => {
      alert(res.msg);
    });

    // 선수 입장
    socket.on('entrySuccess', (res) => {
      setUserId(res.userId);
    });

    // 유저를 알려줌
    socket.on('userList', (res) => {
      setUserList(res);
    });
  }, []);

  // [실습 5]
  // useMemo: 값을 메모라이징한다
  // 의존성 배열에 있는 값이 update될 때마다 연산을 실행한다
  const userListOptions = useMemo(() => {
    // jsx에서의 배열 문법
    // [<option></option>, <option></option>];
    const options = [];

    // for in : 뒤의 배열을 하나씩 탐색
    // for of : 뒤의 객체를 하나씩 탐색
    for (const key in userList) {
      // key: userList의 key값 (= socket.id값)
      // userList[key]: userList의 value값 (= 사용자가 입력한 id)
      if (userList[key] === userId) continue;

      options.push(
        <option key={key} value={key}>
          {userList[key]}
        </option>
      );
    }
    return options;
  }, [userList]);

  // [실습 4, 5]
  // Chatting3 컴포넌트가 리로딩이 되면 위의 코드를 쭉 읽어들인다
  // useCallback: 함수를 메모라이징한다. 뒤에 있는 의존성 배열에 있는 값이 업데이트 될 때만 함수를 다시 선언한다. 그렇지 않은 경우, 기존에 있던 함수를 계속 사용한다.
  const addChatList = useCallback(
    (res) => {
      // 서버에서 송신한 userId와 내 userId가 같다면 type의 값은 my, 다르면 other
      const type = res.userId === userId ? 'my' : 'other';

      // DM
      const content = `${res.dm ? '(속닥속닥) ' : ''} ${res.userId}: ${
        res.msg
      }`;

      const newChatList = [...chatList, { type: type, content: content }];
      setChatList(newChatList);
    },
    // userId와 chatList가 변경될 때마다 함수를 다시 선언
    [userId, chatList]
  );

  useEffect(() => {
    socket.on('chat', addChatList);
    return () => socket.off('chat', addChatList);
  }, [addChatList]);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: 'notice', content: res.msg }];
      setChatList(newChatList);
    };

    socket.on('notice', notice);
    return () => socket.off('notice', notice);
  }, [chatList]);

  // [실습 4, 5]
  const sendMsg = () => {
    // 메시지가 비어있지 않을 경우 송신
    if (msgInput !== '') {
      socket.emit('sendMsg', { userId: userId, msg: msgInput, dm: dmTo });
      setMsgInput('');
    }
  };

  const entryChat = () => {
    initSocketConnect();
    socket.emit('entry', { userId: userIdInput });
    // [실습 3-2] 바로 userId에 값을 할당하지 않고
    // setUserId(userIdInput); // success
  };

  return (
    <>
      <h3>실습 4, 5번</h3>
      <ul>
        <li>채팅창 메시지 전송</li>
        <li>DM 기능 구현</li>
      </ul>

      {userId ? (
        <>
          <div>{userId}님 환영합니다.</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === 'notice') return <Notice key={i} chat={chat} />;
              else return <Chat key={i} chat={chat} />;
            })}
          </div>
          <div className="input-container">
            {/* [실습 5] DM 기능 구현 */}
            <select value={dmTo} onChange={(e) => setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userListOptions}
            </select>

            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : (
        <>
          <div className="input-container">
            <input
              type="text"
              value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
            />
            <button onClick={entryChat}>입장</button>
          </div>
        </>
      )}
    </>
  );
}
