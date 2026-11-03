function fibonacci(n) {
    if (typeof(n) === "number" && n > 0 && n % 1 === 0) {
        let cadena = [0];
        let anterior = 0;
        let anterior2 = 0;
        let valorActual = 1;

        for (let i = 1; i < n; i++) {
            cadena.push(valorActual);
            anterior2 = anterior;
            anterior = valorActual;
            valorActual = anterior + anterior2;
        }

        return cadena.join(" ");
    } else {
        return "";
    }
}
console.log(fibonacci(10));
console.log(fibonacci(4.5));
console.log(fibonacci(0));
console.log(fibonacci(-3));
console.log(fibonacci("uno"));