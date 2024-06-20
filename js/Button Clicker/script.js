// login logout founction
function change(element) {
    var stat1 = document.querySelector("#log");
    if (stat1.value == 'login') {
        stat1.innerText = "logout";
        stat1.value = "logout";
    }
    else {
        stat1.innerText = "login";
        stat1.value = "login";

    }
}

// lik1
var countt=13;
var val0=document.querySelector("#lik-val0");
console.log(val0.value)
function example(element) {
    countt++;    
    val0.innerText = countt;
    alert("Ninja was liked    "+"'' " +countt+" ''")


}

// lik2 
var count=37;
var val1=document.querySelector("#lik-val1");
function example1(element) {
    count++;    
    val1.innerText = count;
    alert("Ninja was liked    "+"'' " +count+" ''")

}
// remouv
function change2(element) {
    element.remove();
}
