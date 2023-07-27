let cuentas = [
    { nombre: "LEO", saldo: 200 },
    { nombre: "DANIEL", saldo: 290 },
    { nombre: "VIVIANA", saldo: 670 },
  ];
  
  let selectedAccountIndex;
  let passwordInput = document.getElementById("password");
  let accountActionsDiv = document.getElementById("accountActions");
  
  function login() {
    let selectElement = document.getElementById("selectAccount");
    selectedAccountIndex = selectElement.value;
    let password = passwordInput.value;
    if (password === "123") {
      passwordInput.value = "";
      accountActionsDiv.style.display = "block";
    } else {
      alert("Contraseña incorrecta. Intenta nuevamente.");
      passwordInput.value = "";
    }
  }
  
  function consultarSaldo() {
    let saldo = cuentas[selectedAccountIndex].saldo;
    alert("El saldo actual de la cuenta es: $" + saldo);
  }
  
  function ingresarMonto() {
    let monto = prompt("Ingresa el monto a ingresar:");
    monto = parseFloat(monto);
    if (isNaN(monto) || monto <= 0) {
      alert("Monto inválido. Ingresa un número mayor a 0.");
      return;
    }
  
    let saldoActual = cuentas[selectedAccountIndex].saldo;
    let nuevoSaldo = saldoActual + monto;
    if (nuevoSaldo > 990) {
      alert("La cuenta no puede tener más de $990. Intenta con un monto menor.");
      return;
    }
  
    cuentas[selectedAccountIndex].saldo = nuevoSaldo;
    alert("Se ingresaron $" + monto + ". Nuevo saldo total: $" + nuevoSaldo);
  }
  
  function retirarMonto() {
    let monto = prompt("Ingresa el monto a retirar:");
    monto = parseFloat(monto);
    if (isNaN(monto) || monto <= 0) {
      alert("Monto inválido. Ingresa un número mayor a 0.");
      return;
    }
  
    let saldoActual = cuentas[selectedAccountIndex].saldo;
    let nuevoSaldo = saldoActual - monto;
    if (nuevoSaldo < 10) {
      alert("La cuenta no puede tener menos de $10. Intenta con un monto menor.");
      return;
    }
  
    cuentas[selectedAccountIndex].saldo = nuevoSaldo;
    alert("Se retiraron $" + monto + ". Nuevo saldo total: $" + nuevoSaldo);
  }
  