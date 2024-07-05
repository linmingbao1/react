import { init } from '@/utils/threejs';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { useEffect, useRef } from 'react';
const GuiDemo = () => {
  const gui = new dat.GUI();
  const domRef = useRef<HTMLDivElement>(null);
  const [THREE, scene, camera, axesHelper, pointLight, renderer] = init();
  camera.position.set(1, 1, 1);

  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  // // 当场景循环时不需要再重新render
  // controls.addEventListener('change', function () {
  //   // stats.update();
  //   renderer.render(scene, camera); //执行渲染操作
  // }); //监听鼠标、键盘事件
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshLambertMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  const obj = {
    color: 0x00ffff,
    rotate: false,
  };
  function animate() {
    renderer.render(scene, camera);
    if (obj.rotate) {
      mesh.rotateY(-0.01);
    } else {
      mesh.rotateY(0.01);
    }
    requestAnimationFrame(animate);
  }

  console.log(pointLight);

  // gui.addColor(pointLight, 'color').name('光照颜色');
  gui
    .addColor(obj, 'color')
    .name('光照颜色')
    .onChange(() => {
      pointLight.color = new THREE.Color(obj.color);
    });

  gui.add(pointLight, 'intensity', 0, 20000).name('光照强度');
  gui.add(mesh.position, 'x', [1, 2, 3, 4, 5]).name('X轴');
  gui.add(mesh.position, 'y', 0, 5).name('y轴');
  gui.add(mesh.position, 'z', 0, 5).name('z轴');
  gui.add(obj, 'rotate').name('顺时针？');

  useEffect(() => {
    domRef.current!.appendChild(renderer.domElement);
    animate();
    return () => {
      renderer.dispose();
    };
  }, []);
  return <div ref={domRef}></div>;
};
export default GuiDemo;
