let num1 = 1;
let num2 = 2;
let num3 = 3;

// Encontrar el máximo entre num1 y num2
let max = num1 > num2 ? num1 : num2;

// Comparar el máximo encontrado con num3
if (num3 > max) {
    max = num3;
}

// Imprimir el resultado
console.log("El número más grande es:", max);
