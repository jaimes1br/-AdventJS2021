/**
 * ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...
 * 
 * Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.
 * Sólo tienes que tener en cuenta unas cosillas ✌️:
 * 
 * Si el array está vacío, devuelve un array vacío
 * Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
 * Por suerte, cada posición del array siempre tiene la misma longitud...
 * 
 * wrapGifts(["📷", "⚽️"])
 * Resultado:
 * [ '****',
 *   '*📷*',
 *   '*⚽️*',
 *   '****']
 * 
 * wrapGifts(["🏈🎸", "🎮🧸"])
 * Resultado:
 * [ '******',
 *   '*🏈🎸*',
 *   '*🎮🧸*',
 *   '******']
 * 
 * wrapGifts(["📷"])
 *  Resultado:
 * [ '****',
 *   '*📷*',
 *   '****']
 * 
*/



// console.log(wrapGifts(["📷"]));
console.log(wrapGifts(["📷", "⚽️"]))
// console.log(wrapGifts(["🏈🎸", "🎮🧸"]))

function wrapGifts(gifts) {

    if(gifts.length == 0){
        return []
    }else{
        let tapas = 2 + gifts[0].length;
        let regalo = [];

        let tapa = function(num) {
            let temp= ''
            for (let i = 0; i < num; i++) {
                temp += '*';
            }
            return temp;
        }

        regalo.push(tapa(tapas))

        let tempRegalos = '';
        for (let i = 0; i < gifts.length; i++) {
            
            tempRegalos = '*' + gifts[i] + '*';
            regalo.push(tempRegalos);
        }

        regalo.push(tapa(tapas))
        return regalo

    }

    
}

