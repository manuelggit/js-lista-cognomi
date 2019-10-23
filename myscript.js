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

var i = 0;
while(i < lista.length && cognomeOK === false){
  contenutoPrecedente = document.getElementById('js_lista').innerHTML;
  console.log(contenutoPrecedente);
  document.getElementById('js_lista').innerHTML = contenutoPrecedente + '<li>' + lista[i] + '</li>';

  if(cognome === lista[i]){
    cognomeOK = true;
  }
  console.log('la mia iterazione è arrivata a: ', i)
  document.getElementById('posizione').innerHTML = 'Sei il numero ' + (i+1) + ' della lista';

  i++
}

// Stampo il messaggio corrispondente

if(cognomeOK){
  document.getElementById('js_mex').innerHTML = 'sei già in lista';
} else {
  document.getElementById('js_mex').innerHTML = 'NON sei in lista';
  lista.push(cognome);
}

var pos = lista.indexOf(cognome);
console.log('Posizione nuovo cognome:', pos)
