$('#tf_body').ColorPicker({flat: true,
    onChange: function (hsb, hex, rgb) {
        setAluminiumColor(new THREE.Color(parseInt("0x0" + hex, 16)));
        render();
    }
});

$('#tf_trackpadColor').ColorPicker({flat: true,
    onChange: function (hsb, hex, rgb) {
        setTrackpadColor(new THREE.Color(parseInt("0x0" + hex, 16)));
        render();
    }
});

$('#tf_keyboardColor').ColorPicker({flat: true,
    onChange: function (hsb, hex, rgb) {
        setKeyboardColor(new THREE.Color(parseInt("0x0" + hex, 16)));
        render();
    }
});

document.getElementById("ui_logo_dropdown").onchange = function(){
    setAppleLogo(this.value);
    setTimeout(render, 100);
}

// UI
function showBody(){
    camera.position.x = -35;
    camera.position.y = 40;
    camera.position.z = 60;
    camera.lookAt(scene.position);
    render();
}

function showKeyboad(){
    camera.position.x = 0;
    camera.position.y = 11;
    camera.position.z = 0;
    camera.lookAt(scene.position);
    camera.rotation.x = -1.5;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    render();
}

function showTrackpad(){
    camera.position.x = 0;
    camera.position.y = 11;
    camera.position.z = 3;
    camera.lookAt(scene.position);
    camera.rotation.x = -1.5;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    render();
}

function showLogo(){
    camera.position.x = 0;
    camera.position.y = 25;
    camera.position.z = -28;
    camera.lookAt(scene.position);
    render();
}

document.getElementById("body_next").onclick = function(){
    document.getElementById("ui_body").classList.toggle("active");
    document.getElementById("ui_keyboard").classList.toggle("active");
    showKeyboad();
}
document.getElementById("keyboard_back").onclick = function(){
    document.getElementById("ui_body").classList.toggle("active");
    document.getElementById("ui_keyboard").classList.toggle("active");
    showBody();
}
document.getElementById("keyboard_next").onclick = function(){
    document.getElementById("ui_keyboard").classList.toggle("active");
    document.getElementById("ui_trackpad").classList.toggle("active");
    showTrackpad();
}
document.getElementById("trackpad_back").onclick = function(){
    document.getElementById("ui_trackpad").classList.toggle("active");
    document.getElementById("ui_keyboard").classList.toggle("active");
    showKeyboad();
}
document.getElementById("trackpad_next").onclick = function(){
    document.getElementById("ui_trackpad").classList.toggle("active");
    document.getElementById("ui_logo").classList.toggle("active");
    showLogo();
}
document.getElementById("logo_back").onclick = function(){
    document.getElementById("ui_logo").classList.toggle("active");
    document.getElementById("ui_trackpad").classList.toggle("active");
    showTrackpad();
}
