function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por 0";
    }
}

let respuesta = "si";

while (respuesta === "si") {
    
    let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicacion, division)");
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    let resultado = 0;

    if (operacion === "suma") {
        resultado = sumar(numero1, numero2);
    } else if (operacion === "resta") {
        resultado = restar(numero1, numero2);
    } else if (operacion === "multiplicacion") {
        resultado = multiplicar(numero1, numero2);
    } else if (operacion === "division") {
        resultado = dividir(numero1, numero2);
    } else {
        resultado = "Operación no válida";
    }

    alert("El resultado de la " + operacion + " es: " + resultado);

    respuesta = prompt("¿Quieres realizar otra operación? (si/no)").toLowerCase();

    if (respuesta !== "si") {
        alert("Gracias por usar la calculadora. ¡Hasta pronto!");
    }
}