import { selectCount } from '@/store/counter/counterSlice';
import { useReducer, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import yayJpg from '../assets/yay.jpg';
import styles from './index.css';
import MyButton from './myButton';

interface Action {
  type: string;
}
interface State {
  color?: string;
}
const turnReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'red':
      return { ...state, color: 'red' };
    case 'green':
      return { ...state, color: 'green' };
    default:
      return { ...state, color: 'skyblue' };
  }
};

export default function HomePage() {
  const count = useSelector(selectCount);
  let [money, setMoney] = useState(0);
  let [state, dispatch] = useReducer(turnReducer, { color: 'skyblue' });

  const list = [
    { name: 'MyButton', value: 'MyButton' },
    { name: undefined, value: '' },
  ];

  const addMoney = (value: number) => {
    console.log(money);
    setMoney(money + value);
  };

  const ButtonList = () => {
    return (
      <div className={styles.buttonList}>
        {list.map((item, index) => {
          return (
            <MyButton
              welcome={welcome}
              key={index}
              title={item.name}
              value={item.value}
              addMoney={addMoney}
              color={state.color}
            ></MyButton>
          );
        })}
      </div>
    );
  };

  const welcome = useRef(null);

  return (
    <div>
      <h2 ref={welcome} className="welcome">
        Yay! Welcome to umi!
      </h2>

      <p>this is store count {count}</p>
      <p
        onClick={() => {
          dispatch({ type: 'red' });
        }}
        style={{ color: state.color }}
      >
        I have so many money , {money}. you can click to change color,now,the
        color is {state.color}
      </p>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <ButtonList></ButtonList>
    </div>
  );
}
