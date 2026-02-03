var pass = document.querySelector("input.textbox");


document.querySelector("button.reset").addEventListener("click", () => {
    pass.value = "";
})


document.querySelector("button.gnrt").addEventListener("click" , () => {
    let h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?";

    let y = h.length;

    var k = "";


    for(var i = 0;i<25;i++){
        var j = Math.floor(Math.random()*y) + 1;
        k+=h[j];
    }

    pass.value = k;

    document.querySelector("button.copy").innerHTML = "Copy";


})

document.querySelector("button.copy").addEventListener("click" , () => {
    navigator.clipboard.writeText(pass.value);

    document.querySelector("button.copy").innerHTML = "Copied!";
})