/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

/* const sum = 10 + 20 */

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

/* const random = Math.floor(Math.random() * 21); */

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

/* const me = {
  name: "Alessandro",
  surname: "Basile",
  age: 31,
} */

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

/* delete me.age; */

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

/* me.skills = ["HTML", "CSS", "Javascript"] */

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

/* me.skills.push("C++") */

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

/* me.skills.pop() */

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

/* function dice (){
  return Math.floor(Math.random() * 6) +1
} */

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

/* function whoIsBigger (num1, num2){
  if (num1 > num2){
    return num1
  } else{
    return num2
  }
}
let result = whoIsBigger(3, 5)
console.log(result) */

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

/* const stringaEsempio = "I love coding"
function splitMe (stringaEsempio){
  return nuovoArrayStringhe
}
const nuovoArrayStringhe = stringaEsempio.split(' ')
console.log(nuovoArrayStringhe) */

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

/* const altraStringa = "Esempio"
const tagliaLaPrima = true
const deleteOne = function (altraStringa, tagliaLaPrima){
  if (tagliaLaPrima === true){
    return altraStringa.slice(1)
  } else {
    return altraStringa.slice(0,-1)
  }
}
const stringaTagliata = deleteOne(altraStringa, tagliaLaPrima)
console.log(deleteOne(altraStringa)) */

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

/* function onlyLetters(inputString) {
  // Utilizza una regex per eliminare tutte le cifre numeriche
  let resultString = inputString.replace(/\d/g, '');

  return resultString;
}

let input = "I have 4 dogs";
let output = onlyLetters(input);

console.log(output); */

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

/* function isThisAnEmail(str) {
  // Definiamo una regex per verificare il formato dell'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Testiamo la stringa con la regex e restituiamo il risultato
  return emailRegex.test(str);
} */

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

/* function whatDayIsIt() {
  // Prendi la data corrente
  const currentDate = new Date();

  // Ottieni il numero corrispondente al giorno della settimana (0...6)
  const dayOfWeek = currentDate.getDay();

  // Array di nomi dei giorni della settimana
  const daysOfWeek = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

  // Restituisci il nome del giorno della settimana corrente
  return daysOfWeek[dayOfWeek];
}
console.log(whatDayIsIt()) */

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

/* function dice (){
  return Math.floor(Math.random() * 6) +1
}
function rollTheDices (numOfRolls){
  const extractions = []
  let sum = 0;
  for (let i = 0; i < numOfRolls; i++) {
    const value = dice();
    extractions.push(value);
    sum += value;
  }
  return {
    sum: sum,
    extractions: extractions
  };
}
const result = rollTheDices(3);
console.log(result); */

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

/* function howManyDays(startDate) {
  // Ottieni la data corrente
  const currentDate = new Date();

  // Calcola la differenza tra la data corrente e la data di inizio
  const timeDifference = currentDate - startDate;

  // Calcola il numero di giorni convertendo la differenza da millisecondi in giorni
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}
const startDate = new Date('2023-01-01'); // Esempio data di inizio calcolo
const daysElapsed = howManyDays(startDate);
console.log("Sono trascorsi " + daysElapsed + " giorni dalla data specificata."); */


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

