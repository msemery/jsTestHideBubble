

function inLoad() {
    var container = document.getElementById("container");
    for (let i = 0; i < 15 ; i++) {
        container.insertAdjacentHTML('beforeend','<div id="bulle' + i + ' " class="bulle" onclick="hideElement(this)"> </div>');
        container.insertAdjacentHTML('beforeend','<div id="bubulle' + i + ' "class="bubulle" onclick="hideElement(this)"></div>');
    };
}
function hideElement(item) {
    var blop = document.getElementById(item.id);
    if (blop.style.display== "hidden") {
        blop.style.display = "block";
    } else {
        blop.style.display = "none";
    }
}


