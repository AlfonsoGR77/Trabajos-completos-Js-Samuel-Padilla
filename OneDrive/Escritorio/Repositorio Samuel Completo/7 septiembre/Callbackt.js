function receptora(cb1, cb2, parametro) {
    cb1();
    setTimeout(() => {
        console.log('dentro de la funcion receptora')
    }, 0);
    cb2(parametro)
}

function funcionArgumento(parametro) {
    console.log(parametro, 'impresion argumento')
}

receptora(() => console.log('funcion anonima'), funcionArgumento, 100);

//-------------------------------------------------------------------------------------------