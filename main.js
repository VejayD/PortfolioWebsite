import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xf0e6d2);

camera.position.setZ(30);

renderer.render(scene, camera)

const geometry = new THREE.IcosahedronGeometry(10.0, 0)
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } ); 
const torus = new THREE.Mesh( geometry, material ); 
scene.add( torus )


let loadedModel;
const loader = new GLTFLoader();

let clock = new THREE.Clock();
let mixer;


// loader.load( 'models/RocketShip.glb', ( gltf ) =>{

//     mixer = new THREE.AnimationMixer(gltf.scene);
//     let action = mixer.clipAction(value);

//     const mesh = gltf.scene;
//     loadedModel = gltf.scene;
    
//     scene.add( mesh );

// });


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 20, 10);
scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff, 0.6));


function RotateObject(){
    const t = document.body.getBoundingClientRect().top;
    // Controls the scroll functions
}

document.body.onscroll = RotateObject

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    // loadedModel.rotation.x -= 0.01;
    // loadedModel.rotation.y -= 0.005;
    // loadedModel.rotation.z -= 0.01;
    renderer.render(scene, camera);
}

animate();