let numeros = [];

// Generar 10 números aleatorios y guardarlos en el array
for (let i = 0; i < 10; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
  numeros.push(numeroAleatorio); // Agrega el número aleatorio al array
}

// Mostrar el contenido del array en la consola
console.log(numeros);