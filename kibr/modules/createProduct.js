import * as THREE from 'three';

export function createProduct(scene) {
    const basegroup = new THREE.Group();
    const baseGeometry = new THREE.BoxGeometry(4, 0.1, 4);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xD3D3D3 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.set(0, 0.05, 0);
    base.name = "Base";
    base.receiveShadow = true;
    basegroup.add(base);

    const tableGoup = new THREE.Group();
    const tableTopGeometry = new THREE.BoxGeometry(3, 0.2, 2);
    const tableTopMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const tebleTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
    tebleTop.position.set(0, 1.1, 0);
    tebleTop.name = "Table Top";
    tableGoup.add(tebleTop);

    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const positions = [
        [-1.4, 0.5, -0.8],
        [1.4, 0.5, -0.8],
        [-1.4, 0.5, 0.8],
        [1.4, 0.5, 0.8],    
    ];
    for (let i = 0; i < positions.length; i++) {
        const [x, y, z] = positions[i];
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.position.set(x, y, z);
        leg.name = `Table Leg ${i + 1}`;
        tableGoup.add(leg);
    }

    const chairgroup = new THREE.Group();
    const chairseatGeometry = new THREE.BoxGeometry(1, 0.2, 1);
    const chairseatMaterial = new THREE.MeshStandardMaterial({ color: 0x4B4B4B });
    const chairseat = new THREE.Mesh(chairseatGeometry, chairseatMaterial);
    chairseat.position.set(0, 0.5, -0.1);
    chairseat.name = "Chair Seat";
    chairgroup.add(chairseat);

    const chairbackGeometry = new THREE.BoxGeometry(1, 0.5, 0.2);
    const chairback = new THREE.Mesh(chairbackGeometry, chairseatMaterial);
    chairback.position.set(0, 0.9, -0.6);
    chairback.name = "Chair Back";
    chairgroup.add(chairback);

    const chairlegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 32);
    const chairlegMaterial = new THREE.MeshStandardMaterial({ color: 0x4B4B4B });
    const chairPositions = [
        [-0.4, 0.3, -0.4],
        [0.4, 0.3, -0.4],
        [-0.4, 0.3, 0.4],   
        [0.4, 0.3, 0.4], 
    ];
    for (let i = 0; i < chairPositions.length; i++) {
        const [x, y, z] = chairPositions[i];
        const chairleg = new THREE.Mesh(chairlegGeometry, chairlegMaterial);
        chairleg.position.set(x, y, z);
        chairleg.name = `Chair Leg ${i + 1}`;
        chairgroup.add(chairleg);
    }
    chairgroup.position.set(0, 0, -1.5);

    const lampGroup = new THREE.Group();
    const lambBaseGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 32);
    const lampBaseMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const lampBase = new THREE.Mesh(lambBaseGeometry, lampBaseMaterial);
    lampBase.position.set(0, 0.1, 0);
    lampBase.name = "Lamp Base";
    lampGroup.add(lampBase);

    const lampPoleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 32);
    const lampPoleMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const lampPole = new THREE.Mesh(lampPoleGeometry, lampPoleMaterial);
    lampPole.position.set(0, 0.6, 0);
    lampPole.name = "Lamp Pole";
    lampGroup.add(lampPole);

    const lampShadeGeometry = new THREE.ConeGeometry(0.3, 0.5, 32);
    const lampShadeMaterial = new THREE.MeshStandardMaterial({ color: 0xF5F5DC });
    const lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
    lampShade.position.set(0, 1.1, 0);
    lampShade.rotation.x = Math.PI;
    lampShade.name = "Lamp Shade";
    lampGroup.add(lampShade);
    lampGroup.position.set(-1.0, 1.2, 0.5);

    const labtopGroup = new THREE.Group();
    const laptopBaseGeometry = new THREE.BoxGeometry(1, 0.1, 1);
    const laptopBaseMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const laptopBase = new THREE.Mesh(laptopBaseGeometry, laptopBaseMaterial);
    laptopBase.position.set(0, 0.5, 0);
    laptopBase.name = "Laptop Base";
    labtopGroup.add(laptopBase);

    const laptopScreenGeometry = new THREE.BoxGeometry(1, 0.6, 0.05);
    const laptopScreenMaterial = new THREE.MeshStandardMaterial({ color: 0x0000FF });
    const laptopScreen = new THREE.Mesh(laptopScreenGeometry, laptopScreenMaterial);
    laptopScreen.position.set(0, 0.8, 0.6);
    laptopScreen.rotation.x = Math.PI / 9;
    laptopScreen.name = "Laptop Screen";
    labtopGroup.add(laptopScreen);

    const laptopKeyboardGeometry = new THREE.BoxGeometry(1, 0.5, 0.05);
    const laptopKeyboardMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const laptopKeyboard = new THREE.Mesh(laptopKeyboardGeometry, laptopKeyboardMaterial);
    laptopKeyboard.position.set(0, 0.45, 0);
    laptopKeyboard.name = "Laptop Keyboard";
    labtopGroup.add(laptopKeyboard);

    const laptopTouchpadGeometry = new THREE.BoxGeometry(0.3, 0.02, 0.2);
    const laptopTouchpadMaterial = new THREE.MeshStandardMaterial({ color: 0xC0C0C0 });
    const laptopTouchpad = new THREE.Mesh(laptopTouchpadGeometry, laptopTouchpadMaterial);
    laptopTouchpad.position.set(0, 0.45, -0.4);
    laptopTouchpad.name = "Laptop Touchpad";
    labtopGroup.add(laptopTouchpad);
    labtopGroup.position.set(0.5, 0.8, 0);

    basegroup.add(tableGoup);
    basegroup.add(chairgroup);
    tableGoup.add(lampGroup);
    tableGoup.add(labtopGroup);
    scene.add(basegroup);
}