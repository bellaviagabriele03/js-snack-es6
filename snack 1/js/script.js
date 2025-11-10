// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.


//array delle bici:
const bici = [
    {
        nome : "bmx",
        peso : 20,
    },
    {
        nome : "montain bike",
        peso : 25,
    },
    {
        nome : "centurion",
        peso : 30,
    },
    {
        nome : "silver",
        peso : 15,
    }
]


let result = "";

for(let i = 0; i < bici.length; i++) {
    let curIndex = bici[i]    
    if(curIndex.peso < 20) {
        result = curIndex.nome;
    }
        
}

console.log(`La bici che pesa di meno è la: ${result}`);

