import store from '@/store/store';
import { Provider } from 'react-redux';
import { Link, Outlet } from 'umi';
import './index.less';
import styles from './index.less';

export default function Layout() {
  return (
    <Provider store={store}>
      <div className={styles.navs}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <Link to="/demo1">reducer and useContext</Link>
          </li>
          <li>
            <Link to="/storeDemo">storeDemo</Link>
          </li>

          <li>
            <Link to="/todoList">todoList</Link>
          </li>

          <li>
            <Link to="/threejs">three.js</Link>
          </li>

          <li>
            <Link to="/leetCode">leetCode</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </Provider>
  );
}
