import "./app.css";

import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import anime from "animejs/lib/anime.es.js";

export default function Home() {
  useEffect(() => {
    //Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 100;
    camera.position.y = 100;
    camera.position.x = 100;

    const canvas = document.getElementById("bg");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //Lighting

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    //gridhelper
    const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(gridHelper);

    //Background image

    const bgLoader = new THREE.TextureLoader().load(
      "https://static.vecteezy.com/system/resources/thumbnails/023/887/107/original/seamless-loop-galaxy-exploration-through-outer-space-towards-glowing-milky-way-galaxy-4k-looping-animation-of-flying-through-glowing-nebulae-clouds-and-stars-field-elements-free-video.jpg"
    );
    scene.background = bgLoader;
    scene.backgroundIntensity = 0.04;
    scene.backgroundBlurriness = 1;

    let galaxyModel;

    const loadingManager = new THREE.LoadingManager();

    const progressBar = document.getElementById("progress-bar");

    const progressBarLabel = document.querySelector(".progress-bar-label");

    loadingManager.onProgress = function (url, loaded, total) {
      progressBarLabel.textContent = `${(loaded / total).toFixed(0) * 100}%`;
      progressBar.style.width = `${(
        (loaded / total) *
        window.innerWidth *
        0.3
      ).toFixed(0)}px`;
    };

    const progressBarContainer = document.querySelector(
      ".progress-bar-container"
    );

    loadingManager.onLoad = function () {
      anime
        .timeline({
          targets: ".progress-bar-container",
          easing: "easeOutExpo",
        })
        .add({
          delay: 1000,
          translateX: "100vw",
          duration: 1300,
          complete: function (anime) {
            progressBarContainer.remove();
          },
        });
    };

    const galaxyLoader = new GLTFLoader(loadingManager);
    galaxyLoader.load(
      "public/galaxy.gltf",
      function (gltf) {
        galaxyModel = gltf.scene;
        let scale = 50;
        gltf.scene.position.setX(-70);
        gltf.scene.position.setZ(70);
        gltf.scene.position.setY(-70);
        gltf.scene.scale.set(scale, scale, scale);
        scene.add(gltf.scene);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      // boxMesh.rotation.x += 0.01;
      // boxMesh.rotation.y += 0.01;
      if (galaxyModel) {
        galaxyModel.rotation.y += 0.0001;
      }

      //   controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="home-page">
      <canvas id="bg"></canvas>
      <div className="title-container">
        <div className="subtitle">Hello World, I'm</div>
        <div className="main-title">Gregory Young</div>
      </div>
    </div>
  );
}