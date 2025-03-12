const buttonColore = document.getElementById("change-color");
const contenitore = document.getElementById("box");
const body = document.getElementById("body");
const buttonSfondo = document.getElementById("cambia-sfondo");
 
function cambiaColore() {
    let nuovoColore = Math.floor(Math.random() * 10);
    let colore = "white";
    if (nuovoColore === 0) {
        colore = "red";
    } else if (nuovoColore === 1) {
        colore = "green";
    } else if (nuovoColore === 2) {
        colore = "blue";
    } else if (nuovoColore === 3) {
        colore = "yellow";
    } else if (nuovoColore === 4) {
        colore = "orange";
    } else if (nuovoColore === 5) {
        colore = "pink";
    } else if (nuovoColore === 6) {
        colore = "violet";
    } else if (nuovoColore === 7) {
        colore = "brown";
    } else if (nuovoColore === 8) {
        colore = "purple";
    } else if (nuovoColore === 9) {
        colore = "black";
    }
    return colore;
}
 
console.log(cambiaColore());
 
buttonColore.addEventListener("click", function() {
    contenitore.style.backgroundColor = cambiaColore();
});
 
const buttonMargine = document.getElementById("cambia-margini");
 
function cambiaMargine() {
    let nuovoMargine = Math.floor(Math.random() * 6);
    let margine = "50%";
    if (nuovoMargine === 0) {
        margine = "7%";
    } else if (nuovoMargine === 1) {
        margine = "9%";
    } else if (nuovoMargine === 2) {
        margine = "8%";
    } else if (nuovoMargine === 3) {
        margine = "3%";
    } else if (nuovoMargine === 4) {
        margine = "4%";
    } else if (nuovoMargine === 5) {
        margine = "6%";
    }
    return margine;
}
 
console.log(cambiaMargine);
 
buttonMargine.addEventListener("click", function() {
    contenitore.style.margin = cambiaMargine();
});
 
const buttonColoreTesto = document.getElementById("cambia-colore-testo");
 
function cambiaColoreTesto() {
    let nuovoColore = Math.floor(Math.random() * 11);
    let colore = "white";
    if (nuovoColore === 0) {
        colore = "red";
    } else if (nuovoColore === 1) {
        colore = "green";
    } else if (nuovoColore === 2) {
        colore = "blue";
    } else if (nuovoColore === 3) {
        colore = "yellow";
    } else if (nuovoColore === 4) {
        colore = "orange";
    } else if (nuovoColore === 5) {
        colore = "pink";
    } else if (nuovoColore === 6) {
        colore = "violet";
    } else if (nuovoColore === 7) {
        colore = "brown";
    } else if (nuovoColore === 8) {
        colore = "purple";
    } else if (nuovoColore === 9) {
        colore = "black";
    } else if (nuovoColore === 10) {
        colore = "silver";
    }
    return colore;
}
 
console.log(cambiaColoreTesto);
 
buttonColoreTesto.addEventListener("click", function() {
    contenitore.style.color = cambiaColoreTesto();
});
 
const buttonPadding = document.getElementById("cambia-padding");
 
function cambiaPadding() {
    let nuovoMargine = Math.floor(Math.random() * 6);
    let padding = "50%";
    if (nuovoMargine === 0) {
        padding = "7%";
    } else if (nuovoMargine === 1) {
        padding = "9%";
    } else if (nuovoMargine === 2) {
        padding = "8%";
    } else if (nuovoMargine === 3) {
        padding = "3%";
    } else if (nuovoMargine === 4) {
        padding = "4%";
    } else if (nuovoMargine === 5) {
        padding = "6%";
    }
    return padding;
}
 
console.log(cambiaPadding);
 
buttonPadding.addEventListener("click", function() {
    contenitore.style.padding = cambiaPadding();
});
 

buttonSfondo.addEventListener("click", function() {
    body.style.backgroundColor = cambiaColore();
});
 