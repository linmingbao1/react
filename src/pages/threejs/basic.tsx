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

  function animate() {
    renderer.render(scene, camera);
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
