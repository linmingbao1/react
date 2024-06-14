import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
  selectStatus,
} from '@/store/counter/counterSlice';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.css';

const storeDemo = () => {
  const count = useSelector(selectCount);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(10);
  return (
    <>
      <div>storeDemo</div>
      <div className={styles.counter}>{count}</div>
      <div className={styles.counter}>{status}</div>

      <div className={styles.con}>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Input
          defaultValue={number}
          type="number"
          className={styles.input}
          onChange={(val) => {
            console.log(val);
            setNumber(Number(val.target.value));
          }}
        ></Input>
        <Button onClick={() => dispatch(incrementByAmount(number))}>
          changeAmount
        </Button>

        <Button onClick={() => dispatch(incrementAsync(number) as any)}>
          changeAmountSync
        </Button>
      </div>
    </>
  );
};
export default storeDemo;
