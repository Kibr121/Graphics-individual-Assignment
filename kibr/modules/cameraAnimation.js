import * as THREE from 'three';

export function animateCamera(camera, targetPosition, duration = 2000) {
    const startPosition = camera.position.clone();
    const startTime = performance.now();
    let isUserInteracting = false;
    
    // Add event listeners for user interaction
    const controls = document.querySelector('canvas').parentElement;
    controls.addEventListener('mousedown', () => isUserInteracting = true);
    controls.addEventListener('mouseup', () => isUserInteracting = false);
    controls.addEventListener('touchstart', () => isUserInteracting = true);
    controls.addEventListener('touchend', () => isUserInteracting = false);
    
    const animate = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        if (!isUserInteracting) {
            // Smooth camera rotation when not interacting
            const radius = 10;
            const speed = 0.003; // Extremely slow rotation
            const angle = (elapsed * speed) % (Math.PI * 2);
            
            // Only horizontal rotation, no vertical movement
            camera.position.x = radius * Math.sin(angle);
            camera.position.z = radius * Math.cos(angle);
            camera.position.y = 5; // Fixed height
        } else {
            // Smooth transition to user-controlled position
            camera.position.lerpVectors(startPosition, targetPosition, progress);
        }
        
        camera.lookAt(0, 0, 0);
        
        if (progress < 1 || !isUserInteracting) {
            requestAnimationFrame(animate);
        }
    };
    
    requestAnimationFrame(animate);
}
