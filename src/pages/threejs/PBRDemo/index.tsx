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
  const textureCube = new THREE.CubeTextureLoader()
    .setPath('/img/')
    .load([
      'liuying.png',
      'liuying.png',
      'liuying.png',
      'gar.png',
      'gar.png',
      'gar.png',
    ]);

  // CubeTexture表示立方体纹理对象，父类是纹理对象Texture
  const geometry = new THREE.BoxGeometry(10, 10, 10);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.5,
    roughness: 0,
    envMap: textureCube, //设置pbr材质环境贴图
    envMapIntensity: 1,
  });
  // const material = new THREE.MeshPhysicalMaterial({
  //   color: 0x44ff33,
  // });
  const mesh = new THREE.Mesh(geometry, material);

  // // 金属度
  // mesh.material.metalness = 0.5;
  // mesh.material.roughness = 0.5;
  // pointLight.color.set(0xffffff);
  pointLight.intensity = 20;
  scene.add(mesh);

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
