// rebecca (marks) leopold, 2017
//rewriting theEmojiPalette as a single Sketch, a state machine
let theCanvas, theContxt, thePhase;
let theMachine = -1;
let thePrsnPlcThng = [];
let thePrsnButton, thePlaceButton, theThingButton;
let thePrsnPlcThngCntrls = [];
let theBigData = [];
let txtElements = [];

function preload() {
    for (var i = 0; i < 3; i++) {
        thePrsnPlcThng[i] = loadImage('theData/theCntxt/prsnPlcThng' + i + '.png');
    }
    for (var i = 0; i < 5; i++) {
        theBigData[i] = loadImage('theData/thePltfrm/bigData' + i + '.png');
    }
}

function setup() {
    theMachine = -1;
    theCanvas = createCanvas(windowWidth, windowHeight);
    txtElements = document.getElementsByClassName('txtStuff');
    //
    //
    // --- --- --- { this establishes the three sections }  --- --- ---  //
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
    //
    //
}
//
//
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
    this.selectPhase = function mouseReleased() {
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            if (mouseIsPressed) {
                thePhase = this.id;
            }
        }
    }
}

function draw() {
    if (theMachine == -1) {
        textSize(24)
        text("😶 ⭕️ 😶 ⭕️ 😶 ⭕️ 😶", 50, 100)
    }
    if (thePhase == "txt") {
        new txtPage();
    }
    if (thePhase == "pnt") {
        new pntPage();
        //
        //  display canvas elemnts from pnt.js
        for (var i = 0; i < paintBox.length; i++) {
            paintBox[i].display();
            paintBox[i].colorSelect();
        }
        // hide the dom elements from the other pages
        for (let i = 0; i < txtElements.length; i++) {
            txtElements[i].hidden = true;
        }
    }
    if (thePhase == "pxl") {
        new pxlPage();
        for (let i = 0; i < txtElements.length; i++) {
            txtElements[i].hidden = true;
        }
    }
    for (let i = 0; i < thePrsnPlcThngCntrls.length; i++) {
        thePrsnPlcThngCntrls[i].display();
        thePrsnPlcThngCntrls[i].selectPhase();
    }
}
