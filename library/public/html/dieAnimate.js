function dieAnimate() {
    var images = ["lib://ca.wgd/image/die-1.png", "lib://ca.wgd/image/die-2.png", "lib://ca.wgd/image/die-3.png", "lib://ca.wgd/image/die-4.png", "lib://ca.wgd/image/die-5.png", "lib://ca.wgd/image/die-6.png"];

    var timesRun = 0;
    var i = 0;
    var interval = setInterval(function () {
        if (i == images.length) {
            i = 0;
        }
        var dice = document.getElementsByClassName("animatedDie");
        for (var d in dice) {
            dice[d].src = images[i];
        }
        i++;
        timesRun++;
        if (timesRun == 20) {
            clearInterval(interval);
            for (var d in dice) {
                var dieValue = Number(dice[d].getAttribute("die-result"));
                dice[d].src = images[dieValue - 1];
            }
        }
    }, 20);
}