//rewriting theEmojiPalette as a single Sketch, a state machine
let theCanvas, theContxt;
let theMachine = -1;
let thePrsnPlcThng = [];
let theTxtPhase, thePntPhase, thePxlPhase;
let thePrsnButton, thePlaceButton, theThingButton;
let thePrsnPlcThngCntrls = [];

function preload() {
    for (var i = 0; i < 3; i++) {
        thePrsnPlcThng[i] = loadImage('theData/theCntxt/prsnPlcThng' + i + '.png');
    }
}

function setup() {
    theMachine = -1;
    theCanvas = createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < thePrsnPlcThng.length; i++) {
        let aButton = new theCntrl(thePrsnPlcThng[i], (i * 75) + 50, height - 100);
        thePrsnPlcThngCntrls.push(aButton)
        console.log(thePrsnPlcThngCntrls)
    }
}

function theTxt() {
    theTxtPhase = new txtPage();
}

function thePnt() {
    thePntPhase = new pntPage();
}

function thePxl() {
    thePxlPhase = new pxlPage();
}

function theCntrl(photo, x, y) {
    this.photo = photo;
    this.x = x;
    this.y = y;
    this.display = function() {
        image(this.photo, this.x, this.y, 50, 50)
    }
}

function draw() {
    // -1 will be the landing page
    if (theMachine == -1) {
        // greenScreen
        theContxt = background(0, 160, 0);
    }
    // 0 will be the txt page
    if (theMachine == 0) {
        // Red
        theTxt();
    }
    // 1 will be the pnt page
    if (theMachine == 1) {
        thePnt();
    }
    // 2 will be the pxl page
    // Yellow
    if (theMachine == 2) {
        thePxl();
    }
    //R
    if (mouseIsPressed && mouseY > windowHeight / 2) {
        theMachine = 0;
    }
    //G
    if (mouseIsPressed && mouseY < windowHeight / 2) {
        theMachine = 1;
    }
    //B
    if (mouseIsPressed && mouseX < windowWidth / 2 && mouseY < windowHeight / 2) {
        theMachine = 2;
    }
    for (let i = 0; i < thePrsnPlcThngCntrls.length; i++) {
        thePrsnPlcThngCntrls[i].display();
    }
}
