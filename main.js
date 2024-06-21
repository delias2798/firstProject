// main.js

// Obtener el elemento canvas
var canvas = document.getElementById("renderCanvas");

// Generar el motor de Babylon.js
var engine = new BABYLON.Engine(canvas, true);

// Crear la escena
var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    // Crear una cámara
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Crear una luz
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

    // Crear una esfera
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

    return scene;
};

var scene = createScene();

// Renderizar la escena
engine.runRenderLoop(function () {
    scene.render();
});

// Redimensionar el motor al cambiar el tamaño de la ventana
window.addEventListener("resize", function () {
    engine.resize();
});
