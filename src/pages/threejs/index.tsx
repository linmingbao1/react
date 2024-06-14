import { Link, Outlet } from 'umi';

const ThreeJs = () => {
  const list = [
    {
      name: 'basicDemo',
      url: '/threejs/basicDemo',
    },
    {
      name: 'lineDemo',
      url: '/threejs/lineDemo',
    },
    {
      name: 'fontDemo',
      url: '/threejs/fontDemo',
    },
    {
      name: '3DDemo',
      url: '/threejs/3DDemo',
    },
  ];
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.name}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
export default ThreeJs;
