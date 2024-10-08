import "./stylesheets/app.css";

import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Canvas, useFrame } from "@react-three/fiber";

import Name from "./name";

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
    // camera.position.z = 60;
    // camera.position.y = 140;
    // camera.position.x = 80;
    camera.position.z = 70;
    camera.position.y = 100;
    camera.position.x = 80;
    camera.rotation.y = 0.5;
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

    const pointLight = new THREE.PointLight(0xffffff, 2.0, 600);
    scene.add(pointLight);

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

    loadingManager.onStart = ()=>{
      let maxWidth = window.innerWidth*0.2;
      anime({
        targets:'.progress-bar-label',
        innerHTML: ['0%', '100%'],
        round: 1,
        easing: 'easeInOutExpo'
      })
    }

    loadingManager.onProgress = function (url, loaded, total) {
      
      if (window.innerWidth < 900) {
        progressBar.style.width = `${((loaded / total) * 200).toFixed(0)}px`;
      } else {
        progressBar.style.width = `${(
          (loaded / total) *
          window.innerWidth *
          0.2
        ).toFixed(0)}px`;
      }
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
          delay: 700,
          translateX: "100vw",
          duration: 1300,
          complete: function (anime) {
            progressBarContainer.remove();
          },
        })
        .add({
          targets: ".subtitle",
          opacity: ["0", "1"],
          easing: "easeOutExpo",
          duration: 1500,
        })
        .add({
          targets: ".name-svg g path",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInQuad",
          duration: 3000,
        })
        .add({
          targets: ".navbar-container",
          translateY: ["-55px", "0"],
          duration: 1000,
          easing: "easeOutExpo",
        });
    };

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.15;
    controls.target = new THREE.Vector3(13, 36, 10);
    // controls.maxAzimuthAngle = 3.14;
    // controls.minAzimuthAngle = 3.14;
    // controls.maxPolarAngle = 3.14;
    // controls.minPolarAngle = 3.14;

    const galaxyLoader = new GLTFLoader(loadingManager);
    galaxyLoader.load(
      "/galaxy.gltf",
      function (gltf) {
        galaxyModel = gltf.scene;
        let scale = 50;
        gltf.scene.position.setX(-60);
        gltf.scene.position.setZ(80);
        gltf.scene.position.setY(-40);
        // gltf.scene.position.setX(0);
        // gltf.scene.position.setZ(0);
        // gltf.scene.position.setY(0);
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

    const animate = () => {
      // boxMesh.rotation.x += 0.01;
      // boxMesh.rotation.y += 0.01;

      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="home-page">
      <canvas id="bg"></canvas>
      <div className="title-container">
        <div className="subtitle-container">
          <div className="subtitle">Hello World, I'm</div>
        </div>
        <Name />
      </div>
    </div>
  );
}
