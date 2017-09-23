let paintBox = [];
let markers = [];
let theSelection = false;
let theBrush;
console.log("paint!")

function pntPage(thisPhase) {
  // --- --- --- { make the color palette } --- --- ---
  var red = color(255, 0, 0, 220);
  var green = color(0, 160, 0, 220);
  var blue = color(0, 0, 255, 220);
  var yellow = color(255, 200, 0, 220);
  var orange = color(255, 165, 0, 220);
  var purple = color(128, 0, 128, 220);
  let colors = [{
    c: red,
    id: 'red'
  }, {
    c: orange,
    id: 'orange'
  }, {
    c: yellow,
    id: 'yellow'
  }, {
    c: green,
    id: 'green'
  }, {
    c: blue,
    id: 'blue'
  }, {
    c: purple,
    id: 'purple'
  }];
  for (let i = 0; i < colors.length; i++) {
    let thePigment = new makeColor(colors[i].c, (i * 30) + 10, height - 150);
    thePigment.id = colors[i].id;
    thePigment.state = colors[i].state;
    paintBox.push(thePigment);
  }
  var canvasButton = createButton(' 💾');
  canvasButton.position(350, height - 150);
  canvasButton.mousePressed(saveClick);
  //
  // --- --- --- { make the platform palette } --- --- ---
  // for (let i = 0; i < theBigData.length; i++) {
  //   image(theBigData[i], 5, (height - 300) + 30 * i, 15, 15)
  // }
}

function makeColor(color, x, y, id, state) {
  this.color = color;
  this.x = x;
  this.y = y;
  let medias = [];
  this.display = function() {
    noFill();
    strokeWeight(3);
    stroke(color);
    rect(this.x, this.y, 25, 30);
  }
  this.colorSelect = function() {
    if (mouseX > this.x && mouseX < this.x + 25 && mouseY > this.y && mouseY < this.y + 30) {
      if (mouseIsPressed && !mouseDown) {
        mouseDown = true;
        let theColor = this.id;
        let theState = this.state;
        loadJSON("/emoji/" + theColor, gotData, gotError);
        // console.log(theColor)
        function gotData(emojis) {
          let fbImages = [];
          let gglImages = [];
          let appImages = [];
          let twtImages = [];
          for (let i = 0; i < emojis.length; i++) {
            var faceb = [];
            var google = [];
            var apple = [];
            var twitter = [];
            faceb.push(emojis[0][i][0].fb);
            google.push(emojis[0][i][0].google);
            apple.push(emojis[0][i][0].apple);
            twitter.push(emojis[0][i][0].twitter);
            for (let j = 0; j < faceb.length; j++) {
              fbImages.push(loadImage(faceb[j]));
              gglImages.push(loadImage(google[j]));
              appImages.push(loadImage(apple[j]));
              twtImages.push(loadImage(twitter[j]));
            }
          }
          medias.push(fbImages, gglImages, appImages, twtImages);
          markers.push(new makePalette(medias, 10, height - 250, 30, 30))
        }

        function gotError(emojis) {
          console.log("nope!")
        }
      }
    }
  }
}

function makePalette(emoji, x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.select = false;
  this.paint = false;
  let theX;
  let theY;
  let theEmoji;
  this.display = function() {
    for (let i = 0; i < emoji.length; i++) {
      for (let j = 0; j < emoji[i].length; j++) {
        theEmoji = emoji[i][j]
        theX = this.x + i * 30;
        theY = this.y + j * 30;
        image(theEmoji, theX, theY, this.w, this.h);
        if (this.select == true && mouseIsPressed) {
          mouseDown = true;
          //this makes paint true
          theBrush = theEmoji;
          this.paint = true;
          console.log(theBrush)
        } else {
          this.select = false;
          this.paint = false;
        }
      }
    }
  }
  this.makeMarks = function() {
    if (mouseX > 0 && mouseX < width && mouseY > 25 && mouseY <= 500) {
      if (this.select == true && mouseIsPressed) {
        mouseDown = true;
        image(theBrush, pmouseX, pmouseY, this.w, this.h);
      }
    }
  }
  this.marker = function() {
    if (mouseX > theX && mouseX < theX + this.w && mouseY > theY && mouseY < theY + this.h) {
      if (mouseIsPressed) {
        mouseDown = true;
        this.select = true;
      } else {
        this.select = false;
      }
    }
  }
}

function saveClick() {
  saveCanvas(theCanvas, 'newPix', 'jpg')
}
