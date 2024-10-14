import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, SceneLoader } from '@babylonjs/core';
import '@babylonjs/loaders/glTF'; // Importa el plugin GLTF

@Component({
  selector: 'app-babylon-scene',
  standalone: true,
  imports: [],
  templateUrl: './babylon-scene.component.html',
  styleUrls: ['./babylon-scene.component.css'] // Nota: Debe ser 'styleUrls' y no 'styleUrl'
})
export class BabylonSceneComponent implements OnInit, AfterViewInit {

  private engine: Engine | undefined;
  private scene: Scene | undefined;
  private canvas: HTMLCanvasElement | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
      this.createEngineAndScene();
      this.loadModel();
      this.startRenderLoop();
    }
  }

  private createEngineAndScene(): void {
    if (!this.canvas) return;

    // Generar el motor de Babylon.js
    this.engine = new Engine(this.canvas, true);

    // Crear la escena
    this.scene = new Scene(this.engine);

    // Crear una cámara
    const camera = new ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 4, 4, Vector3.Zero(), this.scene);
    camera.attachControl(this.canvas, true);

    // Crear una luz
    new HemisphericLight('light1', new Vector3(1, 1, 0), this.scene);
  }

  private loadModel(): void {
    if (!this.scene) return;

    // Cargar el modelo
    SceneLoader.Append('assets/', 'Furniture.glb', this.scene, (scene) => {
      console.log('Modelo cargado');
    }, null, (scene, message, exception) => {
      console.error('Error al cargar el modelo:', message, exception);
    });
  }

  private startRenderLoop(): void {
    if (!this.engine || !this.scene) return;

    // Renderizar la escena
    this.engine.runRenderLoop(() => {
      if (this.scene) {
        this.scene.render();
      }
    });

    // Redimensionar el motor al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
      if (this.engine) {
        this.engine.resize();
      }
    });
  }
}
