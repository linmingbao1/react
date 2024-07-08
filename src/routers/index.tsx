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
      {
        path: '/threejs/listDemo',
        component: '@/pages/threejs/listDemo/index.tsx',
        name: 'listDemo',
      },
      {
        path: '/threejs/guiDemo',
        component: '@/pages/threejs/guiDemo/index.tsx',
        name: 'guiDemo',
      },
      {
        path: '/threejs/geoDemo',
        component: '@/pages/threejs/geoDemo/index.tsx',
        name: 'geoDemo',
      },
      {
        path: '/threejs/modelDemo',
        component: '@/pages/threejs/modelDemo/index.tsx',
        name: 'modelDemo',
      },
      {
        path: '/threejs/groupDemo',
        component: '@/pages/threejs/groupDemo/index.tsx',
        name: 'groupDemo',
      },
      {
        path: '/threejs/texturesDemo',
        component: '@/pages/threejs/texturesDemo/index.tsx',
        name: 'texturesDemo',
      },
      {
        path: '/threejs/PBRDemo',
        component: '@/pages/threejs/PBRDemo/index.tsx',
        name: 'PBRDemo',
      },
    ],
  },
  {
    path: '/leetCode',
    component: '@/pages/leetCode/index.tsx',
    name: 'leetCode',
  },
];

export default routers;
