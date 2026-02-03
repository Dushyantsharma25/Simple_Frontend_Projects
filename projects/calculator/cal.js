let g = "";

for (let i = 0; i <= 9; i++) {
    document.getElementById(i).addEventListener("click", () => {
        g += i;
        document.getElementById("textcard").value = g;
    });
}


document.getElementById("A").addEventListener("click", () => {
    g = "";
    document.getElementById("textcard").value = g;
});


document.getElementById("B").addEventListener("click", () => {g += "/";document.getElementById("textcard").value = g;});
document.getElementById("C").addEventListener("click", () => {g += "*";document.getElementById("textcard").value = g;});
document.getElementById("D").addEventListener("click", () => {g += "-";document.getElementById("textcard").value = g;});
document.getElementById("E").addEventListener("click", () => {g += "+";document.getElementById("textcard").value = g;});
document.getElementById("F").addEventListener("click", () => {g += ".";document.getElementById("textcard").value = g;});


document.getElementById("G").addEventListener("click", () => {
    try {
        g = eval(g).toString();
    } catch {
        g = "Error";
    }
    document.getElementById("textcard").value = g;
});