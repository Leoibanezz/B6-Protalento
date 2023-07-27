// Variables para almacenar los datos de ventas de Juana y Pedro
let ventasJuana = [];
let ventasPedro = [];

// Función para realizar una venta
function realizarVenta(empleado, perfumeIndex) {
  const perfumeInput = document.querySelectorAll('input[type="text"]')[perfumeIndex];
  const venta = perfumeInput.value.trim();

  if (venta ==='') {
    alert('Por favor, ingresa el valor de la venta.');
    return;
  }

  const ventaNum = parseFloat(venta);
  if (isNaN(ventaNum) || ventaNum <= 0) {
    alert('Ingresa un valor de venta válido (número mayor a 0).');
    return;
  }

  if (empleado === 'Juana') {
    ventasJuana.push(ventaNum);
    actualizarResumenVentas('Juana');
  } else if (empleado === 'Pedro') {
    ventasPedro.push(ventaNum);
    actualizarResumenVentas('Pedro');
  }

  perfumeInput.value = '';
}
  

// Función para actualizar el resumen de ventas en el HTML
function actualizarResumenVentas(empleado) {
  const ventasEmpleado = (empleado === 'Juana') ? ventasJuana : ventasPedro;
  const totalVentas = ventasEmpleado.reduce((total, venta) => total + venta, 0);

  const listaVentas = document.getElementById(`ventas-${empleado.toLowerCase()}`);
  listaVentas.innerHTML = '';
  ventasEmpleado.forEach((venta) => {
    const listItem = document.createElement('li');
    listItem.textContent = venta;
    listaVentas.appendChild(listItem);
  });

  const totalEmpleado = document.getElementById(`total-${empleado.toLowerCase()}`);
  totalEmpleado.textContent = totalVentas.toFixed(2);

  // Calcular y actualizar al empleado del mes
  const totalJuana = ventasJuana.reduce((total, venta) => total + venta, 0);
  const totalPedro = ventasPedro.reduce((total, venta) => total + venta, 0);

  const empleadoMes = document.getElementById('empleado-mes');
  if (totalJuana > totalPedro) {
    empleadoMes.textContent = 'Juana';
  } else if (totalJuana < totalPedro) {
    empleadoMes.textContent = 'Pedro';
  } else {
    empleadoMes.textContent = 'Ninguno (empate)';
  }
}

// Evento para los botones de venta
document.getElementById('Botones').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const empleado = event.target.textContent.includes('Juana') ? 'Juana' : 'Pedro';
    const perfumeIndex = event.target.textContent.includes('Juana') ? 'Juana' : 'Pedro';
    realizarVenta(empleado, perfumeIndex);
  }
})

