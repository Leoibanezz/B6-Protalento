let numero = parseInt(prompt("Introduce un número: "));
let result = 1;

console.log("Los múltiplos de 5 hasta el número", numero, "son:");
while (result <= numero) {
  if (result % 5 === 0) {
    console.log(result);
  }
  result++;
}
