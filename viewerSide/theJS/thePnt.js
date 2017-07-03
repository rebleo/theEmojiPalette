let paintBox = [];
let thePigment = [];

function pntPage(thisPhase) {
    theMachine = 1;
    theContxt = background(0, 255, 0);
    var red = color(255, 0, 0, 220);
    var green = color(0, 160, 0, 220);
    var blue = color(0, 0, 255, 220);
    var yellow = color(255, 200, 0, 220);
    var orange = color(255, 165, 0, 220);
    var purple = color(128, 0, 128, 220);
    //var colors = {"red": 0, "orage": 1, "yellow": 2};
    let colors = [{
        color: red,
        id: 'red'
    }, {
        color: orange,
        id: 'orange'
    }, {
        color: yellow,
        id: 'yellow'
    }, {
        color: green,
        id: 'green'
    }, {
        color: blue,
        id: 'blue'
    }, {
        color: purple,
        id: 'purple'
    }];
}
//
// function pntPage(thisPage) {
// var theCarrier;
// var colorDecision;
// var colorDecide = false;
// var platformDecision;
// var colors;
// var theTest;
// var aPlate = [];
// thisPage.setup = function() {
// }
//     thisPage.draw = function() {
//         // for (var i = 0; i < thePeople.length; i++) {
//         //     thisPage.image(thePeople[i], (i * 30) + 225, 560, 25, 25);
//         // }
//         // for (var i = 0; i < paintBox.length; i++) {
//         //     if (thisPage.mouseX > paintBox[i].x && thisPage.mouseX < paintBox[i].x + paintBox[i].w && thisPage.mouseY > paintBox[i].y && thisPage.mouseY < paintBox[i].y + paintBox[i].h) {
//         //         if (mouseIsPressed) {
//         //             mouseDown = true;
//         //             colorDecision = paintBox[i].id;
//         //             thisPage.gotPix(colorDecision)
//         //             console.log(colorDecision)
//         //         }
//         //     }
//         // }
//     }
//     // thisPage.gotPix = function(decision) {
//     //     thisPage.loadJSON('/paint/' + decision, success, error)
//     //
//     //     function success(emotions) {
//     //         var apple = [];
//     //         var fb = [];
//     //         var google = [];
//     //         var twitter = [];
//     //         var medias = [];
//     //         for (var i = 0; i < emotions[0].length; i++) {
//     //             fb = emotions[0][0].fb;
//     //             google = emotions[0][0].google;
//     //             apple = emotions[0][0].apple;
//     //             twitter = emotions[0][0].twitter;
//     //             medias.push(fb, google, apple, twitter)
//     //         }
//     // for (var j = 0; j < medias.length; j++) {
//     //         //     aPlate[j] = thisPage.loadImage(medias[j]);
//     //         // }
//     //     }
//     //
//     //     function error() {
//     //         console.log("nope!")
//     //     }
//     //     colorDecide = true;
//     // }
//     // // ----------- { COLOR SECTION } ---------------- //
//     // thisPage.colorOption = function(color, x, y, w, h) {
//     //     var x;
//     //     var y;
//     //     var w;
//     //     var h;
//     //     thisPage.fill(color);
//     //     thisPage.noStroke();
//     //     thisPage.rect(x, y, w, h);
//     // }
//     // thisPage.pickCarrier = function() {
//     //     console.log(theCarrier.value());
//     // }
// }
