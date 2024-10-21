/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
const message = (string) => {
  const currentTime = new Date().getHours();
  
  if (currentTime < 13) {
    return `// Buongiorno ${string}`;
  } 
  
  else if (currentTime > 18) {
    return `// Buonasera ${string}`;
  } 
  
  else {
    return `// Buon pomeriggio ${string}`;
  }
};

// Invoca la funzione qui e stampa il risultato in console
const welcomeMessage = message(name);
console.log(welcomeMessage);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
