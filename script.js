let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();

let skybox;

let solarSystem = [];
let planet_name = ["Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus"];
let dplanet_istanceRelToEarth = [0,0.3870320856,0.7229946524,1,1.523640642,5.203001337,9.538997326,19.18889162];
let planet_diameterRelToEarth = [5,0.3824082785,0.9488867984,1,0.5326121041,11.20915648,9.449357165,4.007369081];
let textures =["sunmap.jpg","mercurymap.jpg","venusmap.jpg","earthmap1k.jpg","mars_1k_color.jpg","jupitermap.jpg","saturnmap.jpg","uranusmap.jpg","neptunemap.jpg"]

function setUp(){
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
  }

setUp();
