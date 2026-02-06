let given = [];
let put = [];
let level = 0;
let started = false;

$(document).on("keydown", function () {
    level = 0;
    given = [];
    put = [];
    if (!started) {
        started = true;
        nextLevel();
    }
});

function nextLevel() {
    put = [];
    level++;
    $("#level-title").text("Level " + level);

    let r = Math.floor(Math.random() * 4);
    given.push(r);
    play(r);
}

$(".btn").on("click", function () {
    let id = $(this).attr("id");
    let map = { red: 0, green: 1, blue: 2, yellow: 3 };
    put.push(map[id]);

    play(map[id]);
    check(put.length - 1);
});

function check(i) {
    if (put[i] !== given[i]) {
        gameover();
        return;
    }

    if (put.length === given.length) {
        setTimeout(nextLevel, 1000);
    }
}

function play(n) {
    let colors = ["red", "green", "blue", "yellow"];
    let c = colors[n];

    $("#" + c).addClass("pressed");
    new Audio("./sounds/" + c + ".mp3").play();

    setTimeout(() => $("#" + c).removeClass("pressed"), 100);
}

function gameover() {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    new Audio("./sounds/wrong.mp3").play();
    setTimeout(() => $("body").removeClass("game-over"), 100);
    started = false;
    given = [];
}
