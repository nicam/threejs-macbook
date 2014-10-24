var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var assetCount = 0;
var total = 0;
var progress = document.getElementById('progress');

renderer.setClearColor(0xeeeeee, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);
var webglContainer = document.getElementById('webgl-container');
webglContainer.appendChild(renderer.domElement);

// window resize handler
window.addEventListener('resize', onWindowResize, false);

// camera controls
var camControls = new THREE.OrbitControls(camera, renderer.domElement);
camControls.damping = 0.2;
camControls.addEventListener('change', render);

var axes = new THREE.AxisHelper(20);
var grid = new THREE.GridHelper(40, 1);

// position and point the camera to the center of the scene
camera.position.x = -35;
camera.position.y = 40;
camera.position.z = 60;
camera.lookAt(scene.position);

// add spotlight
var spotLight = new THREE.SpotLight(0xf0f0f0);
spotLight.position.set(800, 700, 900);
scene.add(spotLight);

var spotLight2 = new THREE.SpotLight(0xf0f0f0);
spotLight2.position.set(-800, -700, -900);
scene.add(spotLight2);

function loadTexture(path) {
    assetCount = assetCount || 0
    total = total || 0
    startLoading();
    return THREE.ImageUtils.loadTexture(path, new THREE.UVMapping(), endLoading);
}

function startLoading() {
    ++assetCount;
    ++total;
}

function endLoading() {
    --assetCount;
    if (assetCount <= 0) {
        setTimeout(function () {
        render();
        $('.loaderOverlay').addClass('hidden');
        }, 500)
    }
    console.log('loading', parseInt(((total - assetCount)/total)*100, 10));
    progress.style.width = parseInt(((total - assetCount)/total)*100, 10) + '%';
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// init and call render function
function render() {
    renderer.render(scene, camera);
}

// shadow cast on plane
function initShadow(value) {
    // SET receiveShadow AND castShadow FLAGS OF 3D ELEMENTS WITH SHADOW
    plane.receiveShadow = value;
    spotLight.castShadow = value;
    renderer.shadowMapEnabled = value;
}

function setShadow(value) {
    if (value) {
        renderer.shadowMapAutoUpdate = true;
    } else {
        renderer.shadowMapAutoUpdate = false;
        renderer.clearTarget(spotLight.shadowMap);
    }
}