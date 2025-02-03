import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls

export function createThreeScene(elementId, modelPath) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector(elementId).appendChild(renderer.domElement);

  // Add OrbitControls to make the scene navigable
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Smooth out movement
  controls.dampingFactor = 0.25; // Controls the smoothing factor
  controls.screenSpacePanning = false; // Don't allow panning in screen space
  controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation

  // Load the 3D model
  const loader = new OBJLoader();
  loader.load(modelPath, (obj) => {
    // Scale the object to fit within the container
    obj.scale.set(1, 1, 1);  // Adjust scale to make it fit
    scene.add(obj);
  });

  // Set up lighting
  const light = new THREE.AmbientLight(0xffffff, 1); // Ambient light for the scene
  scene.add(light);

  // Position the camera
  camera.position.set(0, 1, 5); // Adjust the initial camera position

  // Resize the canvas if the window is resized
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Update controls
    controls.update(); // Only required if controls.enableDamping or controls.auto-rotation are enabled

    renderer.render(scene, camera);
  }

  animate();
}
