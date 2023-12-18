import { useState } from 'react';
const Bank = ({ money, onDeposit, onWithdraw }) => {
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
      <h2>잔액 : {money}원</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{' '}
      <button onClick={plus}>입금</button> <button onClick={minus}>출금</button>
    </>
  );
};

export default Bank;
