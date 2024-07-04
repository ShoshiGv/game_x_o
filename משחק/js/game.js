
let turn = true;
let x = 0;
var timer = 15;
let timeout;
let btn1 = document.querySelectorAll(".bth")

btn1.forEach(b => {
    b.addEventListener("click", btnpress)
})

function btnpress() {
    light_turn();
    if (this.textContent != "")
        return
    if (turn) {
        this.textContent = "x"
    }
    else {
        this.textContent = "o"
    }
    if (win()) {
        if (this.textContent != "o")
            window.location.href = "./x_wan.html";
        if (this.textContent != "x")
            window.location.href = "./o_wan.html"
    }

    if (x === 8 && !win()) {
        teko();
    }

    turn = !turn
    x++;
}
function win() {
    let btn1 = document.querySelectorAll(".bth")
    if (btn1[0].textContent == btn1[1].textContent && btn1[1].textContent == btn1[2].textContent && btn1[2].textContent != "") {
        return true
    }
    else if (btn1[3].textContent == btn1[4].textContent && btn1[3].textContent == btn1[5].textContent && btn1[3].textContent != "") {
        return true
    }
    else if (btn1[6].textContent == btn1[7].textContent && btn1[7].textContent == btn1[8].textContent && btn1[6].textContent != "") {
        return true
    }
    else if (btn1[0].textContent == btn1[3].textContent && btn1[3].textContent == btn1[6].textContent && btn1[0].textContent != "") {
        return true
    }
    else if (btn1[1].textContent == btn1[4].textContent && btn1[4].textContent == btn1[7].textContent && btn1[1].textContent != "") {
        return true
    }
    else if (btn1[2].textContent == btn1[5].textContent && btn1[5].textContent == btn1[8].textContent && btn1[2].textContent != "") {
        return true
    }
    else if (btn1[0].textContent == btn1[4].textContent && btn1[4].textContent == btn1[8].textContent && btn1[0].textContent != "") {
        return true
    }
    else if (btn1[2].textContent == btn1[4].textContent && btn1[4].textContent == btn1[6].textContent && btn1[2].textContent != "")
        return true
    else return false
}

function teko() {

    var retVal = confirm("no one won, Do you want to play again ?");
    if (retVal == true) {
        start_again();
    }
    else {
        home_back();
    }
}

function start_game() {
    window.location.href = "./1.html";
}

function start_again() {
    window.location.href = "./game.html";
}

function home_back() {
    window.location.href = "./home_Page.html";
}

function light_turn() {
    if (turn) {
        document.getElementById("x").style.color = "transparent";
        document.getElementById("o").style.color = "grey";
    }
    else {
        document.getElementById("o").style.color = "transparent";
        document.getElementById("x").style.color = "grey";
    }
}
function log_out() {
    window.location.href = "./login.html"
}

function timedCount() {
    document.getElementById("Timer").innerHTML = timer;
    timeout = setTimeout(timedCount, 1000);
    timer--;
    if (timer === -2) {
        stopTimer();
        time_over();
    }
}
function stopTimer() {
    clearTimeout(timeout);
    timer = 15
}
function time_over() {

    var retVal = confirm("time is over, Do you want to play again ?");
    if (retVal == true) {
        start_again();
        return true;
    }
    else {
        home_back();

    }

}


