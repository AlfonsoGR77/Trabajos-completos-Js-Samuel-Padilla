// //Creacion de clases, tema en proximas clases

// class Producto {

// }

// var Producto1=new Producto();
// console.log(typeof(producto1));
// // tipos de datos personalizados

//----------------------------------------------------------------------------------------------------------------------------

//productos literales

// const x=[];

// var persona = {
//     nombre:'Pedro Perez',
//     id: 12345,
//     datosCompletos:()=> console.log(`${persona.nombre}${persona.id}`),
// }
// console.log(persona.nombre);
// console.log(persona['id']);
// persona.datosCompletos();
// persona.direccion='Calle con Kra'; //Los datos se pueden añadir a los objetos aun asi fuera de ellos como tal.
// console.log(persona);
// // cambiar atributos

// persona.nombre='Andres Lopez';
// console.log(persona)

// //eliminacion 
// delete persona.id;
// console.log(persona)

//------------------------------------------------------------------------------------------------------------------------------

/*creacion de cuatro objetos literales toca hallar perimetro y area y hacer una funcion 
que resiva como parametro objeto y decir si es circunferencia o no.*/

//1 objeto

var cuadrado={
   arriba: 10,
   derecha: 10,
   abajo:10,
   izquierda:10,
   perimetro:()=>  {console.log('el perimetro es ' + 
   (cuadrado.arriba + cuadrado.derecha + cuadrado.abajo + cuadrado.izquierda))
   } ,
   area:()=>{console.log('el area es ' + (cuadrado.derecha * cuadrado.izquierda))}
}
cuadrado.perimetro();
cuadrado.area();

//2 objeto

var triangulo={
    ladoiz: 12,
    ladode:12,
    abajo:12.5,
    altura:15,
    perimetrot:()=>{console.log('el perimetro es ' + 
    (triangulo.ladode + triangulo.ladode + triangulo.abajo))},
    areat:()=>{console.log('el area es ' +(triangulo.abajo * triangulo.altura)/2)}
}
triangulo.perimetrot();
triangulo.areat();

//3 objeto

var rectangulo={
    arribar: 20,
    derechar: 12,
    abajor:20,
    izquierdar:12,
    alturar:18,
    preimetror:()=>{console.log('el perimetro es ' +
    (rectangulo.arribar + rectangulo.derechar+ rectangulo.abajor + rectangulo.izquierdar))},
    arear:()=>{ console.log('el area es ' +(rectangulo.abajor * rectangulo.alturar))}
}
rectangulo.preimetror();
rectangulo.arear();


//4 objeto

var circulo={
    radio: 15,
    pi:3.1416,
    perimetroc:()=>{console.log('el perimetro es ' + 
    (2 * circulo.pi * circulo.radio))},
    areac:()=>{console.log('el area es ' +(circulo.pi * circulo.radio**2))}
}
circulo.perimetroc();
circulo.areac();


//----------------------------------------------------------------------------------------------------

//2 parte

const escirculo= objeto=>{
    if(objeto = objeto.radio){
        return`es circulo`
    } else{
        return`no es circulo`
    }
}
console.log(escirculo(circulo))

//Mision
//terminar la funsion 








