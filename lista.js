const bottoneAggiungi = document.getElementById('bottone-aggiungi');
const lista = document.getElementById('lista');
const bottoneTogli = document.getElementById('bottone-togli');

console.log(lista.children.length);

//al click del mouse attiva la funzione anonima
bottoneAggiungi.addEventListener('click', function (){
    
    //apre un prompt per l'inserimento del testo 
const userInput = prompt("inserisci il testo");

//creo un nuovo elemento list item
    const nuovoElemento = document.createElement('li');
    nuovoElemento.textContent = userInput
    lista.appendChild(nuovoElemento);
    })

    bottoneTogli.addEventListener('click',function(){

lista.lastElementChild.remove();



    })