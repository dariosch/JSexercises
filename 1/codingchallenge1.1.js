'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 1.1
//Compare BMI using a formula, storing values in variables, calculating BMI, and use a boolean variable markHigherBMI containing info about one having higher BMI than other.

function calculateBMI (mass,height){
    return (mass / (height * height));
}

function compareBMI (massFirst, heightFirst, massSecond, heightSecond){
    let result = (((calculateBMI(massFirst,heightFirst)) > (calculateBMI(massSecond,heightSecond))) ? true : false);
    result ? (console.log('Mark tiene mayor BMI que John')) : (console.log('John tiene mayor o igual BMI que Mark'));
}

console.log('Coding challenge 1.1');
compareBMI(78,1.69,92,1.95);
compareBMI(95,1.88,85,1.76);
console.log('--------------------------------------');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 1.2
//Sumar mejor contenido al resultado

let firstBMI = calculateBMI(78,1.69);
let secondBMI = calculateBMI(92,1.95);

//firstBMI = calculateBMI(95,1.88);
//secondBMI = calculateBMI(85,1.76);

function compareBMIimproved (firstBMI, secondBMI){
    let result = (firstBMI > secondBMI) ? true : false;
    console.log(firstBMI, secondBMI);
    result ? (console.log('Mark tiene mayor BMI que John ('.concat(firstBMI, ') vs (',secondBMI,')'))) : (console.log('John tiene mayor o igual BMI que Mark ('.concat(secondBMI, ') vs (',firstBMI,')')));
}

console.log('Coding challenge 1.2');
compareBMIimproved(firstBMI,secondBMI);
console.log('--------------------------------------');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 1.3
//Calcular puntuacion promedio de cada equipo, determinar el ganador, check por empate, incluir requerimiento de minimo 100 puntos.

function suma(scores){
    let suma = 0;
    for (var i = 0; i<(scores.length);i++){
        suma += scores[i];
    }
    return suma;
}

function promedio(scores) {
    return (suma(scores)/(scores.length));
}

function cumpleMin(scores){
    return ((promedio(scores) >= 100) ? true : false);
}

function winner(score1,score2){
    console.log(promedio(score1), promedio(score2));
    if (cumpleMin(score1)) {
        if (promedio(score1) > promedio(score2)){
            console.log('Gana equipo 1');
        } else if (promedio(score1) < promedio(score2)){
                    console.log('Gana equipo 2');
                } else console.log('Empate'); 
    } else if (cumpleMin (score2)) {
                console.log('Gana equipo 2');
            } else console.log('No gana ninguno, no cumplen los minimos');
}

console.log('Coding challenge 1.3');
//winner([96,108,89],[88,91,110]);
//winner([97,112,101],[109,95,123]);
winner([97,112,101],[109,95,106]);
console.log('--------------------------------------');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 1.4
//Tip calculator. Between 50 and 300 its 15%. Otherwise its 20%

function tip (billValue){
    return ((billValue >= 50 && billValue <= 300) ? (billValue * 0.15) : (billValue * 0.2));
}

function decorador(billValue){
    console.log('The bill was '.concat(billValue,', the tip was ',tip(billValue),', and the total value was ',(billValue + tip(billValue))));
}

console.log('Coding challenge 1.4');
decorador(275);
//decorador(40);
//decorador(430);
console.log('--------------------------------------');
