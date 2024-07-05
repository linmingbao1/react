import { init } from '@/utils/threejs';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const FontDemo = () => {
  const stats = new Stats();
  stats.showPanel(0);
  const domRef = useRef<HTMLDivElement>(null);
  const [THREE, scene, camera, axesHelper, pointLight, renderer] = init();
  // 设置webgl编码方式，新版默认就是SRGBColorSpace，不用再设置
  // renderer.outputColorSpace = THREE.SRGBColorSpace;
  // 设置相机控件轨道控制器OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  // 当场景循环时不需要再重新render
  controls.addEventListener('change', function () {
    stats.update();
    renderer.render(scene, camera); //执行渲染操作
  }); //监听鼠标、键盘事件
  pointLight.position.set(50, 50, 0);
  camera.position.set(1, 1, 1);

  const dirLightHelper = new THREE.PointLight(pointLight, 5, 0xff0000);
  scene.add(dirLightHelper);
  let mesh;
  const loader = new GLTFLoader();
  loader.load('/model/shiba/scene.gltf', function (gltf) {
    console.log(gltf);
    // mesh = gltf.scene.children[0];
    scene.add(gltf.scene);
    animate();
  });

  function animate() {
    renderer.render(scene, camera);
    // console.log('mesh', mesh.rotateY);

    // if (mesh) {
    //   mesh.rotateY(0.01);
    // }
    // requestAnimationFrame(animate);
  }

  useEffect(() => {
    domRef.current?.appendChild(renderer.domElement);
    domRef.current?.appendChild(stats.domElement);
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
export default FontDemo;
