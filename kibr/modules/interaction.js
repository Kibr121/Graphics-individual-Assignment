import * as THREE from 'three';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

export const createInteraction = (scene, camera, renderer) => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;

    controls.enableZoom = true; // Enable zooming
    controls.zoomSpeed = 1.0; // Adjust zoom speed
    controls.minDistance = 2; // Minimum zoom distance
    controls.maxDistance = 20; // Maximum zoom distance         

    // Create raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let selectedObject = null;
    let originalColor = null;
    let originalScale = null;

    // Create info panel
    const infoPanel = document.createElement('div');
    infoPanel.style.position = 'absolute';
    infoPanel.style.top = '10px';
    infoPanel.style.left = '10px';
    infoPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    infoPanel.style.color = 'white';
    infoPanel.style.padding = '10px';
    infoPanel.style.borderRadius = '5px';
    infoPanel.style.display = 'none';
    document.body.appendChild(infoPanel);

    function onMouseMove(event) {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the raycaster
        raycaster.setFromCamera(mouse, camera);

        // Find intersections
        const intersects = raycaster.intersectObjects(scene.children, true);

        // Reset previous selection
        if (selectedObject) {
            selectedObject.material.color.set(originalColor);
            selectedObject.scale.copy(originalScale);
            selectedObject = null;
            infoPanel.style.display = 'none';
        }

        // Handle new intersection
        if (intersects.length > 0) {
            selectedObject = intersects[0].object;
            originalColor = selectedObject.material.color.clone();
            originalScale = selectedObject.scale.clone();
            
            // Highlight effect
            selectedObject.material.color.set(0xffff00);
            selectedObject.scale.multiplyScalar(1.1);

            // Show info panel
            infoPanel.textContent = `Part: ${selectedObject.name || 'Unnamed Part'}`;
            infoPanel.style.display = 'block';
        }
    }

    function onMouseClick(event) {
        if (selectedObject) {
            // Add click animation
            const originalScale = selectedObject.scale.clone();
            selectedObject.scale.multiplyScalar(1.2);
            setTimeout(() => {
                selectedObject.scale.copy(originalScale);
            }, 200);
        }
    }

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onMouseClick);
};

export function onWindowResize(scene, camera, renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}