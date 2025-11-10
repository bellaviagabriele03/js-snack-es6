// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS 



function getRandomNumber() {
    let random = parseInt(Math.floor(Math.random() * 5) + 1);
    return random;
}


let a = getRandomNumber();
let b = a + getRandomNumber();



