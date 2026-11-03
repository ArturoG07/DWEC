function triangulo(lineas) {
    if (lineas > 0 && typeof(lineas === "number")) {
        for (let i = 1; i <= lineas; i++) {
            console.log(String("#").repeat(i));
        }
    }
}
triangulo(8);