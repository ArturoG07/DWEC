function extraerValorDolares(str) {
    return Number(str.slice(1));
}
console.log(extraerValorDolares("$65"));