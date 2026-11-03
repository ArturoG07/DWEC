function detectaErrorCritico(cadena) {
    return cadena.toUpperCase().startsWith("ERROR") ||
        cadena.toUpperCase().endsWith("CRITICO");
}
console.log(detectaErrorCritico("EL ESTADO ES CRiTIcO"));
console.log(detectaErrorCritico("ErRoR EN EL SERVIDOR"));
console.log(detectaErrorCritico("CRITICO ESTADO DEL SERVIDOR"));
