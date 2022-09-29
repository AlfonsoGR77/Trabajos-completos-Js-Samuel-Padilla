//1 Parte

// function poblacion () {
//     let n= Math.round ((Math.random()*9000)+1000)
//     let r= .3
//     console.log('el numero de la poblacion es ', n, )
//     for (let t = 0; t < 20; t++) {
//         var resul= n * (1 + r) ** t  
//         console.log('el resulltado de la operacion es ', resul);

//         let pf= n * (1+r)** t
//         console.log('La poblacion actual es: ')
// }
//     }
    
// poblacion()


//-------------------------------------------------------------------

// 2 Parte



function poblacion () {
    var contar = 1;
    let n= Math.round ((Math.random()*9000)+1000)
    console.log('El numero de la poblacion es ', n, )
    let g = 0;

    for (let t = 0; t < 20; t++) {
        
        let nacimientos = Math.round((Math.random()*9)+ 1)
        resultado = n * nacimientos / 100

        console.log('Proceso : ',contar,'\nEl resultado de nacimientos es: ', resultado);
        let muerte = Math.round((Math.random()*2)+ 1)
        resultado1 = n * muerte / 100
        
        console.log('El resultado de muertes es: ', resultado1);
        contar = contar + 1

        let r = nacimientos - muerte / n
        console.log('El resultado de la tasa es: ', r)

        let pf = n * (1+r) ** t
        console.log('La poblacion actual es: ', pf)
        g=pf
}
        return g;
    }
        
   


//-----------------------------------------------------------------------------------------------

// 3 parte


function casaPoblacion()  {
    let calculo = 0;
    return new Promise ((resolve)=>{
        calculo = poblacion () * 0.10
        setTimeout(() => {
            resolve(calculo)
        }, 5000);
        
    })
    

} 

console.log('-----------------------------------------------------------')

async function salida(){
    const s = await casaPoblacion()
    console.log('La cantidad de personas que reciben casa es: ',s) 
}


poblacion(salida)  

//------------------------------------------------------------------------------------



