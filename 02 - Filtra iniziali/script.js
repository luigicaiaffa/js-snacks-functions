/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const firstLetterWordFinder = (stringList, letter) => {
    console.log(stringList);
    console.log(letter);

    let newArray = [];

    for (let i = 0; i < stringList.length; i++) {
        const currentString = stringList[i];
        console.log(currentString);
        
        const isLetterIncluded = currentString.includes(letter);
        console.log(isLetterIncluded);
        
        if (isLetterIncluded) {
            newArray.push(currentString);
        }
    }

    return newArray;
};

// Invoca la funzione qui e stampa il risultato in console
const nameWithA = firstLetterWordFinder(names, 'A')
console.log(nameWithA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]