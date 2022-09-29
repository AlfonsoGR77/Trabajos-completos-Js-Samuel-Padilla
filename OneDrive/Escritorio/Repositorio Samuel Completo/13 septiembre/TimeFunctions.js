function externa() {
    console.log('Funcion externa al setTimeOut');
}
const funcionExt = () {
    console.log('Funcion externa flecha');
}
setTimeout(() => {
    console.log('Yo amo Soacha');
}, 2000);
setTimeout(function() {
    console.log('Funcion Clasica');
}, 3000);

setTimeout(externa, 5000);
setTimeout(funcionExt, 6000);


//--------------------------------------------------------------------------------------------------------

setInterval(() => {
    console.log('se repite')
}, 3000);

let timerid = setInterval(() => console.log('Amo el SENA'), 2000);

//despues de 5 segundos parar
setTimeout(() => {
    clearInterval(timerid)
}, 7000)
console.log('Termino')

//--------------------------------------------------------------------------------------------------------

//Ejercicio 1

//escriba un programa que muestre un contador de 1 hasta 10 donde cada uno se muestre cada dos segundos

console.log('Números del 1 al 10')
for (let i = 1; i < 11; i++) {
    setTimeout(() => {
        console.log(i)
    }, (i * 2000));

}
// se le puede dar la definicion a la variable por el tiempo.