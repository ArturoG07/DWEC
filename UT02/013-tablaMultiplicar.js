


function tablaMultiplicar(num) {
    if (typeof(num) === "number") {
        console.log("---TABLA DE MULTIPLICAR DEL " + num +"---")
        for (let i = 1; i<=10; i++) {
            //console.log(num + " x " + i + " = " + num*i);
            console.log(`${num} x ${i} = ${num * i}`);
        }
    } else {
        console.log("Error, el dato " + num + " debe ser numero");
    }
}
tablaMultiplicar(51);
tablaMultiplicar(-1);
tablaMultiplicar("uno");