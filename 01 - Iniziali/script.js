/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function stringsFirstLetters(stringsList) {
  // console.log(stringsList)
  
  let newArray = [];

  for (let i = 0; i < names.length; i++) {
    const currentString = names[i];
    // console.log(currentString);
    
    const stringFirstLetter = currentString.charAt(0);
    // console.log(stringFirstLetter);

    newArray.push(stringFirstLetter);
    // console.log(newArray);
  }

  return newArray;
};
  
// Invoca la funzione qui e stampa il risultato in console
const namesFirstLetters = stringsFirstLetters(names)
console.log(namesFirstLetters)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
