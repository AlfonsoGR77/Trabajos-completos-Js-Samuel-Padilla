//Funciones flecha sin parametros

const x = 100;
const saludar = () => {
    return 'Hola Soacha';
}
console.log(saludar());


//--------------------------------------------------------

//Funciones Flecha sin retorno en una linea

const saludar2 = () => 'hola 2';
console.log(saludar2());

//----------------------------------------------------------

//Funciones Flecha con parametros

const saludar3 = (nombre) => `Hola ${nombre} bienvenido a soacha`;
console.log(saludar3('Andres Manzilla'));

//----------------------------------------------------------------------------------------

const mifuncion = (c1, c2) => Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
console.log(mifuncion(7, 9));

//----------------------------------------------------------------------------------------

// Ejercicios con funcion flecha

const divisor = (num) => {
    c = []
    for (i = 1; i <= num; i++) {
        d = num % i
        if (d == 0) {
            c.push(i)
        }
    }
    return `Los divisores son ${c}`
}
console.log(divisor(6))
    //--------------------------------------------------------

const primo = () => {

}






// var n =Math.round(Math.random()*20)
// var c =0
// console.log(n)
// for (x=1; x<=n; x++) {
//     var d = n % x
//     if (d==0) {
//         c = c+1
//     }
// }
// if (c==2) {
//     console.log(n+" es primo")
// }