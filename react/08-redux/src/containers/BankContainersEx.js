// Redux 실습
import { useSelector, useDispatch } from 'react-redux';
import BankEx from '../components/BankEx';
import { deposit, withdraw } from '../store/bankReducerEx';

export const BankContainersEx = () => {
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  return (
    <>
      <BankEx
        money={money}
        onDeposit={(payload) => dispatch({ ...deposit(), payload: payload })}
        onWithdraw={(payload) => dispatch({ ...withdraw(), payload: payload })}
      />
    </>
  );
};
