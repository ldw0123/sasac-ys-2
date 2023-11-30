// 함수형 컴포넌트 Event Handling 실습4

import { useState } from 'react';

function EventClassEx4() {
  const [Fruit, setFruit] = useState('apple');
  const [text, setText] = useState('안녕?');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');

  const ChooseFruit = () => {
    switch (Fruit) {
      case 'apple':
        return <img src="/apple.jpg" style={{ width: '300px' }} />;
      case 'banana':
        return <img src="/banana.jpg" style={{ width: '300px' }} />;
      case 'peach':
        return <img src="/peach.jpg" style={{ width: '300px' }} />;
      case 'orange':
        return <img src="/orange.jpg" style={{ width: '300px' }} />;
    }
  };

  const ChooseBackColor = () => {
    switch (backgroundColor) {
      case 'B-black':
        return 'black';
      case 'B-white':
        return 'white';
      case 'B-red':
        return 'red';
      case 'B-orange':
        return 'orange';
    }
  };

  const ChooseColor = () => {
    switch (textColor) {
      case 'C-black':
        return 'black';
      case 'C-white':
        return 'white';
      case 'C-red':
        return 'red';
      case 'C-orange':
        return 'orange';
    }
  };

  return (
    <>
      <h4>컴포넌트 event handling 실습 4</h4>
      과일:{' '}
      <select value={Fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value={'apple'}>사과</option>
        <option value={'banana'}>바나나</option>
        <option value={'peach'}>복숭아</option>
        <option value={'orange'}>오렌지</option>
      </select>{' '}
      배경색:{' '}
      <select
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      >
        <option value={'B-black'}>검정</option>
        <option value={'B-white'}>하양</option>
        <option value={'B-red'}>빨강</option>
        <option value={'B-orange'}>주황</option>
      </select>{' '}
      글자색:{' '}
      <select value={textColor} onChange={(e) => setTextColor(e.target.value)}>
        <option value={'C-black'}>검정</option>
        <option value={'C-white'}>하양</option>
        <option value={'C-red'}>빨강</option>
        <option value={'C-orange'}>주황</option>
      </select>
      <br />
      내용:{' '}
      <input
        placeholder="내용을 입력하세요"
        onChange={(e) => {
          // onChange로 설정해 주면 입력 잘 됨
          console.log(e.target);
          setText(e.target.value);
        }}
      />
      <br />
      {ChooseFruit()}
      <br />
      <h3 style={{ backgroundColor: ChooseBackColor(), color: ChooseColor() }}>
        {text}
      </h3>
    </>
  );
}

export default EventClassEx4;
