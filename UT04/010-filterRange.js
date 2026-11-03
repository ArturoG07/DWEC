function filterRange(arr, a, b) {
    let newArray = [];
    arr.forEach((val) => {
        if (val >= a && val <= b) {
            newArray.push(val);
        }
    });
    return newArray;
}

let arr = [5, 3, 8, 1];
let filtrado = filterRange(arr, 1, 4);
console.log(filtrado); // 3,1 (valores dentro del rango)
console.log(arr); // 5,3,8,1 (array original no modificado)
