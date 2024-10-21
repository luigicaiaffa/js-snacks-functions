/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const vocaliInString = (string) => {
  //   console.log(string);

  const vocali = ["a", "e", "i", "o", "u"];

  const lettersList = string.split("");
  //   console.log(lettersList);

  let newArray = [];

  for (let i = 0; i < lettersList.length; i++) {
    const currentLetter = lettersList[i];
    // console.log(currentLetter);

    const isCurrentLetterVocale = vocali.includes(currentLetter);
    // console.log(isCurrentLetterVocale);

    if (isCurrentLetterVocale) {
      newArray.push(currentLetter);
    }
  }

  console.log(newArray);
  return newArray.length;
};

// Invoca la funzione qui e stampa il risultato in console
const result = vocaliInString(word);
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
