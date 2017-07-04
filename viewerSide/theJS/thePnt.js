let paintBox = [];
let thePigment = [];

function pntPage(thisPhase) {
    theMachine = 1;
    theContxt = background(255);
    var red = color(255, 0, 0, 220);
    var green = color(0, 160, 0, 220);
    var blue = color(0, 0, 255, 220);
    var yellow = color(255, 200, 0, 220);
    var orange = color(255, 165, 0, 220);
    var purple = color(128, 0, 128, 220);
    //var colors = {"red": 0, "orage": 1, "yellow": 2};
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
        let thePigment = new selectColor(colors[i].c, (i * 30) + 10, height - 150);
        paintBox.push(thePigment);
    }
    for (var i = 0; i < paintBox.length; i++) {
        paintBox[i].display();
    }
}

function selectColor(color, x, y, id) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.display = function() {
        fill(color);
        noStroke();
        rect(this.x, this.y, 25, 30);
    }
}
