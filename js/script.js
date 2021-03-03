/*Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/

//Chiedere all'utente il cognome
var cognome = prompt("Qual è il tuo cognome?");

//Inserirlo in un array con altri cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
listaCognomi.push(cognome);

//Stampa la lista ordinata alfabeticamente
document.getElementById('alfabeto').innerHTML= "Lista cognomi: " + listaCognomi.sort();

/*Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/
document.getElementById('posizione').innerHTML= "Il nuovo utente si trova alla posizione numero: " + (listaCognomi.indexOf(cognome) + 1);
