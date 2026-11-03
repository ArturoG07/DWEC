function factorial(n) {
    let factorial = 1;
    
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    return factorial;
}
console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(0));