// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// Creo un array con i cognomi

var lista = ['Rossi', 'Verdi', 'Bianchi', 'Bellini', 'Rossini', 'Puccini'];
console.log(lista);

// Chiedo all’utente il cognome

var cognome = prompt('Scrivi il cognome');
console.log(cognome);

// Verifico che il cognome NON sia presente

// var i = 0;
// while(i < lista.lenght){
//   // codice da eseguire
//   console.log(lista[i]);
//   if(cognome === lista[i]){
//     console.log('Sei già in lista!');
//     document.getElementById('js_mex').innerHTML = 'Sei già in lista!';
//   }
//   // istruzioni per terminare il ciclo
//   i++;
// }

var cognomeOK = false;

for (var i = 0; i < lista.lenght; i++) {
  if(cognome === lista[i]){
    cognomeOK = true;
  }
}

if(cognomeOK){
  document.getElementById('js_mex').innerHTML = 'sei già in lista';
} else {
  document.getElementById('js_mex').innerHTML = 'NON sei in lista';
}




// inseriscilo in un array con altri cognomi
