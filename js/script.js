const BACKGROUND_COLOR = 0xAAAAAA;
var scene = new THREE.Scene();
scene.background = new THREE.Color(BACKGROUND_COLOR );

CameraControls.install( { THREE: THREE } );

var camera = new THREE.PerspectiveCamera(  90, window.innerWidth/window.innerHeight, 0.1, 1000 );
//camera.position.z = 100;
camera.position.set( -25, 90, 30 );

var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var controls = new THREE.OrbitControls( camera , renderer.domElement);

// controls.maxPolarAngle = 1.24;
// controls.minPolarAngle = 0;
// // //controls.minAzimuthAngle = -0.01;
// // //controls.maxAzimuthAngle = 0.01;
//  controls.enableZoom = true;
//  controls.enablePan = false;

// controls.minDistance = 5;
// controls.maxDistance = 100;

var cameraControls = new CameraControls( camera, renderer.domElement );
cameraControls.dollyToCursor = true;
cameraControls.maxPolarAngle = 1.24;
cameraControls.minPolarAngle = 0;
cameraControls.minDistance = 1;
cameraControls.maxDistance = 100;

const clock = new THREE.Clock();

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 100%)'), 5.0);
keyLight.position.set(-50, 30, 0);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 100%)'), 5.0);
fillLight.position.set(50, -30, 0);


var ambientLight = new THREE.AmbientLight( 0xcccccc, 4 );
scene.add( ambientLight );

var pointLight = new THREE.PointLight( 0xffffff, 0.1 );
camera.add( pointLight );
scene.add( camera );

// var fillLight1 = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 1.0);
// fillLight1.position.set(25, 90, 50);

// var fillLight2 = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 1.0);
// fillLight2.position.set(25, 90, 50);

// var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
// backLight.position.set(0, 90, -50).normalize();

//scene.add(keyLight);
//scene.add(fillLight);

// var mtlLoader = new THREE.MTLLoader();
// //mtlLoader.setTexturePath('./assets/');
// mtlLoader.setPath('./assets/');
// mtlLoader.load('building_simplified_3d_mesh.mtl', function (materials) {

//     materials.preload();

//     var objLoader = new THREE.OBJLoader();
//    // objLoader.setMaterials(materials);
//    objLoader.setPath('./assets/');
//     objLoader.load('building_3_1.obj', function (object) {

//       //console.log(object);
//     //object.position.z = 60;
//     //object.rotation.x= degrees_to_radians(-40);
//     scene.add(object);
        

//     });

// });

//---------------------------------------------- objloader-----------------------

// var loader = new THREE.OBJLoader();

// // load a resource
// loader.load(
// 	// resource URL
// 	'./assets/building_3_1.obj',
// 	// called when resource is loaded
// 	function ( object ) {

// 		scene.add( object );

// 	},
// 	// called when loading is in progresses
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

//-------------------------------------fbxloader---------------------------

var loader = new THREE.FBXLoader();
loader.load( './assets/building_2.FBX', function ( object ) {

  console.log("------------111111111------------");
  scene.add( object );
  console.log("------------22222222222222------------");

} );

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

var animate = function () {
	//requestAnimationFrame( animate );
	//controls.update();
	//console.log("Azimuth : "+controls.getAzimuthalAngle());
  //console.log(controls.getPolarAngle());//getPolarAngle () : radians
  
  const delta = clock.getDelta();
	const hasControlsUpdated = cameraControls.update( delta );

	requestAnimationFrame( animate );

	renderer.render( scene, camera );


	//renderer.render(scene, camera);
};

animate();
