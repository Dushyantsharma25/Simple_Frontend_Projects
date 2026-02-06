let given = [];
let put = [];
let level = 0;
let isplay = false;


$(document).on("keydown" , function(){
    if(!isplay){
        isplay = true;
        changeLevel();
    }
})


function changeLevel(){
    level++;
    $("#level-title").text("Level "+ String(level));
    let color = ["green","red","yellow","blue"];
    var r = Math.floor(Math.random()*4);
    given.push(r);
    color_press(color[r]);
}


$(".btn").on("click",function(){
    let id = $(this).attr("id");
    let map = {green:0,red:1,yellow:2,blue:3};
    put.push(map[id]);

    color_press(id);

    check();
})


function check(){
    let currentIndex = put.length - 1;

    if(put[currentIndex] !== given[currentIndex]){
        gameover();
        return;
    }

    if(put.length === given.length){
        setTimeout(() => {
            put = [];
            changeLevel();
        }, 800);
    }
}



function color_press(r){
    $("#"+r).addClass("pressed");
    const s = new Audio("./sounds/"+r+".mp3");
    s.play();
    setTimeout(function(){$("#"+r).removeClass("pressed")}, 100);
}


function gameover() {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    new Audio("./sounds/wrong.mp3").play();
    setTimeout(() => $("body").removeClass("game-over"), 100);
    isplay = false;
    given = [];
    put = [];
    level = 0;
}
