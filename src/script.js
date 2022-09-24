import './style.css';
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Object
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'orange' })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'purple' })
);
cube3.position.x = 2;
group.add(cube3);

//Position
// mesh.position.set(0.7, -0.6, 1);
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// scene.add(mesh);

//Scale
// mesh.scale.set(2, 0.5, 0.5);
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5

// console.log('Length of Object:', mesh.position.length());

//Rotation
// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI * 0.25; 
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.z = Math.PI * 0.05;

// //Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.x = 0
// camera.position.y = 0
camera.position.z = 3
scene.add(camera);

// camera.lookAt(mesh.position);

// console.log('Distance to Camera:', mesh.position.distanceTo(camera.position));

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);