let paintBox = [];
console.log("paint!")

function pntPage(thisPhase) {
    background(255);
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
        paintBox.push(thePigment);
    }
    //
    //
    // --- --- --- { make the platform palette } --- --- ---
    for (let i = 0; i < theBigData.length; i++) {
        image(theBigData[i], (30 * i) + width / 2, height - 150, 25, 25)
    }
}

function makeColor(color, x, y, id) {
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
                loadJSON("/emoji/" + theColor, gotData, gotError);
                console.log(theColor)
                //literally why isn't this working?
                function gotData(emojis) {
                    // console.log(arguments) -- dispaly anything being passed in function
                    for (let i = 0; i < emojis.length; i++) {
                        let aButton = new theEmoji(emojis[i], (i * 50) + 50, windowHeight - 250, 50, 50);
                        someEmojis.push(aButton)
                    }
                }
                // console.log(someEmojis);
                function gotError(data) {}
                // pick it up again here. data is returning as undefined!
            }
        }
    }
}
