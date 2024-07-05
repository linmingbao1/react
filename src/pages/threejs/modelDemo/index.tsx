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

  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const geometry1 = new THREE.BoxGeometry(50, 50, 50);

  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const material1 = material.clone();

  material.transparent = true;
  material.opacity = 0.5;

  const mesh = new THREE.Mesh(geometry, material);
  const mesh1 = new THREE.Mesh(geometry1, material1);
  // const mesh1 = mesh.clone();
  // mesh1.material = mesh.material.clone();
  // 修改大小
  mesh1.scale.set(0.4, 0.5, 1);
  mesh.geometry.scale(0.4, 0.5, 1);

  scene.add(mesh);
  scene.add(mesh1);

  function animate() {
    renderer.render(scene, camera);
    const axis = new THREE.Vector3(0, 1, 0); //向量axis
    mesh.rotateOnAxis(axis, 0.02);
    mesh1.rotateOnAxis(axis, -0.01);
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
    <>
      <div ref={domRef}></div>
    </>
  );
};

export default ModelDemo;
