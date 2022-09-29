var texto= 'HEllO'
function general(texto) {

    return new Promise ((resolve, reject)=>{

    resolve()   

    })  
    };


  general()
  
  .then(() => {
    let texto1 = texto.toUpperCase();
    let texto2 = texto.toLowerCase();
    console.log('El texto original es ',texto, 'en mayuscula es ',texto1, 'en minuscula es ', texto2);
    })
   

  .then(() => {
  let contar = 0;
  var mayusculas = 'QWEËRTYUIíOÓPAÁSDFGHJKLÑZXCVBNM'
  for (let i = 0; i < mayusculas.length; i++) {
    for (let x = 0; x < texto.length; x++) {
    if((mayusculas)[i] == texto [x]) {
      contar = contar + 1
    }
    }
  } console.log('la cantidad de Mayusculas es ', contar) 
})



  .then(() => {
        let contar1 = 0;
        var minusculas = 'qweértyuúiíoópaásdfghjklñzxcvbnm'
        for (let i = 0; i < minusculas.length; i++) {
            for (let x = 0; x < texto.length; x++) {
              if((minusculas)[i] == texto [x]) {
                contar1 = contar1 + 1
              }
              }
        
        } console.log('la cantidad de Minusculas es ', contar1) 
      })
   


//--------------------------------------------------------------------------------------------------------------------------------

async function agregacion (texto){
      const para = await general (texto)
      console.log(para)
}

var texto= 'HEllO'
function general(texto) {

    return new Promise ((resolve, reject)=>{

    resolve()   

    })  
    };


  general()
  
  .then(() => {
    let texto1 = texto.toUpperCase();
    let texto2 = texto.toLowerCase();
    console.log('El texto original es ',texto, 'en mayuscula es ',texto1, 'en minuscula es ', texto2);
    })
   

  .then(() => {
  let contar = 0;
  var mayusculas = 'QWEËRTYUIíOÓPAÁSDFGHJKLÑZXCVBNM'
  for (let i = 0; i < mayusculas.length; i++) {
    for (let x = 0; x < texto.length; x++) {
    if((mayusculas)[i] == texto [x]) {
      contar = contar + 1
    }
    }
  } console.log('la cantidad de Mayusculas es ', contar) 
})



  .then(() => {
        let contar1 = 0;
        var minusculas = 'qweértyuúiíoópaásdfghjklñzxcvbnm'
        for (let i = 0; i < minusculas.length; i++) {
            for (let x = 0; x < texto.length; x++) {
              if((minusculas)[i] == texto [x]) {
                contar1 = contar1 + 1
              }
              }
        
        } console.log('la cantidad de Minusculas es ', contar1) 
      })
   


