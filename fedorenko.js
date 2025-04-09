let contenitore = document.getElementById("contenitore");

function fedosaluta(){
    
alert("Ciao da Fedorenko");
}
function fedomusica(){
console.log("Ciao sono Nazar, non ho una musica pre")
}

function fedopugno(){

}


function fedocasuale(x,y){
let numeroCasuale = Math.floor(Math.random() * x) + y;
console.log("numero casuale: " + numeroCasuale);

}

fedocasuale(230,40);
fedocasuale(450,19);
fedocasuale(80,200);

function fedoaggiungitit(a){
for(let index = 0; index < a; index++){
    const fgt = document.createElement("h1");
    const cont = document.getElementById("contenitore");
    fgt.textContent = "Ciao" + index;
cont.appendChild(fgt);
}

}

function FedorenkoVerde(){
    const contenitore = document.getElementById("contenitore");
    contenitore.className = "verde-corsivo";
}
