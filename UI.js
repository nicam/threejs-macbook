$('#tf_body').colpick(
    {flat: true,
    layout:'hex',
    colorScheme: 'dark',
    submit:0,
    onChange: function (hsb, hex, rgb) {
        setAluminiumColor(new THREE.Color(parseInt("0x0" + hex, 16)));
        render();
    }
});

$('#ui').drags();

$('#tf_trackpadColor').colpick(
    {
    flat:true,
    layout:'hex',
    colorScheme: 'dark',
    submit:0,
    onChange: function (hsb, hex, rgb) {
        setTrackpadColor(new THREE.Color(parseInt("0x0" + hex, 16)));
        render();
    }
});

$('#tf_keyboardColor').colpick({
    flat: true,
    layout:'hex',
    colorScheme: 'dark',
    submit:0,
    onChange: function (hsb, hex, rgb) {
        setKeyboardColor(new THREE.Color(parseInt("0x0" + hex, 16)));
        render();
    }
});

$('.apple-logo').click(function () {
    setAppleLogo(this.src);
    setTimeout(render, 100);
})

$('#trigger_webcam').click(triggerWebcam);
$('#trigger_screen').click(triggerScreen);

// UI
function showBody(){
    camera.position.x = -35;
    camera.position.y = 40;
    camera.position.z = 60;
    camera.lookAt(scene.position);
    render();
}

function calculateDelta(source, target, duration) {
    var distance = Math.abs(Math.abs(source) - Math.abs(target));
    var iteration = distance / duration;
    return iteration;
}

function showKeyboard(){
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

function showContent() {
    camera.position.x = 0;
    camera.position.y = 16;
    camera.position.z = 33;
    camera.lookAt(scene.position);
    render();
}

$("#body_next").click(function(){
    document.getElementById("ui_body").classList.toggle("active");
    document.getElementById("ui_keyboard").classList.toggle("active");
    showKeyboard();
});
$("#keyboard_back").click(function(){
    document.getElementById("ui_body").classList.toggle("active");
    document.getElementById("ui_keyboard").classList.toggle("active");
    showBody();
});
$("#keyboard_next").click(function(){
    document.getElementById("ui_keyboard").classList.toggle("active");
    document.getElementById("ui_trackpad").classList.toggle("active");
    showTrackpad();
});
$("#trackpad_back").click(function(){
    document.getElementById("ui_trackpad").classList.toggle("active");
    document.getElementById("ui_keyboard").classList.toggle("active");
    showKeyboard();
});
$("#trackpad_next").click(function(){
    document.getElementById("ui_trackpad").classList.toggle("active");
    document.getElementById("ui_logo").classList.toggle("active");
    showLogo();
});
$("#logo_back").click(function(){
    document.getElementById("ui_logo").classList.toggle("active");
    document.getElementById("ui_trackpad").classList.toggle("active");
    showTrackpad();
});
$("#logo_next").click(function(){
    document.getElementById("ui_logo").classList.toggle("active");
    document.getElementById("ui_content").classList.toggle("active");
    showContent();
});
$("#content_back").click(function(){
    document.getElementById("ui_content").classList.toggle("active");
    document.getElementById("ui_logo").classList.toggle("active");
    showLogo();
});