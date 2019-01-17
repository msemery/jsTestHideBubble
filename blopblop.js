


var compteur = 0;
function inLoad() {
    var container = document.getElementById("container");
    for (let i = 0; i < 30 ; i++) {
        container.insertAdjacentHTML('beforeend','<div id="bulle' + i + ' " class="bulle" onclick="hideElement(this)"> </div>');
        container.insertAdjacentHTML('beforeend','<div id="bubulle' + i + ' "class="bubulle" onclick="hideElement(this)"></div>');
    };
}
function showE() {
   var mechant = document.getElementById('container');
    for (let i = 0; i < 40; i++) {
       mechant.insertAdjacentHTML('beforeend', '<div class="mechantBlop" id="mechantBlop'+ i +'" onclick="hideElement(this)"></div>');

    }

}
function hideElement(item) {
    var blop = document.getElementById(item.id);
    // var  bubulle = document.getElementsByClassName("bubulle");
    // for (let i = 0; i < bubulle; i++) {
    //     container.insertAdjacentHTML('beforeend','<div class="bubulle ' + i + ' " onclick="hideElement(this)"></div>');
    //         if (bubulle.style.display== "hidden") {
    //             bubulle.style.display = "block";
    //         } else {
    //             bubulle.style.display = "none";
    //         }  
    //     }
        if (blop.style.display== "hidden") {
            blop.style.display = "block";
        } else {
            blop.style.display = "none";
            compteur+=1;
            document.getElementById("compteur").innerHTML = compteur;
        } 
    }
    
