function contarMayu(texto1) {
    let contar = 0;
    var mayusculas = 'QWEËRTYUIíOÓPAÁSDFGHJKLÑZXCVBNM'
    for (let i = 0; i < mayusculas.length; i++) {
      for (let x = 0; x < texto1.length; x++) {
      if((mayusculas)[i] == texto1 [x]) {
        contar = contar + 1
      }
      }
    } console.log('la cantidad de Mayusculas es ', contar) }


    function contarMin(texto2) {
        let contar1 = 0;
        var minusculas = 'qweértyuúiíoópaásdfghjklñzxcvbnm'
        for (let i = 0; i < minusculas.length; i++) {
          for (let x = 0; x < texto2.length; x++) {
          if((minusculas)[i] == texto2 [x]) {
            contar1 = contar1 + 1
          }
          }
        } console.log('la cantidad de Minusculas es ', contar1) }
   

function general(cb1,cb2,texto) {
    let texto1 = texto.toUpperCase();
    let texto2 = texto.toLowerCase();
    console.log('`El texto original es ',texto, 'en mayuscula es ',texto1, 'en minuscula es ', texto2);
    setTimeout(() => {
        cb1(texto)
    }, 2000);
    setTimeout(() => {
       cb2(texto) 
    }, 4000);
}

general(contarMayu, contarMin, 'Hola COMO estas')

