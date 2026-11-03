function extraerValorEuros(str) {
    return str.substring(0, str.length-1);
}

console.log(Number(extraerValorEuros("235€")));