numero1 = parseInt("20");
numero2 = parseInt("10");

console.log("Los números de la lotería son:");

let numero = 1;

while (numero <= 50) {
   
  if (numero === numero1 || numero === numero2) {
    console.log(numero + `loteria`);}
     else {console.log(numero);}

  numero ++;
  
}