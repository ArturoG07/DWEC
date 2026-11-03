function extraeDatos(dir) {
    //Variables que determinan las posiciones
    let posArroba = dir.indexOf("@");
    let posPuntos = dir.indexOf(":");

    //Sacar el usuario, dominio y puerto
    let usuario = dir.slice(0, posArroba);
    let dominio = dir.slice(posArroba + 1, posPuntos);
    let puerto = dir.slice(posPuntos + 1);

    //Mostrar por consola
    console.log("Usuario = " + usuario);
    console.log("Dominio = " + dominio);
    console.log("Puerto = " + puerto);
}
extraeDatos("admin@servidor.com:8080");