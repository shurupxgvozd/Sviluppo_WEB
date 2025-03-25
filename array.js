let colori = ["red", "green", "orange", "Aquamarine", "Silver", "violet", "gold"];
let contenitore = document.getElementById("contenitore");
 

let style = document.createElement('style');
document.head.appendChild(style);
let stylesheet = style.sheet;
 
for (let index = 0; index < colori.length; index++) {
  const elemento = colori[index];
  const coloreTesto = colori[colori.length - 1 - index];
  const fontSize = (index + 1) * 10 + "px";
 
  const nuovoParagrafo = document.createElement("p");
  nuovoParagrafo.textContent = elemento;
 
 
  let className = "paragrafo-" + index;
  nuovoParagrafo.classList.add(className);
 
  contenitore.appendChild(nuovoParagrafo);
 

  stylesheet.insertRule(`.${className} {
    background-color: ${elemento};
    color: ${coloreTesto};
    font-size: ${fontSize};
    margin-right: ${index}%;
    padding: ${index}%;
    border: 2px solid black;
  }`, stylesheet.cssRules.length);
}