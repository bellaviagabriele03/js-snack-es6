// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// array delle squadre :
const team = [
    {
        nome: "juventus",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "roma",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "David FC",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Riocuarto",
        punti: 0,
        falliSubiti: 0,
    }
]


function getRandomFouls() {
    let random = parseInt(Math.floor(Math.random() * 100) + 1);
    return random;
}



function getRandomPoint() {
    let random = parseInt(Math.floor(Math.random() * 30) + 1);
    return random;
}


let newArray = [];


for(let i = 0; i < team.length; i++) {
    let curTeam = team[i];
    let randomNumber = getRandomPoint();
    curTeam.punti = randomNumber;
    let randomNumberfouls = getRandomFouls();
    curTeam.falliSubiti = randomNumberfouls;    
    newArray.push(curTeam.nome, curTeam.falliSubiti)    
}

console.log(newArray);


