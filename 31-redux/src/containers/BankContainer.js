import Bank from '../Bank';
import { useSelector, useDispatch } from 'react-redux';
import { bankReducer } from '../store/bankReducer';
import { deposit, withdraw } from '../store/bankReducer';
export const BankContainer = () => {
  const money = useSelector((state) => state.money.money);
  const dispatch = useDispatch();
  return (
    <Bank
      money={money}
      onDeposit={() => dispatch(deposit(money))}
      onWithDraw={() => dispatch(withdraw(money))}
    />
  );
};
