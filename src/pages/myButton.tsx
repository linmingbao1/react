import { Button } from 'antd';
import { RefObject } from 'react';
import styles from './index.css';
interface MyButtonProps {
  title?: string;
  value: string;
  addMoney: (val: number) => void;
  welcome: RefObject<HTMLElement>;
  color: string;
}

export default function MyButton({
  title = '200',
  value,
  welcome,
  addMoney,
  color,
}: MyButtonProps) {
  const getTitle = (val: string) => {
    return val.replace('My', '');
  };

  const logValue = (val: string) => {
    return () => {
      addMoney(5);
      if (welcome.current) {
        welcome.current.textContent = val;
        welcome.current.style.color =
          welcome.current.style.color == 'red' ? color : 'red';
        welcome.current.onclick = () => {
          welcome.current.textContent = 'clicked';
          welcome.current.style.cursor = 'pointer';
        };
      }

      console.log(welcome);
    };
  };

  return (
    <div className={styles.margin}>
      <Button onClick={logValue(value)}>{getTitle(title)}</Button>
    </div>
  );
}
