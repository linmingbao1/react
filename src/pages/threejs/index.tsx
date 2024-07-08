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
    {
      name: '循环Demo',
      url: '/threejs/listDemo',
    },
    {
      name: 'GuiDemo',
      url: '/threejs/guiDemo',
    },
    {
      name: '几何体顶点位置数据和点模型',
      url: '/threejs/geoDemo',
    },
    {
      name: '模型对象、材质',
      url: '/threejs/modelDemo',
    },
    {
      name: '层级模型',
      url: '/threejs/groupDemo',
    },
    {
      name: '纹理贴图',
      url: '/threejs/texturesDemo',
    },
    {
      name: 'PBR材质',
      url: '/threejs/PBRDemo',
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
