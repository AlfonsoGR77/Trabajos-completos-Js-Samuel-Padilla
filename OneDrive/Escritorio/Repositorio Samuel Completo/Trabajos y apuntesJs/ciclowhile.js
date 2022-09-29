// ejercicios de ciclo
// primero

var d = Math.round(Math.random() * 10);
var cont = 0;
console.log(d)
for (let i = 0; i <= d; i++) {
    x = d % i
    if (x == 0) {
        console.log(d + ' es divisible por ' + i)
        cont = cont + 1;
    }

}
console.log(`los numeros divisibles por ${d} son: ${cont}`)

//segundo
var a = Math.round(Math.random() * 20);
console.log(a)
var x = 0;
for (let i = 1; i <= a; i++) {
    c = a % i
    console.log(c + '......')
    if (c == 0) {
        x++

    }
}
if (x == 2) {
    console.log('el numero es primo')
} else {
    console.log('el numero no es primo')
}


// tercero

var d = Math.round(Math.random() * 10);
var cont = 0;
console.log(d)
for (let i = 0; i < d; i++) {
    x = d % i
    if (x == 0) {
        console.log(d + ' es divisible por ' + i)
        cont = i + i;
    }

}
if (cont == d) {
    console.log('es numero oerfecto')

}
console.log(`los numeros divisibles por ${d} son: ${cont}`)