import { init } from '@/utils/threejs';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ListDemo = () => {
  const domRef = useRef<HTMLDivElement>(null);

  const [THREE, scene, camera, axesHelper, pointLight, renderer] = init();
  // 移除环境光
  // scene.remove(pointLight);
  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.target.set(100, 100, 0);
  // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  // 当场景循环时不需要再重新render
  controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
  }); //监听鼠标、键盘事件

  const geoMetry = new THREE.CylinderGeometry(9, 9, 10);
  const material = new THREE.MeshLambertMaterial({
    color: 0xff00ff,
    transparent: true,
    opacity: 0.5,
  });
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i <= j; i++) {
      const mesh = new THREE.Mesh(geoMetry, material);
      mesh.position.set(i * 20, j * 20, 0);
      scene.add(mesh);
      // renderer.render(scene, camera);
    }
  }

  const material2 = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    shininess: 20, //高光部分的亮度，默认30
    specular: 0xffffff, //高光部分的颜色
  });
  for (let j = 0; j <= 3; j++) {
    for (let i = j + 1; i <= 4; i++) {
      const mesh = new THREE.Mesh(geoMetry, material2);
      mesh.position.set(i * 20, j * 20, 0);
      scene.add(mesh);
      // renderer.render(scene, camera);
    }
  }

  useEffect(() => {
    domRef.current?.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div ref={domRef}></div>
    </>
  );
};
export default ListDemo;
