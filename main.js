// Función para calcular el factorial
function calcularFactorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// Pedir al usuario que ingrese un número
let numero = parseInt(prompt("Ingresa un número:"));

// Calcular el factorial y mostrar el resultado
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);
alert(`El factorial de ${numero} es: ${resultado}`);
