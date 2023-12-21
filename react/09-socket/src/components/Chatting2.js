import '../components/styles/chat.css';
import { useEffect, useState } from 'react';
import Chat from './Chat';
import Notice from './Notice';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8000', { autoConnect: false });
export default function Chatting2() {
  const [msgInput, setMsgInput] = useState('');
  const [userIdInput, setUserIdInput] = useState('');
  const [chatList, setChatList] = useState([
    // 더미 데이터
    {
      type: 'my',
      content: '안녕?',
    },
    {
      type: 'other',
      content: '응 안녕?',
    },
    {
      type: 'notice',
      content: '~~~~~~님이 입장하셨습니다.',
    },
  ]);
  const [userId, setUserId] = useState(null);
  const initSocketConnect = () => {
    console.log('connected', socket.connected);
    if (!socket.connected) socket.connect();
  };

  // [실습 3-2] 닉네임 중복 방지
  useEffect(() => {
    // initSocketConnect();

    socket.on('error', (res) => {
      alert(res.msg);
    });

    // 선수 입장 (mount 시점에)
    socket.on('entrySuccess', (res) => {
      setUserId(res.userId);
    });
  }, []);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: 'notice', content: res.msg }];
      setChatList(newChatList);
    };

    socket.on('notice', notice);
    return () => socket.off('notice', notice);
  }, [chatList]);

  const sendMsg = () => {};

  const entryChat = () => {
    initSocketConnect();
    socket.emit('entry', { userId: userIdInput });
    // [실습 3-2] 바로 userId에 값을 할당하지 않고
    // setUserId(userIdInput); // success
  };

  return (
    <>
      <h3>실습 3-1, 3-2, 3-3번</h3>
      <ul>
        <li>닉네임 입력받고 입장 시키기</li>
        <li>닉네임 중복 방지</li>
        <li>퇴장 시키기</li>
      </ul>

      {userId ? (
        <>
          <div>{userId}님 환영합니다</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === 'notice') return <Notice key={i} chat={chat} />;
              else return <Chat key={i} chat={chat} />;
            })}
          </div>
          <div className="input-container">
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
