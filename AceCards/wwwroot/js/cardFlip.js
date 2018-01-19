$(document).ready(function () {

    var cards = document.querySelectorAll(".card.effect_flip");
    var time = 2000;
    var timer;
    var getEachCard;


    loop();
    setInterval(function () { loop(); }, 60000);

    function loop() {

        for (var i = 0; len = cards.length, i < len; i++) {

            getEachCard = cards[i];

            if (i === 0) {
                time = 10000;
            }
            else if (i === 1) {
                time = 20000;
            }
            else if (i === 2) {
                time = 30000;
            }
            else if (i === 3) {
                time = 40000;
            }
            else if (i === 4) {
                time = 50000;
            }
            else if (i === 5) {
                time = 60000;
            }
            cardFlip(getEachCard, time);
        }

    }

    function cardFlip(getEachCard, time) {
        var c = getEachCard.classList;

        timer = setTimeout(function () {
            if (c.contains("flipped") === false) {
                c.add("flipped");
            }
            var newTime = 10000;
            cardFlipBack(getEachCard, newTime);
        }, time);
    }

    function cardFlipBack(getEachCard, time) {
        var c = getEachCard.classList;

        timer = setTimeout(function () {
            if (c.contains("flipped") === true) {
                c.remove("flipped");
            }
        }, time);
    }

});