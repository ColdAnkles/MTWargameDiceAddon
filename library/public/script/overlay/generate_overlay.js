"use strict";

function generate_overlay() {
    let diceList = JSON.parse(read_data("diceArray"));
    let animating = JSON.parse(read_data("animArray"));
    if (diceList.length == 0) {
        return ""
    }

    MTScript.evalMacro("[h:viewArea = getViewArea(1, 'json')][h: zoom=getZoom()]");
    let viewArea = JSON.parse(MTScript.getVariable("viewArea"));
    let zoom = MTScript.getVariable("zoom");
    let viewHeight = (viewArea.endY - viewArea.startY) * zoom;
    let viewWidth = (viewArea.endX - viewArea.startX) * zoom;

    let overlayHTML = "<html>";

    overlayHTML += "<head><meta charset='UTF-8'>\
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\
                    <link rel='stylesheet' type='text/css' href='lib://ca.wgd/css/dieRoller.css'>\
                    <script src='lib://ca.wgd/html/dieAnimate.js'></script></head>";

    overlayHTML += "<body onload='dieAnimate();'>";


    overlayHTML += "<table style='position: absolute;top: " + String(viewHeight - 100) + "px;width:100%'>";
    overlayHTML += "<tr><td style='text-align:center;vertical-align:bottom;'><h2 style='margin:0;'><span style='background-color:white;'>" + String(diceList.length) + "</span></h2></td><tr>"
    overlayHTML += "<tr><td style='text-align:center;vertical-align:bottom;'>"
    for (var d in diceList) {
        if (animating.length != diceList.length || (animating.length == diceList.length && animating[d])) {
            overlayHTML += "<img class='animatedDie' src='lib://ca.wgd/image/die-" + String(diceList[d]) + ".png' alt='Spinning Image' width='50' height='50' die-result='" + String(diceList[d]) + "'></img>";
        } else if (animating.length == diceList.length && !animating[d]) {
            overlayHTML += "<img class='staticDie' src='lib://ca.wgd/image/die-" + String(diceList[d]) + ".png' alt='Static Image' width='50' height='50'></img>"
        }
    }
    overlayHTML += "</td></tr></table>"

    overlayHTML += "</html>";

    return overlayHTML;
}

MTScript.registerMacro("ca.wgd.generate_overlay", generate_overlay);