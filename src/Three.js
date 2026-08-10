import React from 'react';
import * as THREE from 'three';

// LinkedIn profile data (example)
const profileData = {
  name: 'Your Name',
  headline: 'Copywriter Extraordinaire',
  skills: ['Writing', 'Creativity', 'Strategy']
};

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Simple text mesh for name
const createText = (text) => {
  const geometry = new THREE.PlaneGeometry(1, 0.5);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);
  return mesh;
};

const nameMesh = createText(profileData.name);

// Animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();



