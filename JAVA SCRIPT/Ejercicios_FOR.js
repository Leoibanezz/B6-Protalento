//Ejercicio #1 Crea un programa que imprima en consola los números impares del 1 al 50.

/*for (let numero = 1; numero <= 50; numero++) {
    if (numero % 2 !== 0) {
      console.log(numero);
    }
  }*/

// Ejercicio #2 Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.

// Importante: Este código debe ser ejecutado en un entorno que admita la función prompt para recibir la entrada del usuario.


/*var pokemons = [
    { numero: 1, nombre: 'Bulbasaur' },
    { numero: 2, nombre: 'Ivysaur' },
    { numero: 3, nombre: 'Venusaur'},
    { numero: 4, nombre: 'charmander'},
    { numero: 5, nombre: 'charmeleon'},
    { numero: 6, nombre: 'charizard'},
    { numero: 7, nombre: 'squirtle'},
    { numero: 8, nombre: 'wartortle'},
    { numero: 9, nombre: 'blastoise'},
    { numero: 10, nombre: 'caterpie'},
    { numero: 11, nombre: 'metapod'},
    { numero: 12, nombre: 'butterfree'},
    { numero: 13, nombre: 'weedle'},
    { numero: 14, nombre: 'kakuna'},
    { numero: 15, nombre: 'beedrill'},
    { numero: 16, nombre: 'pidgey'},
    { numero: 17, nombre: 'pidgeotto'},
    { numero: 18, nombre: 'pidgeot'},
    { numero: 19, nombre: 'rattata'},
    { numero: 20, nombre: 'raticate'},
    { numero: 21, nombre: 'spearow'},
    { numero: 22, nombre: 'fearow'},
    { numero: 23, nombre: 'ekans'},
    { numero: 24, nombre: 'arbok'},
    { numero: 25, nombre: 'pikachu'},
    { numero: 26, nombre: 'raichu'},
    { numero: 27, nombre: 'sandshrew'},
    { numero: 28, nombre: 'sandslash'},
    { numero: 29, nombre: 'nidoran-f'},
    { numero: 30, nombre: 'nidorina'},
    { numero: 32, nombre: 'nidoqueen'},
    { numero: 32, nombre: 'nidoran-m'},
    { numero: 33, nombre: 'nidorino'},
    { numero: 34, nombre: 'nidoking'},
    { numero: 35, nombre: 'clefairy'},
    { numero: 36, nombre: 'clefable'},
    { numero: 37, nombre: 'vulpix'},
    { numero: 38, nombre: 'ninetales'},
    { numero: 39, nombre: 'jigglypuff'},
    { numero: 40, nombre: 'wigglytuff'},
    { numero: 41, nombre: 'zubat'},
    { numero: 42, nombre: 'golbat'},
    { numero: 42, nombre: 'oddish'},
    { numero: 42, nombre: 'gloom'},
    { numero: 42, nombre: 'paras'},
    { numero: 42, nombre: 'venonat'},
    { numero: 42, nombre: 'venomoth'},
    { numero: 42, nombre: 'diglett'},
    { numero: 42, nombre: 'dugtrio'},
    { numero: 42, nombre: 'meowth'},
];
  
  var numeroUsuario = parseInt(prompt('Introduce un número:'));
  
  for (let i = 1; i <= numeroUsuario; i++) {
    if (i % 5 === 0) {
      var pokemon = pokemons.find(function(pokemon) {
        return pokemon.numero === i;
      });
      if (pokemon) {
        console.log(pokemon.nombre);
      }
    }
  }*/

  // Ejercicio #3  Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

  /*let arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

  for (let i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i]==="number") {
        console.log(arreglo[i]);
        
    }
    
  }*/


