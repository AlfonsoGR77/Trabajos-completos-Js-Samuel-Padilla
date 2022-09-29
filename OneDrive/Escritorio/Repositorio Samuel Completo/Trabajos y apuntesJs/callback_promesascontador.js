    function arreglo() {

        let limite = 100
        return new Promise((resolve, reject) => {
            if (limite === 0) {
                reject(new Error('no se definió '))
            }
            var vec = []
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    vec[i] = Math.round(Math.random() * 100)
                }

            }, 0);
            resolve(vec)
        })
    }

    arreglo()
        .then((vec) => {
            setTimeout(() => {
                let suma = 0
                for (let i = 0; i < vec.length; i++) {
                    suma += vec[i];
                }
                console.log(vec)
                console.log(suma);
            }, 0);
        })
        .catch((err) => { console.log(err.message) })


//---------------------------------------------------------------------------------------------------




    arreglo = () => {
        let limite = 100
        return new Promise((resolve, reject) => {
            if (limite === 0) {
                reject(new Error('no se definió '))
            }
            var vec = []
            setTimeout(() => {

                for (let i = 0; i < 10; i++) {
                    vec[i] = Math.round(Math.random() * 100)
                }

            }, 0);
            //console.log(vec)
            resolve(vec)
        })
    }

    async function sumar() {
        try {
            const vec = await arreglo()
                //console.log(vec)
            setTimeout(() => {
                let suma = 0
                for (let i = 0; i < vec.length; i++) {
                    suma += vec[i];
                }
                console.log(vec)
                console.log(suma);
            }, 0)
        } catch (err) {
            console.log(err.message)
        }
    }

    sumar()