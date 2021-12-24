/**
 * El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
 * Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
 * Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
 * ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
 * 
 * Ejemplos:
 * 
 * "bici coche (balón) bici coche peluche" // -> ✅
 * "(muñeca) consola bici" // ✅
 * "bici coche (balón bici coche" // -> ❌
 * "peluche (bici [coche) bici coche balón" // -> ❌
 * "(peluche {) bici" // -> ❌
 * "() bici" // ❌
 * "")bici( casa play" es válido"
 * 
 * Crea una función que pasándole el texto de la carta, devuelva true si es válida y
 *  false si no lo es. ¡Y acaba con la travesura del Grinch!
 * 
 */



// let carta = ")bici( casa play"
let carta = "bici coche (balón) bici coche peluche"
console.log(isValid(carta)) 


/**
 * 
 * @param {Sting} letter Es una carta de regalos que puede incluir texto y paréntesis pero no llaves ni corchetes
 * @returns {Boolean} Donde true si la carta es válida, false en caso contrario
 */

 function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    let mal = ['[',']','{','}']
    let flag = true

    letter = letter.split(' ');

    letter.forEach(element => {

        mal.forEach(x =>{
            if(element.includes(x)){
                flag = false
            }//si lo incluye []{}
        })//revisar si contien [] {}
        
        if(flag){
            if(element[0] == '('){
                if(element.includes(')')){
                    let temp = element.split('')
                    temp.pop()
                    temp.shift()
                    if(temp.includes('(') || temp.includes(')')){
                        flag = false
                    }else{
                        if(temp.length == 0){
                            flag = false
                        }
                    }
                }else{
                    flag = false
                }
                
            }else{
                if(element.includes(')')){
                    flag = false
                }
            }

        }//No contiene [] {}

    });

    return flag
   }