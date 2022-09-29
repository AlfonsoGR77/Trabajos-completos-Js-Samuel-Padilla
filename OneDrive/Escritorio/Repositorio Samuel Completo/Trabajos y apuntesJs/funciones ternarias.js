// var x=11
// x%2==0 ? console.log('par'):console.log('impar')
// //sintax
// //condicion ? valor si es verdadero: valor si es falso

// if (x%2==0) {
//     console.log('par')
// } else {
//     console.log('impar')
// }
//------------------------------------------------------------

// function primo(num) {
//     var cont = 0;
//     for (let i = 0; i < num; i++) {
//         num%i==0?cont++:cont=cont
//     }
//     //return cont > 2 `primo`:`no primo`;
//    if (cont>2) {
//     return `no primo`    
//    } else {
//     return `primo`
//    }
// }
// console.log(primo(101))
//------------------------------------------------------------------
//Ejercicio

/*escriba una funcion que lea una cadena de texto y diga cuantas vocales
 tiene cuantas consonantes y cuantes caracteres diferentes a vocales y consonantes*/

const contar = palabra => {
    var v = 'aáeéiíoóuú'
    c = 'qwrtypsdfghjklñzxcvbnm',
        cantidaddev = 0,
        cantidaddec = 0
    for (const l of palabra) {
        if (v.includes(l.toLoweCase())) {
            cantidaddev++
        } else if (c, includes(l.toLoweCase())) {
            cantidaddec++
        }
    }
    return `Cantidad de v: ${cantidaddev}\n cantidad de c: ${cantidaddec}`
};
console.log(contar('Juan Manuel Garcia'))
    // includes, comparacion de letra por letra

// let browserType ='lema del sena, por lo cual lo encontramos';
//     browserType.length;
//     console.log(browserType)

//---------------------------------------------------------------------------

//programacion horientada a objetos