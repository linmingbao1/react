const routers = [
  { path: '/', component: '@/pages/index.tsx', name: '首页' },
  { path: '/docs', component: '@/pages/docs.tsx', name: '文档' },
  { path: '/demo1', component: '@/pages/demo1/index.jsx', name: 'demo1' },
  {
    path: '/storeDemo',
    component: '@/pages/storeDemo/index.tsx',
    name: 'storeDemo',
  },
  {
    path: '/todoList',
    component: '@/pages/todoList/index.tsx',
    name: 'todoList',
  },
  {
    path: '/threejs',
    component: '@/pages/threejs/index.tsx',
    name: 'Threejs',
    routes: [
      {
        path: '/threejs/basicDemo',
        component: '@/pages/threejs/basicDemo/index.tsx',
        name: 'basicDemo',
      },
      {
        path: '/threejs/lineDemo',
        component: '@/pages/threejs/lineDemo/index.tsx',
        name: 'lineDemo',
      },
      {
        path: '/threejs/fontDemo',
        component: '@/pages/threejs/fontDemo/index.tsx',
        name: 'fontDemo',
      },
      {
        path: '/threejs/3DDemo',
        component: '@/pages/threejs/3DDemo/index.tsx',
        name: '3DDemo',
      },
    ],
  },
];

export default routers;
