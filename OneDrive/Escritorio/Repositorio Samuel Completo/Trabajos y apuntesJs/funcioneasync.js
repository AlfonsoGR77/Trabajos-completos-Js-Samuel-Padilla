// function saySomething(x) {
//     return new Promise (resolve =>{
//         setTimeout(() => {
//            resolve("something" + x); 
//         }, 2000);
//     });
// }

// async function talk(x){
//     const words = await saySomething (x) //siempre que hay una declaracion de async se guarda y con el await reconfirma el caso po r asi decirlo.
//     console.log(words);
// }

// talk(2);
// talk(4);
// talk(8);

//-----------------------------------------------------------------------------------------------------------------------


//Ejercicio de libro async, await...

var contador = 0 
function t (elemento) {
    return new Promise (resolve => {
        setTimeout(() => {
            contador = contador + 1 
            resolve ('se repite '+contador)
        
        }, 1000);
    })

}

async function a (contador, elemento){
    console.log(' x cuenta', contador)
    const  al = await t (elemento) 
    console.log(al)}

for (let i = 1; i < 11; i++) {
    a(i);}

//----------------------------------------------------------


    




