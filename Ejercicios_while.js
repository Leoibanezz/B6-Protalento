// Ejercicio #1 Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

/*let numero = parseInt(prompt (`Introduce un numero `));

let result = 1;

console.log("los multiplos de 5 hasta el numero",numero , "son:");
while (result <= numero) {
    if (result % 5 === 0 ) {
console.log(result);} result++; }*/

// Ejercicio #2  Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

/*numero1 = parseInt(prompt(`Introduce un primer numero entre 1 y 50`));
numero2 = parseInt(prompt(`Introduce un segundo numero entre 1 y 50`));

console.log("Los números de la lotería son:");

let numero = 1;

while (numero <= 50) {
   
  if (numero === numero1 || numero === numero2) {
    console.log(numero + `loteria`);}
     else {console.log(numero);}

  numero ++;
  
}*/

//Ejercicio #3 Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

/*let numeros = [];
let entrada = prompt("Ingresa un número (0 para terminar):");

while (entrada !== "0") {
  let numero = parseInt(entrada);
  if (!isNaN(numero)) {
    numeros.push(numero);
  } else {
    alert("Entrada inválida. Ingresa solo números enteros.");
  }
  entrada = prompt("Ingresa otro número (0 para terminar):");
}

console.log("Números capturados:", numeros);*/

// Ejericio #4 Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

// Importante: Este código debe ser ejecutado en un entorno que admita la función prompt para recibir la entrada del usuario.


/*let palabras = [];
let entrada = "";


console.log("Ingresa letras o palabras. Presiona Enter para terminar.");

while (true) {
  entrada = prompt("Ingrese una letra o palabra y si quieres terminar presiona enter:");
  if (entrada === "") {
    break;
  }
  palabras.push(entrada);
}

let resultado = "";
let i = 0;
while (i < palabras.length) {
  resultado += palabras[i];
  i++;
}
console.log("Las palabras y numeros que pusiste son:" + resultado);*/

// Ejercicio #5  Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

/*while (true) {
  let dia = prompt("Introduce un día de la semana:");

  if (dia === "domingo") {
    alert("a dormir porque toca trabajar");
    break;
  } else if (dia === "lunes") {
    alert("Hoy es lunes");
  } else if (dia === "martes") {
    alert("Hoy es martes ");
  } else if (dia === "miercoles") {
    alert("Hoy es miercoles");
  } else if (dia === "jueves") {
    alert("Hoy es jueves ");
  } else if (dia === "viernes") {
    alert("Hoy es viernes y el cuerpo lo sabe ");
  } else if (dia === "sabado") {
    alert("sabado de futbol");
  } else {
    alert("Día no válido, por favor intenta de nuevo.");
  }
}*/
