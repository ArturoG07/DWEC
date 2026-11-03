function binario(n) {
    let binario = "";

    if (n === 0) {
        binario = "0";
    } else {
        let restos = [];
        let caracter;
        while (n > 0) {

            caracter = n % 2;
            n = (n / 2) - (caracter / 2);

            if (caracter === 1) {
                restos.push("1");
            } else {
                restos.push("0");
            }
        }

        for (let i = 0; i < restos.length; i++) {
            binario += restos[restos.length - i -1];
        }
    }


    return binario;
}

console.log(binario(37));
console.log(binario(-5));
console.log(binario(0));
console.log(binario("uno"));
console.log(binario(1));