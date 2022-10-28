'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE 2.1
/*
Two teams competes 3 times each. A team only wins if it has at least double the avg score of the other team. Otherwise, no team wins! Ignore draws in coding this time.
*/

const avg = (resultados) => {
    let suma = 0;
    for (let i=0; i<resultados.length; i++){
        suma += resultados[i];
    }
    return suma/resultados.length;
}

function checkWinner(avg1,avg2){
    if (avg1 > 2*avg2){
        console.log('Equipo 1 gana '.concat(avg1,' vs. ',avg2));
    } else if (avg2 > 2*avg1){
        console.log('Equipo 2 gana '.concat(avg2,' vs. ',avg1));
    } else console.log('Ninguno gano por la diferencia requerida');
}

checkWinner(avg([44,23,71]),avg([65,54,49]));
checkWinner(avg([85,54,41]),avg([23,34,27]));