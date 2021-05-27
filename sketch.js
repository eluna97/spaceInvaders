
let fondo;
let imgJugador;
let imgEnemigo;
function preload() {
	fondo=loadImage("Game/img/fondo1.jpg");  
	imgJugador=loadImage("Game/img/nave1.png");  
	imgEnemigo=loadImage("Game/img/alien2.png");
	imgWeapon =loadImage("Game/img/fire.png");
}
let juego= new Game();
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//background(fondo);
	background("white");

	juego.display();
	

}