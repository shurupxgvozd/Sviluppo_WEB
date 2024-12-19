//visibilità globale cioè in tutte le parti del codice
{
var miaVariabile = 80;
}
//visibilità di blocco
{
let miaVariabile = 67;
console.log("dichiarata con il let: " + miaVariabile);
}

console.log("dichiarata con il var: " + miaVariabile); //stamperà il valore 80


//----------------------------------------------
// una variabile dichiarata con let può essere riassegnata
let esempio1 = 30;

console.log("esempio1= " + esempio1);

esempio1 = "castagne";

console.log("esempio1= " + esempio1);


// con const non può essere riassegnata (tranne per alcuni casi specifici)
const esempio2 = 7;
console.log("esempio2= " + esempio2) //ok