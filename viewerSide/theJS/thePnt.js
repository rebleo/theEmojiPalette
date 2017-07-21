let paintBox = [];
console.log("paint!")

function pntPage(thisPhase) {
    //
    //
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
        image(theBigData[i], (30 * i) + width / 2, height - 150, 25, 25)
    }
}

function makeColor(color, x, y, id, state) {
    this.color = color;
    this.x = x;
    this.y = y;
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
                console.log(theColor)

                function gotData(emojis) {
                    // console.log(arguments) -- dispaly anything being passed in function
                    for (let i = 0; i < emojis.length; i++) {
                        if (theState == theState) {
                            makeImage(emojis[i])
                            // thisEmojiPalette.push(new thisEmoji(emojis[i], (i * 50) + 50, windowHeight - 250, 50, 50));
                        }
                    }
                }

                function gotError(data) {
                    console.log("nope!")
                }
            }
        }
    }
}
// --------- { EMOJI RANDO-SELECTION SECTION } --------//
// start again. this is wonky.
function makeImage(data) {
    let theEmotion = loadImage(data);
    // this.x = x;
    // this.y = y;
    // this.w = w;
    // this.h = h;
    let theEmotions = [];
    theEmotions.push(theEmotion)
    // push the image data into the array to be drawn to the canvas
    for (var i = 0; i < theEmotions.length; i++) {
        thisEmojiPalette.push(new thisEmoji(theEmotions[i], 50 + (i * 50), height - 250, 50, 50));
    }
}

function thisEmoji(data, x, y, w, h, id) {
    this.photo = data;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.select = false;
    this.paint = false;
    let theBrush;
    this.displayEmoji = function() {
        image(this.photo, this.x, this.y, this.w, this.h);
        if (this.select == true && mouseIsPressed) {
            mouseDown = true;
            //this makes paint true
            theBrush = this.photo;
            this.paint = true;
        } else {
            this.select = false;
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
                this.select = true;
            } else {
                this.select = false;
            }
        }
    }
}
