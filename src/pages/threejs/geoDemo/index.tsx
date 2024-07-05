import { init } from '@/utils/threejs';
import { useEffect, useRef } from 'react';
import './index.less';

const GeoDemo = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const domRef1 = useRef<HTMLDivElement>(null);

  const [THREE, scene, camera, axesHelper, pointLight, renderer] = init();
  // 场景
  const scene1 = new THREE.Scene();
  const renderer1 = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer1.setPixelRatio(window.devicePixelRatio);
  renderer1.setSize(500, 500);
  // 设置背景色
  renderer1.setClearColor(0x6495ed, 1);

  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    0,
    0,
    0, //顶点1坐标
    80,
    0,
    0, //顶点2坐标
    80,
    80,
    0, //顶点3坐标

    0,
    0,
    0, //顶点4坐标   和顶点1位置相同
    80,
    80,
    0, //顶点5坐标  和顶点3位置相同
    0,
    80,
    0, //顶点6坐标
  ]);
  const attribue = new THREE.BufferAttribute(vertices, 3);
  geometry.attributes.position = attribue;
  // // 点渲染模式;
  // const material = new THREE.PointsMaterial({
  //   color: 0xffff00,
  //   size: 10.0, //点对象像素尺寸
  // });
  // const points = new THREE.Points(geometry, material); //点模型对象
  // scene.add(points);

  // 线渲染模式;
  const material = new THREE.LineBasicMaterial({
    color: 0xffff00,
  });
  // Line 基础线条   LineLoop 闭合的线条  LineSegments 非连续线条
  const line = new THREE.LineLoop(geometry, material);
  scene.add(line);

  // 索引点坐标
  const geometry1 = new THREE.BufferGeometry();
  const vertices1 = new Float32Array([
    0,
    0,
    0, //顶点1坐标
    80,
    0,
    0, //顶点2坐标
    80,
    80,
    0, //顶点3坐标
    0,
    80,
    0, //顶点4坐标
  ]);
  const indexes = new Uint16Array([
    // 下面索引值对应顶点位置数据中的顶点坐标
    0, 1, 2, 0, 2, 3,
  ]);
  const attribue1 = new THREE.BufferAttribute(vertices1, 3);

  geometry1.attributes.position = attribue1;

  geometry1.index = new THREE.BufferAttribute(indexes, 1); //1个为一组

  const line1 = new THREE.LineLoop(geometry1, material);
  scene1.add(line1);
  const axesHelper1 = new THREE.AxesHelper(1000);

  scene1.add(axesHelper1);

  function animate() {
    renderer.render(scene, camera);
    renderer1.render(scene1, camera);

    geometry.rotateY(0.01);
    geometry1.rotateY(-0.01);

    requestAnimationFrame(animate);
  }

  useEffect(() => {
    domRef.current?.appendChild(renderer.domElement);
    domRef1.current?.appendChild(renderer1.domElement);

    animate();

    return () => {
      renderer.dispose();
      renderer1.dispose();
    };
  }, []);
  return (
    <div className="flex">
      <div>
        <div>普通点坐标</div>
        <div ref={domRef}></div>
      </div>

      <div>
        <div>索引点坐标</div>
        <div ref={domRef1}></div>
      </div>
    </div>
  );
};

export default GeoDemo;
