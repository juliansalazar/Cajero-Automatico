const clientes = [
    { username: 'Mali', password: 'mali123', saldo: 200 },
    { username: 'Gera', password: 'gera123', saldo: 290 },
    { username: 'Maui', password: 'maui123', saldo: 67 }
  ];

  const saldoMaximo = 990;
  const saldoMinimo = 10;

  let currentUser = null;
  let saldo = 0;

  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const cliente = clientes.find(c => c.username === username && c.password === password);

    if (!cliente) {
      alert("Credenciales inválidas. Inténtalo de nuevo.");
      return;
    }

    currentUser = cliente.username;
    saldo = cliente.saldo;

    document.getElementById('currentUser').textContent = currentUser;
    document.getElementById('saldo').textContent = saldo;
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('mainSection').style.display = 'block';
  }

  function consultarSaldo() {
    alert(`Saldo actual: ${saldo} USD`);
  }

  function ingresarMonto() {
    const montoIngreso = parseFloat(document.getElementById('montoIngreso').value);
    if (isNaN(montoIngreso) || montoIngreso <= 0) {
      alert("Ingresa un monto válido mayor a 0.");
      return;
    }
    const nuevoSaldo = saldo + montoIngreso;
    if (nuevoSaldo > saldoMaximo) {
        alert(`El saldo no puede superar los ${saldoMaximo} USD.`);
        return;
    }

    saldo = nuevoSaldo;
    actualizarSaldo();
    alert(`Has ingresado ${montoIngreso} USD.`);
  }

  function retirarMonto() {
    const montoRetiro = parseFloat(document.getElementById('montoRetiro').value);
    if (isNaN(montoRetiro) || montoRetiro <= 0) {
      alert("Ingresa un monto válido mayor a 0.");
      return;
    }
    const nuevoSaldo = saldo - montoRetiro;
    if (nuevoSaldo < saldoMinimo) {
        alert(`El saldo no puede ser menor a los ${saldoMinimo} USD.`);
        return;
    }

    if (montoRetiro > saldo) {
      alert("Fondos insuficientes.");
      return;
    }
    saldo -= montoRetiro;
    actualizarSaldo();
    alert(`Has retirado ${montoRetiro} USD.`);
  }

  function logout() {
    currentUser = null;
    saldo = 0;

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('montoIngreso').value = '';
    document.getElementById('montoRetiro').value = '';
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('mainSection').style.display = 'none';
  }

  function actualizarSaldo() {
    document.getElementById('saldo').textContent = saldo;
  }











