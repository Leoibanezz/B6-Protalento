// Ejercicio #1

/* let respuestaEjercicio1= prompt ("Eres bellisimo/a");

if (respuestaEjercicio1 === "si") {
    console.log("Ciertamente.");
} else if (respuestaEjercicio1 ==="no"){
    console.log ("No te creo."); 
} */

// Ejercicio #2

/* let respuestaEjercicio2= prompt ("Coloca un numero para mirar si es divisible entre dos");

if (respuestaEjercicio2 % 2 == 0) {
    console.log ("El numero si es divisible por 2.");
} else if (respuestaEjercicio2  % 2 );{
    console.log ("El numero no es divisble por 2.");
} */

// Ejercicio #3

/*let IngresaunNumero = prompt ("Ingresa un numero");

if (IngresaunNumero % 2 == 0) {
    alert ("El numero" + IngresaunNumero + "Es par ");
} else { alert ("El numero" + IngresaunNumero + "Es impar");
} */

//Ejercicio #4

/* let numeroCliente = prompt ("Coloca el numero del cliente"); 

if ( numeroCliente == 1000 ) {
document.write (`Ganaste un premio`);
} else { document.write ("El numero que pusiste es " + numeroCliente + " oh no Sigue intentando");}

*/

// Ejercicio #5

/*let A = prompt ("Tu primer numero");
let B = prompt ("Tu segundo numero");

if (A <= B) { document.write ("el primer numero si es menor que el segundo."  ); }
else { document.write ("El primer numero no es menor que el segundo." );
} */

//Ejercicio #6

/*let numero1 = prompt ("Coloca tu primer numero");
let numero2 = prompt ("Coloca tu segundo numero");
let numero3 = prompt ("Coloca tu Tercer numero");



if (numero1 > numero2) {
    console.log ("El primer numero es el mayor es el mayor")  

} else if (numero3 > numero1  ){console.log ("El tercer numero es el mayor"); } 

else {console.log ("El segundo es el mayor")} */

//Ejercicio #7  Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

/*let semana = prompt ("Coloca tu dia favorito en la semana");

if (semana === "lunes") {
    document.write ("Buen inicio de semana"); 
      
} else if (semana === "viernes") {
document.write ("Por fin se termino la semana"); }

else if ( semana === "sabado" ) {

    document.write ("A descansar se dijo");}

else if ( semana === "domingo" ) {

    document.write ("A descansar se dijo x2");

} else { document.write ("No es ningun dia favorito de la semana");} */

// Ejercicio #8 Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

/*let calificacion = prompt ("Digita una calificacion entre 1 y 10");

if (calificacion >= 1 && calificacion <= 10) {

    calificacion = Number(calificacion);

    if (calificacion < 6 ){
        console.log("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8){
        console.log ("Regular");
    } else if ( calificacion === 9){
        console.log("Bien");
    } else if (calificacion === 10){
        console.log("Exelente");
    }
} else { console.log ("la calificacion no es valida");
} */

// Ejercicio #9 Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
/*El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

/*let costoHelado = 50;
let costoOreo = 10;
let costoKitKat = 15;
let costoBrownie = 20;


let topping = prompt("Seleccione el topping que desea: (oreo, kitkat, brownie)");


let costoTotal;

if (topping.toLowerCase() === "oreo") {
  costoTotal = costoHelado + costoOreo;
} else if (topping.toLowerCase() === "kitkat") {
  costoTotal = costoHelado + costoKitKat;
} else if (topping.toLowerCase() === "brownie") {
  costoTotal = costoHelado + costoBrownie;
} else {
  console.log("No tenemos este topping, lo sentimos.");
  costoTotal = costoHelado;
}

document.write("El costo total del helado es: " + costoTotal + " MXN");*/

// Ejercicio #10 Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
/*El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */


let carrera = 3999;
let Master = 2999;

let Facebook = 0.2;
let Google = 0.15;
let Jesua = 0.5;

let = prompt  ("Cuentas con alguna beca de las siguientes : (Facebook , Google , Jesua )");

let costoTotalCarrera; 

if (let === Facebook){
    costoTotalCarrera = carrera - Facebook;
} else if (let === Google){
    costoTotalCarrera = carrera - Google;
} else if (let === Jesua){
    costoTotalCarrera = carrera - Jesua;
} else { console.log("Tu precio final es "+ costoTotalCarrera + "MXN");

}

