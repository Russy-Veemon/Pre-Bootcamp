// var temphigh = [
//     document.querySelector(".temphigh-1"),
//     document.querySelector(".temphigh-2"),
//     document.querySelector(".temphigh-3"),
//     document.querySelector(".temphigh-4")
// ];
// var templow = [
//     document.querySelector(".templow-1"),
//     document.querySelector(".templow-2"),
//     document.querySelector(".templow-3"),
//     document.querySelector(".templow-4")
// ];
// var newtemplow = ["65°", "66°", "61°", "70°"];
// var newtemphigh = ["75°", "80°", "69°", "78°"];
var cookieDiv = document.querySelector("#popup");

function cityweather() {
    alert("Loading weather report...");
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function chooseTemp(element) {
    alert("You picked " + element.value);
    if (temphigh[id] = temphigh[id]) {
        temphigh[id] = newtemphigh[id]
    }

}

function accept() {
    cookieDiv.remove();
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<11; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}