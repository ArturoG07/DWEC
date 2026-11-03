function bonoloto() {
    let numeros = [];
    while (numeros.length < 7) {
        let n = Math.floor(Math.random() * 49 +1);
        if (!numeros.includes(n)) {
            numeros.push(n);
        }
    }
    let complementario = numeros.pop();
    let reintegro = Math.floor(Math.random() * 10);

    console.log("Combinación ganadora: " + numeros.join(", "));
    console.log("Complementario: " + complementario);
    console.log("Reintegro: " + reintegro);
}
bonoloto();