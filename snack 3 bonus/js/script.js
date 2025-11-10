// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS 

let start = [];

function getNewArray(array, a, b) {
    if (a < b) {
        for (let i = a; i < b; i++) {
            start.push(`B è il più grande ${i}`)
        }

    } else if (a > b) {
        for (let i = b; i < a; i++) {
            start.push(`A è il più grande ${i}`)
        }
    } else if (a === b)
        console.log("I numeri solo uguali!!!");
    return start;
    

}
let test1 = getNewArray(start, 10, 15)

console.log(test1);



// 