// rebecca (marks) leopold, 2017
//
//
let theCanvas, theContxt, theMachine;
let thePrsnPlcThng = [];
let thePrsnButton, thePlaceButton, theThingButton;
let thePrsnPlcThngCntrls = [];
let theBigData = [];
let txtElements = [];
let mouseDown = false;
let thisEmojiPalette = [];

function preload() {
  for (var i = 0; i < 3; i++) {
    thePrsnPlcThng[i] = loadImage('theData/theCntxt/prsnPlcThng' + i + '.png');
  }
  for (var i = 0; i < 5; i++) {
    theBigData[i] = loadImage('theData/thePltfrm/bigData' + i + '.png');
  }
}

function mouseReleased() {
  mouseDown = false;
}

function setup() {
  theCanvas = createCanvas(windowWidth, windowHeight);
  txtElements = document.getElementsByClassName('txtStuff');
  //
  //
  // --- --- --- { this establishes the three phases }  --- --- ---  //
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
  }
  text("< title page >", 150, 180)
}
//
//
// this constructo r thing is for images that are buttons.
// this is for images that are preloaded
//
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
        theMachine = this.id;
        // console.log(theMachine)
      }
    }
  }
}
let thisColor;

function draw() {
  if (theMachine == "txt") {
    // txtPage();
  }
  /////
  ////
  ////
  ////
  if (theMachine == "pnt") {
    pntPage();
    //  display canvas elemnts from pnt.js
    for (var i = 0; i < paintBox.length; i++) {
      paintBox[i].display();
      // paintBox[i].colorSelect();
      var aColor = paintBox[i].colorSelect();
      paintBox[i].colorSelect();
      paintBox[i].makePalette();
    }
    //hide the dom elements from the other pages
    for (let i = 0; i < txtElements.length; i++) {
      txtElements[i].hidden = true;
    }
  }
  /////
  ////
  ////
  if (theMachine == "pxl") {
    // this is drawing to canvas
    // pxlPage();
    // hiding or showing dom elements shld happen when the state.
    for (let i = 0; i < txtElements.length; i++) {
      txtElements[i].hidden = true;
    }
  }
  /////
  ////
  for (let i = 0; i < thisEmojiPalette.length; i++) {
    thisEmojiPalette[i].selectEmoji();
    thisEmojiPalette[i].displayEmoji();
    thisEmojiPalette[i].paintEmoji();
  }
  ////
  ////
  for (let i = 0; i < thePrsnPlcThngCntrls.length; i++) {
    thePrsnPlcThngCntrls[i].display();
    thePrsnPlcThngCntrls[i].selectPhase();
  }
}
