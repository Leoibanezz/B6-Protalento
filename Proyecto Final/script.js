let veterinarios = [];  // Array para almacenar los veterinarios registrados

function registrarVeterinario() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const especialidad = document.getElementById('especialidad').value;

  if (nombre && apellido && especialidad) {
    const nuevoVeterinario = {
      nombre: nombre,
      apellido: apellido,
      especialidad: especialidad
    };

    veterinarios.push(nuevoVeterinario);
    mostrarVeterinarios();
    limpiarCampos();
  } else {
    alert('Por favor, complete todos los campos.');
  }
}

function mostrarVeterinarios() {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  veterinarios.forEach((veterinario, index) => {
    outputDiv.innerHTML += `<p>Veterinario ${index + 1}: Nombre - ${veterinario.nombre}, Apellido - ${veterinario.apellido}, Especialidad - ${veterinario.especialidad}</p>`;
  });
}

function limpiarCampos() {
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('especialidad').value = '';
}
