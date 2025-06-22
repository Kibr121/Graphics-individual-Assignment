import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

export const createLighting = (scene) => {
    // Ambient light for general illumination
    const ambientLight = new AmbientLight(0x404040, 0.3); // Reduced ambient light
    scene.add(ambientLight);

    // Hemisphere light for more natural outdoor-like lighting
    const hemisphereLight = new HemisphereLight(0xffffff, 0x444444, 0.4);
    scene.add(hemisphereLight);

    // Main directional light for shadows and highlights
    const directionalLight = new DirectionalLight(0xffffff, 1.2); // Increased intensity
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;

    // Configure shadow properties
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;

    scene.add(directionalLight);

    // Secondary directional light for fill
    const fillLight = new DirectionalLight(0xffffff, 0.4); // Increased fill light
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);
};