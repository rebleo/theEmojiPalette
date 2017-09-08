var theFileSystem = require('fs');
//
//
//// --- --- --- { theData } --- --- --- ///
var rawRGB = theFileSystem.readFileSync('bigData/theROYGBV.json');
var theRGB = JSON.parse(rawRGB)
//
//
//// --- --- --- { theServer } --- --- --- ///
var theExpress = require('express');
var theApp = theExpress();
//
//
//// --- --- --- { read theData } --- --- --- ///
var theBodyParser = require('body-parser')
var theCors = require('cors');
theApp.use(theBodyParser.urlencoded({
    extended: false
}));
theApp.use(theBodyParser.json());
theApp.use(theCors());
//
//
/// --- --- --- { start theServer } --- --- --- ///
var theServer = theApp.listen(17777, makeEmoji);
theApp.use(theExpress.static('../viewerSide'));

function makeEmoji() {
    console.log("cool! server running on port 17777")
    //
    //
    // --- --- --- { get PNT data } --- --- ---
    theApp.get('/emoji/:color/', theMedium);

    function theMedium(request, response) {
        var theMessage = [];
        var thisMessage0 = [];
        var thisMessage1 = [];
        var thisMessage2 = [];
        var theEmoji0, theEmoji1, theEmoji2;
        var theNames = [];
        var theRandoms = [];
        var theImages = [];
        var theColor = request.params.color;
        // console.log(theColor)
        for (var i = 0; i < theRGB.colors.length; i++) {
            // this holds all the data organized by color
            var theColorChoices = theRGB.colors[i];
            // theSelectedColor is the whole color object with emoji, images & meta data of the selected color
            var theSelectedColor = theColorChoices[theColor];
            for (var j = 0; j < theSelectedColor.length; j++) {
                theNames[j] = theSelectedColor[j].name;
                var random0 = Math.floor(Math.random() * (theNames.length - 1) + 1);
                var random1 = Math.floor(Math.random() * (theNames.length - 1) + 1);
                var random2 = Math.floor(Math.random() * (theNames.length - 1) + 1);
                var theRandom0 = theNames[random0]
                var theRandom1 = theNames[random1]
                var theRandom2 = theNames[random2]
                var theEmoji0 = new RegExp(theRandom0)
                var theEmoji1 = new RegExp(theRandom1)
                var theEmoji2 = new RegExp(theRandom2)
                if (theNames[j].match(theEmoji0)) {
                    thisMessage0[j] = theSelectedColor[j].images;
                }
                if (theNames[j].match(theEmoji1)) {
                    thisMessage1[j] = theSelectedColor[j].images;
                }
                if (theNames[j].match(theEmoji2)) {
                    thisMessage2[j] = theSelectedColor[j].images;
                }
            }
        }
        theMessage.push(thisMessage0, thisMessage1, thisMessage2)
				console.log(theEmoji0, theEmoji1, theEmoji2)
				response.send(theMessage);
				theMessage.splice(0, theMessage.length)
    }


}
