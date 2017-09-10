let paintBox = [];
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
  //
  //
  // --- --- --- { make the platform palette } --- --- ---
  for (let i = 0; i < theBigData.length; i++) {
    image(theBigData[i], 5, (height - 300) + 30 * i, 15, 15)
  }
}

function makeColor(color, x, y, id, state) {
  this.color = color;
  this.x = x;
  this.y = y;
  let medias = [];
  this.display = function() {
    fill(color);
    noStroke();
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
          // console.log(emojis.length)
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
        }

        function gotError(emojis) {
          console.log("nope!")
        }
        updatePixels();
      }
    }
  }
  this.makePalette = function(emojis, x, y) {
    var x = 0;
    var y = height - 300;
    for (let i = 0; i < medias.length; i++) {
      for (let j = 0; j < medias[i].length; j++) {
        image(medias[i][j], 25 + (30 * i), (height - 300) + 30 * j, 25, 25)
      }
    }
    // updatePixels();
  }
}
// --------- { EMOJI DRAW-SELECTION SECTION } --------//
function thisEmoji(photos, x, y, w, h, id) {
  this.photos = photos;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.grab = false;
  this.paint = false;
  let theBrush;
  let theMarkers = [];
  this.displayEmoji = function() {
    updatePixels();
    image(this.photos, this.x, this.y, this.w, this.h);
    if (this.grab == true && mouseIsPressed) {
      mouseDown = true;
      //this makes paint true
      theBrush = this.photos;
      this.paint = true;
    } else {
      this.grab = false;
      this.paint = false;
    }
  }
  this.paintEmoji = function() {
    if (mouseX > -25 && mouseX < width + 25 && mouseY > -25 && mouseY <= height + 25) {
      if (theBrush && mouseIsPressed) {
        mouseDown = true;
        image(theBrush, pmouseX, pmouseY, this.w, this.h);
      }
    }
  }
  this.selectEmoji = function() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      if (mouseIsPressed) {
        mouseDown = true;
        this.grab = true;
      } else {
        this.grab = false;
      }
    }
  }
}
