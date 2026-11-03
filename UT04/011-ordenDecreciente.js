function ordenaDecreciente(array) {
    let cambiado;

    while (true) {
        
        cambiado = false;

        for (let i = 1; i < array.length; i++) {
            if (array[i] > array[i-1]) {
                let aux = array[i];
                array[i] = array[i-1];
                array[i-1] = aux;
                cambiado = true;
            }
        }

        if (!cambiado) {
            break;
        }
    }
}
let arr = [5, 2, 1, -10, 8, -2, 15, 0, 28];
ordenaDecreciente(arr);
console.log(arr);