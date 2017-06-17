//rewriting theEmojiPalette as a single Sketch, a state machine
let theCanvas, theContxt;
let theMachine = -1;

function setup(){
	theMachine = -1;
	theCanvas = createCanvas(windowWidth,windowHeight);
	let theTxtPhase = new txtPage()

}

function draw(){
	
	// -1 will be the landing page
	if (theMachine == -1){
		theContxt = background(0, 160, 0);
	}
	// 0 will be the txt page
	// Red
	if (theMachine == 0){
		theContxt = background(255, 0, 0);
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
