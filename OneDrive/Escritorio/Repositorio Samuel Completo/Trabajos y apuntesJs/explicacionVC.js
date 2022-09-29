function contar_vocales(vocales) {
    let vocal = "aeiou";
    let contador = 0;

    for (let letra of vocales) {
        if (vocal.includes(letra.toLowerCase())) {
            contador++;
        }
    }
    return contador
}
const cadena = ('Mi pasion es la programacion, la danza y el porrismo')
console.log(cadena)
const resultado = contar_vocales(cadena);
console.log(`La cantidad de vocales es `, resultado);


function contar_consonantes(consonantes) {
    let conso = "bcdfghjklmnñpqrstvwxyz";
    let contador = 0;

    for (let letra of consonantes) {
        if (conso.includes(letra.toLowerCase())) {
            contador++;
        }
    }
    return contador
}

const cadena1 = ('hola')
console.log(cadena1)
const resultado1 = contar_consonantes(cadena1);
console.log(`La cantidad de consonantes es `, resultado1);