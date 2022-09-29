// // sintaxis de las Funciones Promesa
// function base (){
//     return new Promise ((resolve, reject)=>{
//         resolve ();
//         setTimeout(() => {
//             console.log('linea de codigo dentro de la funcion promesa')
//         }, 500);
//     });
// }

// base ()
//     .then(()=>{
//         console.log('En el .then')
//     })
//     .then(auxiliar)

//     function auxiliar() {
//         console.log('Funcion auxiliar');
//     }
//----------------------------------------------------------------------------------------------------

// sintaxis de las Funciones Promesa
// function base (){
//     return new Promise ((resolve, reject)=>{
//         if (true) {
//             resolve()
//             setTimeout(() => {
//               console.log('linea de codigo dentro de la funcion promesa')
//               }, 500);
//         } else {
//            reject () 
//         }
// }

// base ()
//     .then(()=>{
//         console.log('En el .then')
//         return 1000;
//     })
//     .then((dato)=>{
//         console.log('esto recibe el primer then', dato)
//     })
//     .then(auxiliar)
    

//     function auxiliar() {
//         console.log('Funcion auxiliar');
//     }



//leer temas de promesa async await
