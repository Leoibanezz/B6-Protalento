function cambiarColor() {
    let redLight = document.getElementById('red');
    let yellowLight = document.getElementById('yellow');
    let greenLight = document.getElementById('green');

    setTimeout(function() {
      redLight.style.backgroundColor = 'green';
      yellowLight.style.backgroundColor = 'black';
      greenLight.style.backgroundColor = 'black';

      console.log('Verde');

      setTimeout(function() {
        redLight.style.backgroundColor = 'black';
        yellowLight.style.backgroundColor = 'yellow';
        greenLight.style.backgroundColor = 'black';

        console.log('Amarillo');

        setTimeout(function() {
          redLight.style.backgroundColor = 'black';
          yellowLight.style.backgroundColor = 'black';
          greenLight.style.backgroundColor = 'red';

          console.log('Rojo');

          setTimeout(cambiarColor, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }

  cambiarColor();