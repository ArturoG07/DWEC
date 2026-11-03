function edad2(edad) {
    switch (true) {
        case (edad < 0):
            console.log("El numero no puede ser negativo");
            break;
        case (edad >= 0 && edad <=12 ):
            console.log("Niño");
            break;
        case (edad > 12 && edad <= 25):
            console.log("Joven");
            break;
        case (edad > 25 && edad <=60):
            console.log("Adulto");
            break;
        case (edad > 60):
            console.log("Jubilado");
            break;
        default:
            console.log("ERROR: No es un numero");
    }
}
edad2(-1);
edad2(0);
edad2(12);
edad2(25);
edad2(60);
edad2(61);
edad2("cinco");