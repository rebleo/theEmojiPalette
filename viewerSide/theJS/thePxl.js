function pxlPage(thisPhase) {
    theMachine = 2;
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
// translation enginee
// var platPalette = [];
// // --------- { thePixel - Color == Emoji  } --------//
// function pxlPage(thisPage) {
//     var theCanvas;
//     var newImage;
//     let newSize;
//     let slideRed, slideGreen, slideBlue;
//     var personPalette = [];
//     var theCharacter;
//     var theUser = false;
//     var theSelection = false;
//     var theCharacter;
//     var theInput, theSubmission;
//     var theClick;
//     let pixelPalette;
//     let newR, newG, newB;
//     thisPage.setup = function() {
//         theCanvas = thisPage.createCanvas(350, 500);
//         thisPage.background(150);
//         thisPage.pixelDensity(1);
//         let someFolks = ['👩', '👨']
//         let folk = random(someFolks)
//         theInput = thisPage.createInput(folk);
//         theInput.position(50, 500);
//         theInput.size(100);
//         theInput.addClass('pxlPage')
//         theSubmission = thisPage.createButton('make 💬');
//         theSubmission.position(theInput.x + 5 + theInput.width, theInput.y);
//         theSubmission.mousePressed(thisPage.submitPerson);
//         theSubmission.addClass('pxlPage');
//         theClick = thisPage.createButton('📷 | 💾 click');
//         theClick.position(thisPage.width - 100, theInput.y);
//         theClick.mousePressed(thisPage.click);
//         theClick.addClass('pxlPage');
//         slideRed = thisPage.createSlider(-180, 180, 0);
//         thisPage.push();
//         thisPage.fill(255, 0, 0);
//         thisPage.noStroke();
//         thisPage.rect(25, 400, 10, 10);
//         thisPage.pop();
//         slideRed.position(50, 425);
//         slideRed.style('width', '300px');
//         slideRed.addClass('pxlPage');
//         thisPage.push();
//         thisPage.fill(0, 255, 0);
//         thisPage.noStroke();
//         thisPage.rect(25, 425, 10, 10);
//         thisPage.pop();
//         slideGreen = thisPage.createSlider(-180, 180, 0);
//         slideGreen.position(50, 450);
//         slideGreen.style('width', '300px');
//         slideGreen.addClass('pxlPage');
//         thisPage.push();
//         thisPage.fill(0, 0, 255);
//         thisPage.noStroke();
//         thisPage.rect(25, 450, 10, 10);
//         thisPage.pop();
//         slideBlue = thisPage.createSlider(-180, 180, 0);
//         slideBlue.position(50, 475);
//         slideBlue.style('width', '300px');
//         slideBlue.addClass('pxlPage');
//         pixelPalette = thisPage.createImage(400, 400);
//         thisPage.loadPixels();
//     }
//     thisPage.draw = function() {
//         newR = slideRed.value();
//         newG = slideGreen.value();
//         newB = slideBlue.value();
//         thisPage.display(platPalette);
//         for (var i = 0; i < platPalette.length; i++) {
//             if (thisPage.mouseX > platPalette[i].x && thisPage.mouseX < platPalette[i].x + platPalette[i].w && thisPage.mouseY > platPalette[i].y && thisPage.mouseY < platPalette[i].y + platPalette[i].h) {
//                 if (mouseIsPressed) {
//                     // console.log(platPalette[i])
//                     mouseDown = true;
//                     theCharacter = platPalette[i]
//                     console.log(theCharacter)
//                     theSelection = true;
//                 }
//             }
//         }
//         if (theSelection == true) {
//             var theVariable = thisPage.glitch(theCharacter)
//             var aVariable = thisPage.selectPerson(theVariable);
//         }
//         // thisPage.updatePixels();
//     } // this is the end of thisPage.draw
//     thisPage.selectPerson = function(photo) {
//         // console.log(photo)
//         // photo.loadPixels();
//         photo.resize(250, 250)
//         thisPage.image(photo, 50, 95)
//     }
//     thisPage.submitPerson = function(success, error) {
//         // theUser = true;
//         let viewerWord = theInput.value();
//         let theBinary = new RegExp(viewerWord)
//         for (var i = 0; i < viewerWord.length; i++) {
//             // loadJSON('/emoji/' + viewerWord, success, error);
//             loadJSON('/persons/' + viewerWord, success, error);
//         }
//
//         function success(emotions) {
//             var fb, google, apple, samsung, windows, twitter, one;
//             var medias = [];
//             for (var i = 0; i < emotions[0].length; i++) {
//                 fb = emotions[0][0].fb;
//                 google = emotions[0][0].google;
//                 apple = emotions[0][0].apple;
//                 samsung = emotions[0][0].samsung;
//                 windows = emotions[0][0].windows;
//                 twitter = emotions[0][0].twitter;
//                 one = emotions[0][0].one;
//                 medias.push(fb, google, apple, samsung, windows, twitter, one);
//             }
//             //var aPlate = [];
//             for (var j = 0; j < medias.length; j++) {
//                 platPalette[j] = loadImage(medias[j]);
//             }
//         }
//
//         function error() {
//             console.log("nope!")
//         }
//     }
//     thisPage.display = function(photos, x, y, w, h) {
//         var x = 0;
//         var y = 25;
//         var w = 50;
//         var h = 50;
//         var thePPl = [];
//         var thePersons = [];
//         thisPage.updatePixels();
//         for (var i = 0; i < photos.length; i++) {
//             photos[i].x = (i * 50) + x;
//             photos[i].y = y;
//             photos[i].w = w;
//             photos[i].h = h;
//             personPalette.push(photos[i]);
//         }
//         for (var i = 0; i < personPalette.length; i++) {
//             thisPage.image(personPalette[i], (i * 50) + x, y, w, h);
//         }
//         for (var i = 0; i < photos.length; i++) {
//             personPalette.splice(photos[i]);
//         }
//         // theUser = false;
//     }
//     thisPage.glitch = function(photo) {
//         // console.log("glitch")
//         photo.loadPixels();
//         photo.resize(200, 200)
//         var pP = createImage(photo.width, photo.height);
//         pP.loadPixels();
//         for (var x = 0; x < photo.width; x++) {
//             for (var y = 0; y < photo.height; y++) {
//                 let theLocation = (x + y * photo.width) * 4;
//                 var r = photo.pixels[theLocation];
//                 var g = photo.pixels[theLocation + 1];
//                 var b = photo.pixels[theLocation + 2];
//                 var a = photo.pixels[theLocation + 3];
//                 var glitchR = r + newR;
//                 if (glitchR < 0) {
//                     glitchR = glitchR + 256;
//                 }
//                 var glitchG = g + newG;
//                 if (glitchG < 0) {
//                     glitchG = glitchG + 256;
//                 }
//                 var glitchB = b + newB;
//                 if (glitchB < 0) {
//                     glitchB = glitchB + 256;
//                 }
//                 var newLocation = (x + y * photo.width) * 4;
//                 pP.pixels[newLocation + 0] = glitchR % 256;
//                 pP.pixels[newLocation + 1] = glitchG % 256;
//                 pP.pixels[newLocation + 2] = glitchB % 256;
//                 pP.pixels[newLocation + 3] = a;
//             }
//         }
//         pP.updatePixels();
//         return pP;
//     }
//     thisPage.click = function() {
//         console.log("save!")
//         thisPage.saveCanvas(theCanvas, 'myGreatDrawing', 'png')
//     }
// }