/* function isTodayMyBirthday(birthMonth, birthDay) {
  // Ottieni la data corrente
  const currentDate = new Date();

  // Estrai il giorno e il mese dalla data corrente
  const currentMonth = currentDate.getMonth() + 1; // Mesi sono zero-based, quindi aggiungi 1
  const currentDay = currentDate.getDate();

  // Confronta con il mese e il giorno di nascita
  return currentMonth === birthMonth && currentDay === birthDay;
}

// Esempio 
const myBirthMonth = 1; // Gennaio
const myBirthDay = 1; // 1 Gennaio
const isBirthdayToday = isTodayMyBirthday(myBirthMonth, myBirthDay);

console.log("Oggi è il mio compleanno? " + isBirthdayToday); */

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [

  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* function deleteProp(obj, propToDelete) {
  // Verifica se l'oggetto contiene la proprietà da eliminare
  if (obj.hasOwnProperty(propToDelete)) {
    // Copia l'oggetto originale per evitare modifiche dirette
    const newObj = { ...obj };
    // Elimina la proprietà dall'oggetto copiato
    delete newObj[propToDelete];
    // Restituisci l'oggetto modificato
    return newObj;
  }
}
const updatedMovie = deleteProp(movies[0], 'Type');
console.log(movies[0], 'Type') */

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

/* function newestMovie() {
  // Inizializza la variabile per contenere il film più recente
  let mostRecentMovie = movies[0];

  // Itera attraverso i film nell'array
  for (let i = 1; i < movies.length; i++) {
    const currentMovie = movies[i];

    // Confronta gli anni dei film per trovare il più recente
    if (parseInt(currentMovie.Year) > parseInt(mostRecentMovie.Year)) {
      mostRecentMovie = currentMovie;
    }
  }
  return mostRecentMovie;
}
const mostRecentMovie = newestMovie(movies);
console.log(mostRecentMovie); */

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

/* function countMovies(){
  return movies.length
}
const numberOfMovies = countMovies(movies)
console.log(countMovies()) */

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/* function onlyTheYears (){
  //Crea un array vuoto
  const arrayYears = []
  //Itera attraverso l'array movies
  for (let i = 0; i < movies.length; i++){
  //Pusha dentro l'array vuoto soltanto i valori Year dell'array movies
    arrayYears.push(movies[i].Year)
  } return arrayYears
}
const arrayYears = onlyTheYears(movies)
console.log(arrayYears) */

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* function onlyInLastMillennium (){
  //Crea un array vuoto
  const filmLastMillennium = []
  //Itera attraverso l'array movies
  for (let i = 0; i < movies.length; i++){
  if (movies[i].Year >=1000 && movies[i].Year <= 2000){
    filmLastMillennium.push(movies[i])
  }
 } return filmLastMillennium
}
const filmLastMillennium = onlyInLastMillennium(movies)
console.log(filmLastMillennium) */

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* function sumAllTheYears() {
  // Inizializza la variabile per contenere la somma degli anni
  let totalYears = 0;

  // Utilizza un ciclo for per iterare attraverso gli elementi dell'array "movies"
  for (let i = 0; i < movies.length; i++) {
    const releaseYear = parseInt(movies[i].Year);
  // Aggiungi l'anno corrente alla somma totale
    totalYears += releaseYear;
  } return totalYears;
}
const yearsSum = sumAllTheYears(movies);
console.log(yearsSum); */

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* function searchByTitle(searchString, movies) {
  const matchingMovies = [];

  // Utilizza un ciclo for per iterare attraverso gli elementi dell'array "movies"
  for (let i = 0; i < movies.length; i++) {
    const title = movies[i].Title.toLowerCase();

    // Verifica se il titolo contiene la stringa di ricerca (case-insensitive)
    if (title.includes(searchString.toLowerCase())) {
      // Aggiungi il film all'array matchingMovies
      matchingMovies.push(movies[i]);
    }
  }
  return matchingMovies;
}
//Esempio
const searchTerm = "Lord";
const matchingMovies = searchByTitle(searchTerm, movies);
console.log(matchingMovies); */

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* function searchAndDivide(searchString, movies) {
  const result = {
    match: [],
    unmatch: []
  };

  // Utilizza un ciclo for per iterare attraverso gli elementi dell'array "movies"
  for (let i = 0; i < movies.length; i++) {
    const title = movies[i].Title.toLowerCase();

    // Verifica se il titolo contiene la stringa di ricerca (case-insensitive)
    if (title.includes(searchString.toLowerCase())) {
      // Aggiungi il film all'array "match"
      result.match.push(movies[i]);
    } else {
      // Aggiungi il film all'array "unmatch"
      result.unmatch.push(movies[i]);
    }
  }

  return result;
}

// Esempio
const searchWord = "Lord";
const searchResult = searchAndDivide(searchTerm, movies);
console.log(searchResult.match);
console.log(searchResult.unmatch); */

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

/* function removeIndex(index, movies) {
  // Verifica se l'indice fornito è valido
  if (index >= 0 && index < movies.length) {
    // Utilizza il metodo splice per rimuovere l'elemento dall'array
    movies.splice(index, 1);
  }
  // Restituisci l'array modificato
  return movies;
}
// Esempio
const indexToRemove = 2; // Sostituisci con l'indice che desideri rimuovere
const updatedMovies = removeIndex(indexToRemove, movies.slice()); // Utilizza slice per creare una copia dell'array originale
console.log(updatedMovies); */


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

/* document.getElementById("container") */

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* document.getElementsByTagName("td") */

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

// Funzione per stampare il testo con innerText di ogni tag <td>

/* function stampaTestoTd() {
  // Seleziona tutti i tag <td> nella pagina
  const arrayTd = document.getElementsByTagName('td');

  // Ciclo per stampare il testo con innerText di ogni tag <td>
  for (var i = 0; i < arrayTd.length; i++) {
      console.log(arrayTd[i].innerText);
  }
}
stampaTestoTd() */

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* function aggiungiBackgroundRossoAiLink() {
  // Seleziona tutti i link nella pagina
  const linkArray = document.getElementsByTagName('a');

  // Ciclo per aggiungere il background rosso a ciascun link
  for (let i = 0; i < linkArray.length; i++) {
      linkArray[i].style.backgroundColor = 'red';
  }
}
// Chiamata alla funzione
aggiungiBackgroundRossoAiLink(); */

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
/* function aggiungiLi (){
  const nuovoElemento = document.createElement('li')
  const lista = document.querySelector('#myList')
  lista.appendChild(nuovoElemento)
} */

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* function svuotaLista (){
  const lista = document.getElementById('myList')
  lista.innerHTML = ''
}
 */

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

/* function addClasseCss (){
  const arrTr = document.getElementsByTagName('tr')
  for (let i = 0; i < arrTr.length; i++)
  arrTr[i].classList.add('test')
}
 */

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */