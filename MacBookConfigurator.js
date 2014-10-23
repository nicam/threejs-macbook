
var loader = new THREE.ColladaLoader();
var screenTexture = THREE.ImageUtils.loadTexture("assets/Apple MacBook Pro 15/maps/mpm_F21_home_screen_diff_01.JPG" );
var logoTexture = THREE.ImageUtils.loadTexture("assets/Apple MacBook Pro 15/maps/mpm_F21_apple_logo_0.png" );
var texture_logo = THREE.ImageUtils.loadTexture('assets/Apple MacBook Pro 15/maps/mpm_F21_home_screen_diff_02.jpg');

var macbook;
loader.options.convertUpAxis = true;
loader.load('assets/mbair.dae', function (collada) {
    var dae = collada.scene;

    macbook = dae;
    dae.position.set(0, 0, 0);
    dae.scale.set(0.05, 0.05, 0.05);

    // Set texture of apple logo
    dae.getObjectByName("F21_Apple_MacBook_Pro_Display", true).children[0].material.materials[2] = new THREE.MeshLambertMaterial({ map : logoTexture, side: THREE.DoubleSide, transparent: true });

    // Load Keyboard Texture
    dae.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[2].map = THREE.ImageUtils.loadTexture('assets/Apple MacBook Pro 15/maps/mpm_F21_keyboard_diff.jpg');

    dae.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[0];
    dae.getObjectByName("F21_Apple_MacBook_Pro_Display", true).children[0].material.materials[4].map = texture_logo;
    dae.getObjectByName("F21_Apple_MacBook_Pro_Display", true).children[0].material.materials[4].side = THREE.DoubleSide;

    // Load Screenshot
    var screenMaterial = new THREE.MeshPhongMaterial({ map : screenTexture });
    var screenGeometry = new THREE.PlaneGeometry(16.6, 10.375, 10, 10);
    var screenPlane = new THREE.Mesh(screenGeometry, screenMaterial);
    screenPlane.position.x = 0;
    screenPlane.position.y = 6.65;
    screenPlane.position.z = -6.275;

    // Build Logo
    /*
    var scaleFactor = 1.25;
    var logoGeometry = new THREE.PlaneGeometry(1.6*scaleFactor, 2*scaleFactor, 10, 10);
    var logoMaterial = new THREE.MeshPhongMaterial({ map : logoTexture, side: THREE.DoubleSide, transparent: true });
    var logoPlane = new THREE.Mesh(logoGeometry, logoMaterial);
    logoPlane.position.x = 0;
    logoPlane.position.y = 6.65;
    logoPlane.position.z = -6.58;
    logoPlane.rotation.y = Math.PI;
    */
    
    scene.add(dae);
    scene.add(screenPlane);
    
    render();
});

function setScrewColor(color){
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[5].color = color;
}

function setAluminiumColor(color){
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[6].color = color;
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[6].color = color;
}

function setFeetColor(color){
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[1].color = color;
}

function setTrackpadColor(color){
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[0].color = color;
}

function setAppleLogo(number){
    logoTexture = THREE.ImageUtils.loadTexture("assets/Apple MacBook Pro 15/maps/mpm_F21_apple_logo_" + number + ".png" );
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Display", true).children[0].material.materials[2] = new THREE.MeshLambertMaterial({ map : logoTexture, side: THREE.DoubleSide, transparent: true });
}

function setKeyboardColor(color) {    
    //macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[2].map = THREE.ImageUtils.loadTexture('assets/Apple MacBook Pro 15/maps/mpm_F21_keyboard_transparent_white.png');
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[2].color = color;
}
