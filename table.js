startLoading();
loader.load('assets/table.dae', function (collada) {
    endLoading();
    var dae = collada.scene;
    dae.position.set(0, -1, 0); //x,z,y- if you think in blender dimensions ;)
    dae.scale.set(0.1, 0.1, 0.1);
    scene.add(dae);
    
    render();
});