let colori = ["red", "green", "orange", "Aquamarine", "Silver", "violet", "gold"];

let contenitor = document.getElementById("contenitore");
for (let index = 0; index < colori.length; index++){
const elemento = colori[index];
const coloretesto = colori[colori.length-1 - index]
console.log(elemento);

const nuovoParagrafo = document.createElement("p");
nuovoParagrafo.textContent = elemento;
nuovoParagrafo.style.backgroundColor = elemento;
nuovoParagrafo.style.color = coloretesto;
contenitor.appendChild(nuovoParagrafo);
}
