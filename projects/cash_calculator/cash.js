let y = 0;

var t = document.querySelector("select#phone");
var h = document.querySelector("input#amount");
var k = document.querySelector("input#phone");
var m = document.querySelector("button#fun");
var g = document.querySelector("p.message");
var name = document.querySelector("input#name");

t.addEventListener("change", () => {
    if(t.value == "1"){
        h.placeholder = "Enter amount ( ₹ )";
        k.placeholder="+91 012-3456-789";
    }else if(t.value == "2"){
        h.placeholder = "Enter amount ( $ )";
        k.placeholder="+1 012-3456-789";
    }else if(t.value == "3"){
        h.placeholder = "Enter amount ( ¥ )";
        k.placeholder = "+89 ABCD-EFGH-IJK";
    }
})

m.addEventListener("click", () => {
    if(name.value != "" && t.value != "" && h.value != ""){
        if(t.value == "1"){
            y += Number(h.value)/90;
        }else if(t.value == "2"){
            y += Number(h.value);
        }else if(t.value == "3"){
            y += Number(h.value)*0.14;
        }

        g.innerHTML = `Total ${y.toFixed(2)}$ Donated By Angels`;
    }

})

// document.querySelector("form").addEventListener("submit", (e) => {
//     e.preventDefault();
// });