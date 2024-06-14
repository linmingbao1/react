import { useEffect, useRef } from 'react';
import * as THREE from 'three';
const LineDemo = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(500, 500);

  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const points = [];
  points.push(new THREE.Vector3(-50, 0, 0));
  points.push(new THREE.Vector3(0, 50, 0));
  points.push(new THREE.Vector3(50, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);

  scene.add(line);
  renderer.render(scene, camera);

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
    <>
      <div ref={domRef}></div>
    </>
  );
};
export default LineDemo;
