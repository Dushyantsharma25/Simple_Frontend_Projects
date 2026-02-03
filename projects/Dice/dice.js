var button1 = document.querySelector("button.name1");
var img1 = document.querySelector("img.dice1");
var button2 = document.querySelector("button.name2");
var img2 = document.querySelector("img.dice2");
var heading = document.querySelector("h1");

function random(){
    return ((Math.floor(Math.random()*6))) + 1;
}

var t1 = 1;
var t2 = 1;

button1.addEventListener("click" ,() => {
    t1 = random();
    var source = `d${t1}.png`;
    img1.src = source;
    var h = "Juggle the Dice";

    if(t1 === t2){
        h = "Its a DRAW!";
    }else if(t1>t2){
        h = "Hurrah! 1st Player won!";
    }else{
        h = "Hurrah! 2nd Player won!";
    }

    heading.innerHTML = h;
})


button2.addEventListener("click" ,() => {
    t2 = random();
    var source = `d${t2}.png`;
    img2.src = source;
    
    if(t1 === t2){
        h = "Its a DRAW!";
    }else if(t1>t2){
        h = "Hurrah! 1st Player won!";
    }else{
        h = "Hurrah! 2nd Player won!";
    }

    heading.innerHTML = h;
})

document.addEventListener("load" , () => {
    t1 = random();
    var source = `d${t1}.png`;
    img1.src = source;
    t2 = random();
    var source = `d${t2}.png`;
    img2.src = source;

    var h = "Juggle the Dice";

    if(t1 === t2){
        h = "Its a DRAW!";
    }else if(t1>t2){
        h = "Hurrah! 1st Player won!";
    }else{
        h = "Hurrah! 2nd Player won!";
    }

    heading.innerHTML = h;
})

