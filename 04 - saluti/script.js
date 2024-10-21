/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";
// `Ciao ${string}`

// Dichiara la funzione qui.
const message = (string) => {
  return `// Ciao ${string}`;
};

// Invoca la funzione qui e stampa il risultato in console
const welcomeMessage = message(name);
console.log(welcomeMessage);

//Risultato atteso se si passa 'Mario': // ciao Mario
