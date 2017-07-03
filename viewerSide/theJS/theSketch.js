//rewriting theEmojiPalette as a single Sketch, a state machine
let theCanvas, theContxt;
let theMachine = -1;
let thePrsnPlcThng = [];
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
    // to toggle between sketches
    let theButtons = [{
        id: 0,
        phs: "txt"
    }, {
        id: 1,
        phs: "pnt"
    }, {
        id: 2,
        phs: "pxl"
    }]
    for (var i = 0; i < thePrsnPlcThng.length; i++) {
        let aButton = new theCntrl(thePrsnPlcThng[i], (i * 75) + 75, height - 100, 50, 50);
        aButton.id = theButtons[i].phs;
        thePrsnPlcThngCntrls.push(aButton)
        // console.log(thePrsnPlcThngCntrls[i].id)
    }
}
// this constructor thing is for images that are buttons.
function theCntrl(photo, x, y, w, h, id) {
    this.photo = photo;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.display = function() {
        image(this.photo, this.x, this.y, this.w, this.h)
    }
    this.selectPhase = function() {
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            if (mouseIsPressed) {
                this.thePhase(this.id);
            }
        }
    }
    this.thePhase = function(data) {
        if (data == "txt") {
            new txtPage();
        }
        if (data == "pnt") {
            new pntPage();
        }
        if (data == "pxl") {
            new pxlPage();
        }
    }
}

function draw() {
    if (theMachine == -1) {
        textSize(24)
        text("😶 ⭕️ 😶 ⭕️ 😶 ⭕️ 😶", 50, 100)
    }
    for (let i = 0; i < thePrsnPlcThngCntrls.length; i++) {
        thePrsnPlcThngCntrls[i].display();
        thePrsnPlcThngCntrls[i].selectPhase();
    }
}
