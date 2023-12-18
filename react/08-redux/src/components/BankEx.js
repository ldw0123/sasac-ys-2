// Redux 실습
import { useState } from 'react';

const BankEx = ({ money, onDeposit, onWithdraw }) => {
  const [input, setInput] = useState('');

  const plus = () => {
    onDeposit(Number(input));
    setInput('');
  };

  const minus = () => {
    onWithdraw(Number(input));
    setInput('');
  };

  return (
    <>
      <h3>코딩온 은행</h3>
      <h3>잔액 : {money}원</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={plus}>입금</button>
      <button onClick={minus}>출금</button>
    </>
  );
};

export default BankEx;
