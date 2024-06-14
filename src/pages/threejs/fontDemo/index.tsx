import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
const FontDemo = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
  camera.position.set(100, 100, 100);
  camera.lookAt(0, 0, 0);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(500, 500);
  const loader = new FontLoader();
  loader.load('/font2.json', function (font) {
    console.log(font);

    const geometry = new TextGeometry('Hello three.js!', {
      font: font,
      size: 80,
      depth: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelSegments: 5,
    });
    geometry.computeBoundingBox();
    const material = new THREE.MeshBasicMaterial({
      // color: 0xffffff,
    });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(0, 0, 0);
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
