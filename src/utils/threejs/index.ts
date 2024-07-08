import * as THREE from 'three';

export function init() {
  // 场景
  const scene = new THREE.Scene();
  // 相机
  const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 3000);
  camera.position.set(100, 100, 100);
  camera.lookAt(0, 0, 0);

  // 坐标系
  const axesHelper = new THREE.AxesHelper(1000);
  scene.add(axesHelper);
  // 光源
  //AmbientLight 环境光 PointLight 点光源  DirectionalLight 平行光   
  const pointLight = new THREE.AmbientLight(0x02f2aa);
  pointLight.position.set(100, 100, 100);
  scene.add(pointLight);
  // 渲染器
  const renderer = new THREE.WebGLRenderer(
    {
      antialias: true,//抗锯齿
    }
  );
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(500, 500);
  // 设置背景色
  renderer.setClearColor(0x6495ED, 1);
  return [THREE, scene, camera, axesHelper, pointLight, renderer]
}