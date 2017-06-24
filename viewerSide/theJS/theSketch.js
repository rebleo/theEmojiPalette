//rewriting theEmojiPalette as a single Sketch, a state machine
let theCanvas, theContxt;
let theMachine = -1;
let thePrsnPlcThng = [];
let theTxtPhase;

function preload(){
	for (var i = 0; i < 3; i++) {
			thePrsnPlcThng[i] = loadImage('theData/theCntxt/prsnPlcThng' + i + '.png');
	}
}
function setup(){
	theMachine = -1;
	theCanvas = createCanvas(windowWidth,windowHeight);
}

function theTxt(){
	theTxtPhase = new txtPage();

}

function draw(){

	// -1 will be the landing page
	if (theMachine == -1){
		// greenScreen
		theContxt = background(0, 160, 0);
		let thePrsnButton = image(thePrsnPlcThng[0],50,200,50,50);
		let thePlaceButton = image(thePrsnPlcThng[1],125,200,50,50);
		let theThingButton = image(thePrsnPlcThng[2],200,200,50,50);
	}
	// 0 will be the txt page
	if (theMachine == 0){
			// Red
		theTxt();

	}
	// 1 will be the pnt page
	// Green
	if (theMachine == 1){
		theContxt = background(0, 255, 0);
	}
	// 2 will be the pxl page
	// Blue
	if (theMachine == 2){
		theContxt = background(0, 0, 255);
	}
	//R
	if (mouseIsPressed && mouseY > windowHeight/2){
		theMachine = 0;
	}
	//G
	if (mouseIsPressed && mouseY < windowHeight/2){
		theMachine = 1;
	}
	//B
	if (mouseIsPressed && mouseX < windowWidth/2 && mouseY < windowHeight/2){
		theMachine = 2;
	}


}
