import { useEffect, useRef } from 'react';
import * as THREE from 'three';
const BasicDemo = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(500, 500);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

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
    <>
      <div ref={domRef}></div>
    </>
  );
};
export default BasicDemo;
