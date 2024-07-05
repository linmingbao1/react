import { init } from '@/utils/threejs';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const ModelDemo = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const [THREE, scene, camera, axesHelper, pointLight, renderer] = init();

  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  // 当场景循环时不需要再重新render
  controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
  }); //监听鼠标、键盘事件

  //创建两个网格模型mesh1、mesh2
  const geometry = new THREE.BoxGeometry(20, 20, 20);
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff });

  pointLight.position.set(30, 30, 30);
  pointLight.intensity = 20000;

  const group = new THREE.Group();
  const mesh1 = new THREE.Mesh(geometry, material);
  const mesh2 = new THREE.Mesh(geometry, material);

  mesh1.material = material.clone();
  mesh1.material.color = new THREE.Color(0x92f084);
  mesh2.material.color.set(0xf80c0c);
  const axis = new THREE.Vector3(1, 1, 1);
  mesh2.translateOnAxis(axis, 10);
  // //把mesh1型插入到组group中，mesh1作为group的子对象
  // group.add(mesh1);
  // //把mesh2型插入到组group中，mesh2作为group的子对象
  // group.add(mesh2);

  // 可以同时添加多个对象
  group.add(mesh1, mesh2);

  // mesh也可以添加子对象
  mesh2.add(mesh1);
  // 移除对象
  // mesh2.remove(mesh1);
  // 模型显示隐藏
  // mesh2.visible = false;

  //可视化mesh的局部坐标系
  const meshAxesHelper = new THREE.AxesHelper(50);
  mesh2.add(meshAxesHelper);

  mesh1.translateX(-25);
  //把group插入到场景中作为场景子对象
  scene.add(group);

  console.log(group);

  function animate() {
    renderer.render(scene, camera);
    group.rotateY(-0.01);
    group.rotation.x += 0.01;
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    domRef.current?.appendChild(renderer.domElement);
    animate();
    return () => {
      renderer.dispose();
    };
  }, []);
  return (
    <div>
      <div ref={domRef}></div>
    </div>
  );
};

export default ModelDemo;
