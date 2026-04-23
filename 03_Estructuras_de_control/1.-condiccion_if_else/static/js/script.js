console.log("Conexion exitosa con JS...")

/* 
========================
1. ¿Qué es una condición en JS?
========================
Una condición nos permite tomar desiciones en el
codigo. Separando 2 caminos el si(if)y el no(else).

Estructura basica:( sintaxis ) --> Reglas del Lenguaje de programación)

if (condicion) {
    //código que se ejecuta si la condicion es verdadera.
} else {
    //código que se ejecuta si la condicion es falsa.
}
*/

//Ejemplo 1: (numerico) -- IF
let edad = 18;

if (edad == 20) { //Condicion Si
    console.log("Eres mayor de edad");
}

//Ejemplo 2: 2 caminos posibles
let temperatura = 10;
if (temperatura > 20) {
    console.log("Hace calor");
} else { //Condicion No
    console.log("Hace frio")
}

//Ejemplo 3: IF - ELSE IF - ELSE (Multiples condiciones)

let nota = 5.5;

if (nota >= 6.0) { //Primera condicion
    console.log("Excelente! sigue asi!");
} else if (nota >= 4.0) { //Segunda condicion
    console.log("Aprobado, puedes mejorar!");
} else { //Valor si no cumple anteriores
    console.log("Reprobado, estudia más!")
}

// Ejemplo 4: Condiciones con STRING
let nombre = "Diego";

//Comparacion exacta (===)
if (nombre === "Diego") {
    console.log("Hola, " + nombre)
} else {
    console.log("Tu no eres " + nombre)
}

/*
OPERADORES DE COMPARACION

> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
// Ejemplo de distinto
let num = 5;
let num2 = 10
if (num !== num2) { //Comparacion con distinto
    console.log(`El numero: ${num} es distinto que ${num2}`)
} else{
    console.log("Son iguales!")
}