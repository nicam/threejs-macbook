 // create the ground plane
var planeGeometry = new THREE.PlaneGeometry(500, 500, 10, 10);
var floorTexture = loadTexture("assets/floor_wood_black.jpg");
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(8, 8);

var planeMaterial = new THREE.MeshPhongMaterial({
    map: floorTexture
});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 0;
plane.position.y = -30;
plane.position.z = 0;
scene.add(plane);

var skyGeometry = new THREE.BoxGeometry( 500, 500, 500 );    

var materialArray = [];
for (var i = 0; i < 6; i++) {
    materialArray.push( new THREE.MeshPhongMaterial({
        map: loadTexture("assets/brick_texture3316.jpg"),
        side: THREE.BackSide
    }));
}
var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
var skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(skyBox);