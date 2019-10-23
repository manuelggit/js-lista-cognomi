// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi
// e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// Creo un array con i cognomi

var lista = ['Rossi', 'Verdi', 'Bianchi', 'Bellini', 'Rossini', 'Puccini'];
console.log(lista.sort());

// Chiedo all’utente il cognome

var cognome = prompt('Scrivi il cognome');
console.log(cognome);

// Verifico che il cognome NON sia presente

var cognomeOK = false;

var contenutoPrecedente;

for (var i = 0; i < lista.length; i++) {
  contenutoPrecedente = document.getElementById('js_lista').innerHTML;
  console.log(contenutoPrecedente);
  document.getElementById('js_lista').innerHTML = contenutoPrecedente + '<li>' + lista[i] + '</li>';
  if(cognome === lista[i]){
    cognomeOK = true;
  }
}

// Stampo il messaggio corrispondente

if(cognomeOK){
  document.getElementById('js_mex').innerHTML = 'sei già in lista';
} else {
  document.getElementById('js_mex').innerHTML = 'NON sei in lista';
}

// inseriscilo in un array con altri cognomi
