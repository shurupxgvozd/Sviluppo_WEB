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
 document.body.className = "verde-corsivo";
}

function FedorenkoGrigi(){
    document.body.className = "grigio";
}

function sconosciuta(numeroParagrafi) {
    for (let i = 0; i < numeroParagrafi; i++) {

        const paragrafo = document.createElement('p');
        paragrafo.textContent = `Paragrafo ${i + 1}`;
        

        const coloreRandom = '#' + Math.floor(Math.random()*16777215).toString(16);
        paragrafo.style.backgroundColor = coloreRandom;
        paragrafo.style.padding = '10px';
        paragrafo.style.margin = '5px 0';
        

        document.body.appendChild(paragrafo);
    }
}


function rimuoviParagrafiEAggiungiSfondo() {
    // Rimuove tutti i paragrafi
    const paragrafi = document.querySelectorAll('p');
    paragrafi.forEach(paragrafo => paragrafo.remove());
    
    // Genera un colore casuale per lo sfondo
    const coloreRandom = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = coloreRandom;
}


function chiediParolaEInserisciImmagini() {
    // Chiede all'utente di inserire una parola
    const parola = prompt("Inserisci una parola:");

    if (parola) {
        // Determina il numero casuale di immagini da inserire (ad esempio tra 1 e 5)
        const numeroImmagini = Math.floor(Math.random() * 5) + 1;

        // Aggiungi la parola come titolo nella pagina
        const titolo = document.createElement('h2');
        titolo.textContent = `Parola inserita: ${parola}`;
        document.body.appendChild(titolo);

        // Ciclo per creare le immagini
        for (let i = 0; i < numeroImmagini; i++) {
            // Crea un nuovo elemento <img>
            const img = document.createElement('img');
            
            // Genera un URL casuale per l'immagine (esempio da un API pubblica di immagini)
            img.src = `https://picsum.photos/200?random=${Math.random()}`;
            img.alt = `Immagine casuale ${i + 1}`;
            img.style.margin = '10px';
            
            // Aggiunge l'immagine al body
            document.body.appendChild(img);
        }
    }
}