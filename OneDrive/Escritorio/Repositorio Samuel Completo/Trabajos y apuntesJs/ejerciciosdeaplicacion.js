//-------------------------------------------------------------------
//1 punto examen
// let vec = [];
// function arr() {
//     let tam = Math.round((Math.random() * 25 - 5) + 5);
//         for (let i = 0; i < tam; i++) {
//             vec[i] = Math.round(Math.random() * 100)
//     }
//     console.log(vec);
// }
// arr();      


//----------------------------------------------------------------------

// 2 punto examen
let vec = [];
var tam1 = Math.round((Math.random() * 25 - 5) + 5);
var vec2 = [];

function medianaArr(arr1) {
    var concat = arr1;
    for (let i = 0; i < tam1; i++) {
        vec[i] = Math.round(Math.random() * 100)
    }
    concat = concat.sort(
        function(a, b) { return a - b });

    console.log(concat);
    var length = concat.length;


    if (length % 2 == 1) {

        console.log(concat[(length / 2) - .5])
        return concat[(length / 2) - .5]
    } else {
        console.log((concat[length / 2] +
            concat[(length / 2) - 1]) / 2);

        return (concat[length / 2] +
            concat[(length / 2) - 1]) / 2;
    }


}

arr1 = [Math.round(Math.random() * 100)]

medianaArr(vec)

//-----------------------------------------------------------------------