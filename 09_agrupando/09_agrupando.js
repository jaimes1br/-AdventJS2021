/**
 * En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.

Nos trae un montón de ejemplos:

groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }

Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

La dificultad del reto está más en comprender la función que en la implementación. ¡Suerte!.
 * 
 */



// console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
// console.log(groupBy([{age: 23}, {age: 24}], 'age')) // { 23: [{age: 23}], 24: [{age: 24}] }
// console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] })
// console.log( groupBy([1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear())); // { 2013: [1363223700000], 2014: [1397639141184] }

//console.log(groupBy([{ title: 'JavaScript: The Good Parts', rating: 8 },{ title: 'Aprendiendo Git', rating: 10 },{ title: 'Clean Code', rating: 9 },], 'rating'))
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }


/**
 * 
 * @param {Array} collection Elementos para organizar
 * @param {funcion || String} it Elemento por el cual se agrupará el arreglo
 * @returns {Object} Elementos agrupados dependiendo it 
 */

function groupBy(collection, it) {
    // ¡No olvides compartir tu solución en redes!
    
    let resultado = {};

    if(typeof it === 'function'){
        collection.forEach(element => {
            let temp = it(element);
            if(Object.keys(resultado).indexOf(temp.toString()) != -1){
                resultado[temp].push(element) 
            }else{
                resultado[temp] = []
                resultado[temp].push(element)
            }
        });

        return resultado;

    }else if(typeof (it === 'string')){
        
        if(it.toLowerCase() == 'length'){
            collection.forEach(elemento =>{
                let temp = elemento.length;
                if(Object.keys(resultado).indexOf(temp.toString()) != -1){
                    resultado[temp].push(elemento);
                }else{
                    resultado[temp] = []
                    resultado[temp].push(elemento)
                }
            })
        }else{
            collection.forEach(elemento => {
                if(it in elemento){
                    let temp = elemento[it];
                    if(Object.keys(resultado).indexOf(temp) != -1){
                    }else{
                        resultado[temp] = []
                        resultado[temp].push(elemento)
                    }
                }//si la llave esta en los elementos
                
            })
        }}

    return resultado;
  }