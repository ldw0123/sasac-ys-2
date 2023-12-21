import { useEffect, useState } from 'react';
import '../components/styles/chat.css';
import Chat from './Chat';
import Notice from './Notice';
import io from 'socket.io-client'; // socket.io 모듈 불러오기

const socket = io.connect('http://localhost:8000/', { autoConnect: false });

export default function Chatting1() {
  const [msgInput, setMsgInput] = useState('');
  const [chatList, setChatList] = useState([
    // 더미 데이터
    {
      type: 'my', // 나
      content: '안녕?',
    },
    {
      type: 'other', // 상대방
      content: '응~ 안녕?',
    },
    {
      type: 'notice', // 공지사항
      content: '~~~님이 입장하였습니다',
    },
  ]);

  const initSocketConnect = () => {
    console.log('connected', socket.connected);
    if (!socket.connected) socket.connect();
  };

  // mount 시
  useEffect(() => {
    initSocketConnect();

    // [이슈 1] mount 시에만 한 번 읽고 끝
    // newChatList를 만들 때, mount 시점에 chatList만 이용하게 된다
    // socket.on("notice", (res) => {
    //   const newChatList = [...chatList, { type: "notice", content: res.msg }];
    //   setChatList(newChatList);
    // });
  }, []);

  // chat event가 변경될 때마다 socket을 connect
  useEffect(() => {
    // [이슈 1 해결] chatList가 변경될 때마다 event를 다시 만든다
    // [이슈 2] hatList가 변경될 때마다 event를 다시 만들다 보니, notice 이벤트가 누적된다

    // [이슈 2 해결 최종 코드] return 이용해 notice 이벤트를 제거 후, 다시 생성할 수 있도록 함
    const notice = (res) => {
      console.log('notice');
      // 공지사항을 추가하고, 메시지를 받아온다
      const newChatList = [...chatList, { type: 'notice', content: res.msg }];

      setChatList(newChatList);
    };

    socket.on('notice', notice);
    return () => socket.off('notice', notice);
    // 중복처리되므로 이벤트를 제거했다가 다시 켠다
  }, [chatList]);

  const sendMsg = () => {};

  return (
    <>
      <h3>Socket 실습 2, 3</h3>
      <ul>
        <li>채팅창 UI</li>
        <li>socket ID를 이용하여 누가 입장했는지 공지 띄우기</li>
      </ul>

      <div className="chat-container">
        {chatList.map((chat, i) => {
          if (chat.type === 'notice') return <Notice key={i} chat={chat} />;
          else return <Chat key={i} chat={chat} />;
        })}

        {/* 아래의 코드를 state처리해서 위처럼 만듦 */}
        {/* <div className="list my-chat">
          <div className="content">안녕?</div>
        </div> 
        <div className="list other-chat">
          <div className="content">응~ 안녕?</div>
        </div> */}
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
  );
}
