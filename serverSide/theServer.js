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
    theApp.get('/emoji/:color', theMedium);

    function theMedium(request, response) {
        var theMessage = [];
        var theColor = request.params.color;
        for (var i = 0; i < theRGB.colors.length; i++) {
            var theColorChoices = theRGB.colors[i];
            // theSelectedColor is the whole color object with emoji, images & meta data of the selected color
            var theSelectedColor = theColorChoices[theColor];
            console.log(theSelectedColor)
            for (var j = 0; j < theSelectedColor.length; j++) {
                var theString = theSelectedColor[j].images;
                theMessage.push(theString)
            }
        }
        // pick it up again here. the client isn't not recieving theMessage.
        response.send(theMessage);
        theMessage.splice(0, theMessage.length)
    }
}
