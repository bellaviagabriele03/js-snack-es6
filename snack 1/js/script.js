// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.


//array delle bici:
const bici = [
    {
        nome: "bmx",
        peso: 20,
    },
    {
        nome: "montain bike",
        peso: 25,
    },
    {
        nome: "centurion",
        peso: 30,
    },
    {
        nome: "silver",
        peso: 15,
    }
]


let resultPeso = bici[0];


for (let i = 0; i < bici.length; i++) {
    
    if(bici[i].peso < resultPeso.peso) {
       resultPeso = bici[i].peso;
        
    }
}

console.log(`La bici più leggera pesa: ${resultPeso} libre`);

