import { init } from '@/utils/threejs';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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

  const texLoader = new THREE.TextureLoader();
  // .load()方法加载图像，返回一个纹理对象Texture
  const texture = texLoader.load('/img/liuying.png');

  // const geometry = new THREE.IcosahedronGeometry(10, 1);
  const geometry = new THREE.PlaneGeometry(200, 100); //矩形
  // const geometry = new THREE.CircleGeometry(60, 100);
  // 设置重复
  texture.offset.x += 0.1;
  texture.offset.y += 0.1;

  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;
  // texture.repeat.set(4, 4);
  const material = new THREE.MeshBasicMaterial({
    color: 0x84f0d6,
    map: texture,
  });

  console.log(geometry.attributes.uv);

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

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
