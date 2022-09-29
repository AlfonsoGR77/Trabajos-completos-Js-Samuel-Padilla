// 1 punto, piramide
var a = Math.round(Math.random() * 15)
console.log(a)
for (i = 0; i <= a; i++) {
    var p = ""
    for (j = 0; j <= i; j++) {
        p = p + "*"
    }
    console.log(p)
}