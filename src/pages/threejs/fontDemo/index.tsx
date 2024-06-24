import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
const FontDemo = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 500);
  camera.position.set(200, 200, 400);
  camera.lookAt(0, 0, 0);
  // 坐标系
  const axesHelper = new THREE.AxesHelper(450);
  scene.add(axesHelper);

  // 光源
  const pointLight = new THREE.PointLight(0xffffff, 50000.0);
  pointLight.position.set(200, 200, 200);
  scene.add(pointLight);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(500, 500);
  const loader = new FontLoader();
  loader.load('/font/font2.json', function (font) {
    const geometry = new TextGeometry('H e l l o !', {
      font: font,
      size: 40,
      depth: 30,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelSegments: 5,
    });
    const material = new THREE.MeshLambertMaterial({
      // color: 0xffffff,
    });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(10, 10, 0);
    scene.add(mesh);
    renderer.render(scene, camera);
  });

  function animate() {
    renderer.render(scene, camera);
  }

  useEffect(() => {
    animate();
    domRef.current?.appendChild(renderer.domElement);
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
