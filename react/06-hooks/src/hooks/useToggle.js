// custom hooks
// 컴포넌트가 아니기 때문에 소문자로 시작. use~~ 로 시작하는 것이 관례

import { useState } from 'react';

// toggle기능이 자주 쓰이는데, true일 경우 false로, false일 경우 true로 변환시킨다
// 이에 따라 처리를 할 일이 자주 생긴다고 가정해서 hook으로 만들어 준다
export default function useToggle() {
  const [value, setValue] = useState(false);
  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}
