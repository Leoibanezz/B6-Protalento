const vendedores = ['Juana', 'Pedro'];

    function obtenerCantidadVendida(vendedor) {
      const cantidades = [];
      for (const producto of productos) {
        let cantidad = prompt(`Ingrese la cantidad de ${producto.nombre} vendida por ${vendedor}:`);
        while (isNaN(cantidad)) {
          cantidad = prompt(`Error. Ingrese un valor numérico para la cantidad de ${producto.nombre} vendida por ${vendedor}:`);
        }
        cantidades.push(parseInt(cantidad));
      }
      return cantidades;
    }

    function calcularTotalRecolectado(cantidades) {
      let total = 0;
      for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio * cantidades[i];
      }
      return total;
    }

    function determinarEmpleadoDelMes() {
      const cantidadesJuana = obtenerCantidadVendida('Juana');
      const cantidadesPedro = obtenerCantidadVendida('Pedro');
      const totalJuana = calcularTotalRecolectado(cantidadesJuana);
      const totalPedro = calcularTotalRecolectado(cantidadesPedro);

      document.write('<h3>Cantidad de productos vendida por Juana:</h3>');
      for (let i = 0; i < productos.length; i++) {
        document.write(`${productos[i].nombre}: ${cantidadesJuana[i]}<br>`);
      }
      document.write(`<b>Total recolectado por Juana: ${totalJuana}</b><br><br>`);

      document.write('<h3>Cantidad de productos vendida por Pedro:</h3>');
      for (let i = 0; i < productos.length; i++) {
        document.write(`${productos[i].nombre}: ${cantidadesPedro[i]}<br>`);
      }
      document.write(`<b>Total recolectado por Pedro: ${totalPedro}</b><br><br>`);

      if (totalJuana > totalPedro) {
        document.write('<h2>¡El empleado del mes es Juana!</h2>');
      } else if (totalPedro > totalJuana) {
        document.write('<h2>¡El empleado del mes es Pedro!</h2>');
      } else {
        document.write('<h2>¡Hubo un empate! No se pudo determinar un empleado del mes.</h2>');
      }
    }

    determinarEmpleadoDelMes();
