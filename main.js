// console.log('prova');

// -----------------------------------

const numbGen = 5;
const numbList = [];
const sec = 30000;
const numbUser = [];

/*
console.log(numbGen);
console.log(numbList);
console.log(sec);
console.log(numbUser);
*/

// -----------------------------------
// ALERT

for(i = 0; i < numbGen; i++) {
    pushInArray(numbList, rndNumber(1, 100));
};

alert(numbList);
console.log(numbList);

setTimeout(holding, sec);

// -----------------------------------
// FUNCTION X RANDOM

function rndNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
};

// -----------------------------------
// FUNCTION X RANDOM IN ARRAY

function pushInArray(array, number) {
        return array.push(number);
};

function holding() {
    for(i = 0; i < numbGen; i++) {
        let answer = parseInt(prompt('Inserisci un numero che hai visto'));
        if(numbList.includes(answer) == true) {
            pushInArray(numbUser, answer);
        }
    }
    console.log('Ne hai ricordati ' + numbUser.length);
    console.log('I numeri che hai scritto correttamente sono i seguenti: ' + numbUser);
}

// -----------------------------------
