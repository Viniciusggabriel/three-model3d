import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CubeAnimation = () => {
  const sceneRef = useRef();

  useEffect(() => {
    /* Cria o three */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 600 / 600, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    /* Coloca o item do tamanho da renderização */
    renderer.setSize(600, 600);
    /* Adiciona a dom */
    sceneRef.current.appendChild(renderer.domElement);

    /* Controle do mouse */
    var controls = new OrbitControls(camera, renderer.domElement);

    /* Cubo */
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    const cubeAnimate = () => {
      requestAnimationFrame(cubeAnimate);
      controls.update();
      renderer.render(scene, camera);
    };

    cubeAnimate();

    // Cleanup
    return () => {
      controls.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default CubeAnimation;
