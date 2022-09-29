// estado y comportamiento

//estado valor que puede guardar / los objetos tienen estado y comportamiento
//comportamiento a partir de funciones.

// var x=12;
// //constructor palabra clave, hay uno q ya funciona por default


// class animal{
// //las palabra function no se escribe por q esta en medio de los corchetes.
// //NO se puede tener mas de un constructor por q no se puede sobrecargar.
// //Metodo es una funcion, aunque se le denomina metodo por que esta dentro de una clase.
// //con la palabra NEW se activa el constructor.
// //los atributos son datos que da el estado.

// constructor(){
//         console.log('se activo el constructor');
//     }
//     mensaje(){
//         console.log('Soy un mensaje')
//     }
// }

// var objeto1 = new animal();
// console.log(typeof(objeto1));
// objeto1.mensaje();

//palabras reservadas aparecen en azul

//-----------------------------------------------------------------------

//datos de manipulacion para el software
//buscar los sujetos en las oraciones, sustantivo
/*La descripcion es importante para no dejar
ningun parametro por fuera, por mas tonto q suene no se omiten detalles y hay que poner nombre logicos
y que no solo puede llegar a afectar el puesto de trabajo si no al que remplace a la persona.*/
//los parametros con respecto al nombre no tiene importancia, lo importante es el tipo de dato.
//atributos dan estado y los metodos comportamiento.
//+publico, -privado, #protegidos o default.
//valor izq, paramtro dere.
//this va con el valor.
//get:obtener, set:modificar/tradicionales.
// camell case, nueva forma para el get y el set.
/*en la clase todo el nombre va en mayucula pero 
si es un metodo la primera frase en minuscula y la sifuiente en mayuscula ej:holaAnimal*/
//al atributo se le sigue con un guion bajo ej: this._nombre.

//-------------------------------------------------------------------------------------------------------------

// class Animal{
//     constructor(nombre){
//         this._nombre=nombre;
//         //console.log('Se activo el contructor)
//     }

//     get nombre(){
//         return this._nombre;
//     }
//     //camell case
//     /* getNombre(){

//     }*/


//     set nombre(nombre){
//         this._nombre=nombre;
//     }
//     mensaje(){
//         console.log('soy un mensaje')
//     }
// }

// var objeto1=new Animal('Conejo');
// console.log(objeto1)
// //objeto1.setNombre('Liebre')
// objeto1.nombre='Conejo Doméstico'
// //console.log(objeto1.getNombre())
// console.log(objeto1.nombre);
// //console.log(typeof(objeto1))

//  function suma(num1, num2){
//     return num1+num2;
// }
//------------------------------------------------------------------------------

//Mision 
/*1. Escriba metodos para suma, promedio, mayor, menor.
2. Escriba una clase que represente un producto comercial de cualquier area, 
debe tener constructor, setters, getters y un metodo para calcular el valor despues de IVA.
3. del libro leer cap 7 pag 149 hasta 161....*/ 












