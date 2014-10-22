
// UI
var body_next = document.getElementById("body_next");
body_next.onclick = function(){
    camera.position.x = 0;
    camera.position.y = 11;
    camera.position.z = 3;
    camera.lookAt(scene.position);
    camera.rotation.x = -1.5;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    render();
    
    document.getElementById("ui_body").classList.toggle("active");
    document.getElementById("ui_trackpad").classList.toggle("active");
}

var tf_trackpadColor = document.getElementById("tf_trackpadColor");
tf_trackpadColor.onchange = function(){
    setTrackpadColor(new THREE.Color(parseInt(this.value, 16)));
    render();
}


/*var body_next = document.getElementById("body_next");
body_next.onclick = function(){
    camera.position.x = -35;
    camera.position.y = 40;
    camera.position.z = 60;
    camera.lookAt(scene.position);
    render();
    
    var active = document.querySelector(".ui.active");
    if(active) active.classList.toggle("active");
    document.getElementById("ui_body").classList.toggle("active");
}
*/    
var tf_body = document.getElementById("tf_body");
tf_body.onchange = function(){
    setAluminiumColor(new THREE.Color(parseInt(this.value, 16)));
    render();
}
