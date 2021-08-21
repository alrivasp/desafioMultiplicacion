//Funcion para ingreso de nuemro
const validateNum = () => {
    //Ingreso numero  como integer
    let num = +prompt(`Ingrese un numero entre el 1 y el 20 para hacer las operaciones:`);

    // valido si es numerro y esta dentro del rango solicitado
    do {
        // break para cortar el ciclo si cumple
        if (num > 0 || num) break;
        // solicita reingreso
        num = +prompt(`Numero no permitido, favor volver a ingresar un numero entre el 1 y el 20 para hacer las operaciones:`);
    } while (num <= 0);
    return num
};

//funcion para la tabla de multiplicar
const multiplicacion = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(`${i} x ${num} = ${i*num}`)
    }
};

//funcion para factorial
const factorial = (num) => {
    let result = 1
    for (let i = 1; i <= num; i++) {
        if(i > 1) break;
        for (let j = 1; j <= num; j++) {
            result *= j;
            console.log(`Factorial de ${j} es: ${result}`)
        }
    }
}

// almaceno el numero en variable para reutilizarla
let num = validateNum()
//hago las operaciones y las imprimo por consola 
multiplicacion(num);
factorial(num);
