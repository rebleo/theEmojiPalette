console.log("txt!")
var aPlatformPalette = [];
// // --------- { theTxt Page - Txt == Pixel} --------//
function txtPage(thisPhase) {
    background(255, 0, 0);
    let theSearch;
    theSearch = createSelect('search 💬');
    theSearch.position(50, 400);
    theSearch.option('😶 | persons');
    theSearch.option('🌲 | place');
    theSearch.option('💬 | thing');
    theSearch.addClass("txtStuff")
    //
    //
    // line the page for fun
    // immediate mode, means just like on draw runs. not sving any info in glbl variables. local stuff.
    push();
    stroke(255, 192, 200, 100);
    strokeWeight(3);
    line(50, 0, 50, windowHeight);
    pop();
    push();
    stroke(0, 0, 200, 100);
    strokeWeight(2);
    for (var i = 0; i < windowHeight; i++) {
        line(0, 20 * i, windowWidth, 20 * i);
    }
    pop();
}
//     thisPage.setup = function() {
//
//         var theFaces = theSearch.option('😶 | emojis');
//         // var theForests = theSearch.option('🌲 | nature');
//         // var theObjects = theSearch.option('🤖 | things');
//         // var theFlags = theSearch.option('🏳️ | flags');
//         theSearch.changed(makeSelection)
//         theSearch.addClass('txtPage')
//         thisPage.push();
//         thisPage.stroke(255, 192, 200, 100);
//         thisPage.strokeWeight(3);
//         let theMargin = thisPage.line(50, 0, 50, windowHeight);
//         thisPage.pop();
//         thisPage.push();
//         thisPage.stroke(0, 0, 200, 100);
//         thisPage.strokeWeight(2);
//         for (var i = 0; i < windowHeight; i++) {
//             thisPage.line(0, 20 * i, windowWidth, 20 * i);
//         }
//         thisPage.pop();
//     }
//     makeSelection = function() {
//         var theSelected = theSearch.value();
//         // console.log(theSelected)
//         var aPerson = 'person'
//         if (theSelected == '👩 | persons') {
//             // console.log(aPerson)
//             loadJSON('/emoji/' + aPerson, success);
//         }
//
//         function success(emotions) {
//             // console.log(emotions[0])
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
//             var aPlate = [];
//             for (var j = 0; j < medias.length; j++) {
//                 aPlatformPalette[j] = loadImage(medias[j]);
//             }
//         }
//     }
//     // why isn't this fucking working!!!??
//     thisPage.draw = function() {
// 				thisPage.display(aPlatformPalette)
//     }
//
// 		thisPage.display = function(photos, x, y, w, h) {
//         var x = 0;
//         var y = 100;
//         var w = 50;
//         var h = 50;
//     		var emojiPalette = [];
//         thisPage.updatePixels();
//         for (var i = 0; i < photos.length; i++) {
//             photos[i].x = (i * 50) + x;
//             photos[i].y = y;
//             photos[i].w = w;
//             photos[i].h = h;
//             emojiPalette.push(photos[i]);
//         }
//         for (var i = 0; i < emojiPalette.length; i++) {
//             thisPage.image(emojiPalette[i], (i * 50) + x, y, w, h);
//         }
//         for (var i = 0; i < photos.length; i++) {
//             emojiPalette.splice(photos[i]);
//         }
//
//     }
//     thisPage.click = function() {
//         console.log("save!")
//         thisPage.saveCanvas(theCanvas, 'myGreatDrawing', 'png')
//     }
// }
//
// function submitTxt(success, error) {
//     let viewerWord = theInput.value();
//     let viewerWords = viewerWord.split(" ");
//     var theRegExPhrase = [];
//     var thePoem = [];
//     thePoem.push(viewerWords)
//     console.log(thePoem)
//
//     loadJSON('/search/' + thePoem, success, error);
//     //this is where it works for one word!
//     // loadJSON('/search/' + viewerWords, success, error);
//     function success(emotions) {
// 			console.log(emotions)
// 				var fb, google, apple, samsung, windows, twitter, one;
//         var medias = [];
//         for (var i = 0; i < emotions.length; i++) {
//             fb = emotions[0][i].fb;
//             google = emotions[0][i].google;
//             apple = emotions[0][i].apple;
//             samsung = emotions[0][i].samsung;
//             windows = emotions[0][i].windows;
//             twitter = emotions[0][i].twitter;
//             one = emotions[0][i].one;
// 						medias.push(fb, google, apple, samsung, windows, twitter, one);
//
//         }
// 				var aPlate = [];
//         for (var j = 0; j < medias.length; j++) {
//             aPlatformPalette[j] = loadImage(medias[j]);
//         }
// 				medias.splice(0,medias.length)
//     }
//
//
//     function error() {
//         console.log("nope!")
//     }
//
// }
//
// }
