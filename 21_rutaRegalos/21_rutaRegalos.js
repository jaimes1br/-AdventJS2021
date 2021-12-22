/**
 * 
 * Se están preparando las rutas para el trineo de Santa 🎅. Tenemos almacenes por 
 * todo el mundo para que Santa pueda recoger los regalos y entregarlos en el destino 
 * final. 🎁
 * 
 * Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa va a
 * tener que dejar tirados regalos por el camino. 🥺
 * 
 * Para eso vamos a crear una función que recibe dos parámetros:
 * 
 * * Un número con la capacidad máxima de regalos en el trineo.
 * * El viaje que es un array de arrays. Cada subarray contiene tres números que representan:
        trip[0] = número de regalos a transportar
        trip[1] = punto de recogida de los regalos
        trip[2] = punto de entrega de los regalos 
 * La ruta siempre va de izquierda a derecha (nunca volverá Santa hacia atrás) pero... 
 * ¡ten en cuenta que en mitad de la ruta puede tener que recoger regalos cuando ya 
 * tiene alguno encima!
 * 
 * Lo mejor es que veamos un ejemplo:

canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true -> nunca supera el máximo de capacidad
canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

canCarry(1, [[2, 3, 8]]) // false -> no podría ni con el primer viaje
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos


* Lo difícil, e importante, es que entiendas que Santa Claus va entregando y recogiendo regalos y que a veces eso puede hacer que supere la carga máxima.
* 
*/



// canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false

console.log(canCarry(11, [[3, 2, 7], [3, 7, 9], [8, 3, 9]])); 
// console.log(canCarry(5, [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 8]]));
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

/**
 * 
 * @param {Number} capacity La cantidad máxima de regalos que puede llevar
 * @param {Array} trip Un arreglo de arreglos donde cada uno contiene información de regalos, parada donde recoger, parada donde entregar
 * @returns {Boolean} true: si se puede realizar el viaje, false: en caso contrario
 */

function canCarry(capacity, trip) {

    
    let regalos = [];   //cuantos regalos recogeré
    let recojo = [];    //donde recogeré
    let entrego = [];   //donde entregaré

    let tempCapacidad = 0;  //lleva el conteo para saber si ya me pase o no

    for (let i = 0; i < trip.length; i++) {
        regalos.push(trip[i][0]);
        recojo.push(trip[i][1]);
        entrego.push(trip[i][2]);
    }//llenado de arreglos


    const veces = (array,num) =>{
        let veces = 0;
        for(var i = 0; i< array.length; i++) { 
            if(num === array[i]){ veces = veces ? veces + 1 : 1; } 
        }
        return veces
    } //me dice el numero de entregas que se deben hacer, pues puede haber más de dos paradas

    for (let i = 1; i < (Math.max(...entrego) + 1); i++) {
        if( entrego.includes(i)){
            let x = veces(entrego,i)
            if(x > 1){
                let indiceTemp = entrego.indexOf(i);
                for (let rep = 0; rep < x; rep++) {
                    let tempMenos = regalos[entrego.indexOf(i,indiceTemp)];
                    tempCapacidad -= tempMenos;
                    indiceTemp++; //para buscar la siguiente entrega de esta parada
                }
                //if: tengo dos o más entregas en la misma parada
            }else{
                let tempMenos = regalos[entrego.indexOf(i)];
                tempCapacidad -= tempMenos;
            }//else:solo tengo una entrega en esta parada
        }//entrego regalos

        if( recojo.includes(i)){
            tempCapacidad += regalos[recojo.indexOf(i)]; //tomo el numero de regalos que tomo
            if(tempCapacidad > capacity){
                return false;
            }// return false si ya me pase de la capacidad que puedo manejar
        }//recogo regalos

    }// for para regorrer el viaje, va hasta el maximo de entregas (parada más lejana)

    if(tempCapacidad === 0){
        return true;
        //if: se entrego todo bien
    }else{
        return false;
    }//hay problemas con algo, me sobran o faltan regalos
}
