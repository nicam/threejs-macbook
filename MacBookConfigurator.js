
var loader = new THREE.ColladaLoader();
var screenTexture = loadTexture("assets/Apple MacBook Pro 15/maps/mpm_F21_home_screen_diff_01.JPG");
var logoTexture = loadTexture("assets/Apple MacBook Pro 15/maps/mpm_F21_apple_logo_0.png");
var texture_logo = loadTexture('assets/Apple MacBook Pro 15/maps/mpm_F21_home_screen_diff_02.jpg');
var keyboardTexture = loadTexture('assets/Apple MacBook Pro 15/maps/mpm_F21_keyboard_diff.jpg');
var screenPlane, screenGeometry, webcamPlane;
var continuesRender = false;
var macbook;

loader.options.convertUpAxis = true;

startLoading();
loader.load('assets/mbair.dae', function (collada) {
    var dae = collada.scene;
    macbook = dae;
    dae.position.set(0, 0, 0);
    dae.scale.set(0.05, 0.05, 0.05);

    // Set texture of apple logo
    dae.getObjectByName("F21_Apple_MacBook_Pro_Display", true).children[0].material.materials[2] = new THREE.MeshLambertMaterial({ map : logoTexture, side: THREE.DoubleSide, transparent: true });

    // Load Keyboard Texture
    dae.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[2].map = keyboardTexture;

    dae.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[0].side = THREE.DoubleSide;
    dae.getObjectByName("F21_Apple_MacBook_Pro_Display", true).children[0].material.materials[4].map = texture_logo;
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[6].side = THREE.DoubleSide;
    setFeetColor(new THREE.Color(0x000000));

    // Load Screenshot
    var screenMaterial = new THREE.MeshPhongMaterial({ map : screenTexture });
    
    screenGeometry  = new THREE.PlaneGeometry(16.6, 10.375, 10, 10);
    screenPlane = new THREE.Mesh(screenGeometry, screenMaterial);
    scene.add(screenPlane);
    screenPlane.position.x = 0;
    screenPlane.position.y = 6.65;
    screenPlane.position.z = -6.275;


    scene.add(dae);
    endLoading();
    // setTimeout(render, 500);
});

function triggerScreen() {
    continuesRender = false;
    scene.add(screenPlane);
    scene.remove(webcamPlane);
}

function triggerWebcam() {
    continuesRender = true;
    var updateFcts    = [];
    // create the webcamTexture
    var webcamTexture = new THREEx.WebcamTexture();
    updateFcts.push(function(delta, now) {
        webcamTexture.update(delta, now)
    })

    updateFcts.push(function(){
        renderer.render( scene, camera );        
    })

    var screenMaterial    = new THREE.MeshBasicMaterial({
        map: webcamTexture.texture
    });
    webcamPlane = new THREE.Mesh(screenGeometry, screenMaterial);
    webcamPlane.position.x = 0;
    webcamPlane.position.y = 6.65;
    webcamPlane.position.z = -6.275;
    scene.remove(screenPlane);
    scene.add(webcamPlane);

    updateFcts.push(function(){
        renderer.render( scene, camera );        
    })

    var lastTimeMsec= null
    requestAnimationFrame(function animate(nowMsec){
        // keep looping
        if (continuesRender) {
            requestAnimationFrame( animate );
        }
        // measure time
        lastTimeMsec    = lastTimeMsec || nowMsec-1000/60
        var deltaMsec    = Math.min(200, nowMsec - lastTimeMsec)
        lastTimeMsec    = nowMsec
        // call each update function
        updateFcts.forEach(function(updateFn){
            updateFn(deltaMsec/1000, nowMsec/1000)
        })
    })
}

function setScrewColor(color){
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[5].color = color;
}

function setAluminiumColor(color){
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[6].color = color;
}

function setFeetColor(color){
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[1].color = color;
}

function setTrackpadColor(color){
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[0].color = color;
}

function setAppleLogo(number){
    logoTexture = THREE.ImageUtils.loadTexture(number);
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Display", true).children[0].material.materials[2] = new THREE.MeshLambertMaterial({ map : logoTexture, side: THREE.DoubleSide, transparent: true });
}

function setKeyboardColor(color) {    
    //macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[2].map = loadTexture('assets/Apple MacBook Pro 15/maps/mpm_F21_keyboard_transparent_white.png');
    macbook.getObjectByName("F21_Apple_MacBook_Pro_Keyboard", true).children[0].material.materials[2].color = color;
}
