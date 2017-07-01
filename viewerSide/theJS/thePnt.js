function pntPage(thisPhase) {
    theContxt = background(0, 0, 255);
    // line the page for fun
    push();
    stroke(255, 192, 200, 100);
    strokeWeight(3);
    let theMargin = line(50, 0, 50, windowHeight);
    pop();
    push();
    stroke(0, 0, 200, 100);
    strokeWeight(2);
    for (var i = 0; i < windowHeight; i++) {
        line(0, 20 * i, windowWidth, 20 * i);
    }
    pop();
}
// var paintBox = [];
// var thePigment = [];
//
// function pntPage(thisPage) {
//     var theCarrier;
//     var colorDecision;
//     var colorDecide = false;
//     var platformDecision;
//     var colors;
//     var theTest;
//     var aPlate = [];
//     thisPage.setup = function() {
//         thisPage.createCanvas(350, 500);
//         // thisPage.background(0, 150, 0);
//         thisPage.pixelDensity(1);
//         thisPage.colorMode(RGB);
//         var red = thisPage.color(255, 0, 0, 220);
//         var green = thisPage.color(0, 160, 0, 220);
//         var blue = thisPage.color(0, 0, 255, 220);
//         var yellow = thisPage.color(255, 200, 0, 220);
//         var orange = thisPage.color(255, 165, 0, 220);
//         var purple = thisPage.color(128, 0, 128, 220);
//         //var colors = {"red": 0, "orage": 1, "yellow": 2};
//         colors = [{
//             color: red,
//             id: 'red'
//         }, {
//             color: orange,
//             id: 'orange'
//         }, {
//             color: yellow,
//             id: 'yellow'
//         }, {
//             color: green,
//             id: 'green'
//         }, {
//             color: blue,
//             id: 'blue'
//         }, {
//             color: purple,
//             id: 'purple'
//         }];
//     }
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
