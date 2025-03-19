for(let contatore = 1; contatore < 6;contatore++){
    console.log("Ivan non ha detto ciao per " + contatore + " volte!");
}

for(let index = 0; index < 20; index++){
    let numeroCasualeDec = Math.random() * 100;
    let NUMCASAR = Math.floor(numeroCasualeDec);
    console.log(NUMCASAR);
}

let contenitore = document.getElementById("contenitore");

for (let index = 0; index < 6; index++) {
    const nuovoElemento = document.createElement("p");
   nuovoElemento.textContent = index;
    nuovoElemento.style.textAlign = "center";
    nuovoElemento.style.padding = "1%";
    nuovoElemento.style.color = "red";
    nuovoElemento.style.background = "gold";
    nuovoElemento.style.margin = "1%";
    contenitore.appendChild(nuovoElemento);
}