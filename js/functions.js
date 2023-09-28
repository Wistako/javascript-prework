function printMessage(msg) {
    let div = document.createElement("div");
    div.innerHTML = msg;
    document.getElementById("messages").appendChild(div);
}
function printResult(res) {
    let div = document.createElement("div");
    div.innerHTML = res;
    document.getElementById("result").appendChild(div);
}

function clearMessages() {
    document.getElementById("messages").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}
