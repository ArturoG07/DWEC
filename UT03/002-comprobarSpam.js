function comprobarSpam(str) {
    return (
        (str.toLowerCase()).includes('gratis') ||
         (str.toUpperCase()).includes('XXX')
    );
}
console.log(comprobarSpam("Ordenadores grAtis"));
console.log(comprobarSpam("Julian"));
console.log(comprobarSpam("XxX ordenadores caros"));