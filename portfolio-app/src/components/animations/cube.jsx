import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/addons/loaders/OBJLoader";

const CubeAnimation = () => {
  const sceneRef = useRef();

  useEffect(() => {
    /* Cria o three */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    /* Coloca o item do tamanho da renderização */
    renderer.setSize(innerWidth, innerHeight);
    /* Adiciona a dom */
    sceneRef.current.appendChild(renderer.domElement);

    /* Controle do mouse */
    const controls = new OrbitControls(camera, renderer.domElement);

    /* Carregando modelo 3D */
    const objLoader = new OBJLoader();
    objLoader.load(
      "/foguete.obj",
      (object) => {
        object.scale.set(50, 50, 50);
        scene.add(object);
      },
      /* Mostra o quão rápido está sendo carregado */
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% carregado");
      },
      (err) => {
        console.error("Ocorreu um erro ao renderizar o objeto", err);
      }
    );

    camera.position.z = 150;

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
