
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// let x, y;
// x = prompt("Bitte geben Sie eine Zahl ein");
// y = prompt("Bitte geben Sie eine 2. Zahl ein");
// let summe;
// summe = x + y;
// console.log(" Die Summe der Zahlen ist: " + summe);
// prompt gibt string zurück, umwandeln nötig:

let x, y;
x = prompt("Bitte geben Sie eine Zahl ein");
y = prompt("Bitte geben Sie eine 2. Zahl ein");
x = parseInt(x);
y = parseInt(y);

let summe;
summe = x + y;

console.log(" Die Summe der Zahlen ist: " + summe);
