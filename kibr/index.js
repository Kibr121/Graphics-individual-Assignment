import { scene, camera, renderer, controls } from "./modules/initScene.js";
import { createLighting } from "./modules/addLighting.js";
import { createInteraction, onWindowResize } from "./modules/interaction.js";
import { animateCamera } from "./modules/cameraAnimation.js"; 
import { createProduct } from "./modules/createProduct.js";
import * as THREE from 'three'


createProduct(scene);
createLighting(scene);
createInteraction(scene, camera, renderer);

window.addEventListener('resize', () => onWindowResize(scene, camera, renderer), false);

function animate() {
    requestAnimationFrame(animate);
    
    // Update controls
    controls.update();
    
    // Render the scene
    renderer.render(scene, camera);
}

animate();

// Initialize camera animation
animateCamera(camera, new THREE.Vector3(0, 5, 10), 2000);