// Cargar usuarios guardados desde el localStorage
let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

// Guardar usuarios en localStorage
function guardarUsuarios() {
  localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
}

// Función para eliminar un usuario
function eliminarUsuario(email) {
  // Encontrar el índice del usuario por su email
  const index = usuariosRegistrados.findIndex(user => user.email === email);
  
  // Si el usuario existe, lo eliminamos del array
  if (index !== -1) {
    usuariosRegistrados.splice(index, 1); // Eliminar el usuario del array
    guardarUsuarios(); // Actualizar el localStorage
    alert('Usuario eliminado con éxito');
  } else {
    alert('Usuario no encontrado');
  }
}

// Registro de usuario
document.getElementById('formRegistro')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulación de guardar el usuario en el array
  usuariosRegistrados.push({ email, password });

  // Guardar en localStorage
  guardarUsuarios();

  alert('Registro completado con éxito');
  location.href = 'Iniciar_sesion.html'; // Redirigir al login
});

// Inicio de sesión
document.getElementById('formLogin')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const usuario = usuariosRegistrados.find(user => user.email === loginEmail && user.password === loginPassword);

  if (usuario) {
    alert('Inicio de sesión exitoso');
    location.href = 'principal.html'; // Redirigir a la página principal
  } else {
    alert('Usuario no registrado. Por favor, regístrate.');
    location.href = 'registro.html'; // Redirigir al registro si no está registrado
  }
});
document.getElementById('metodo-pago').addEventListener('change', function() {
  var metodoPago = this.value;
  var tarjetaInfo = document.getElementById('tarjeta-info');
  
  if (metodoPago === 'tarjeta') {
      tarjetaInfo.style.display = 'block';
  } else {
      tarjetaInfo.style.display = 'none';
  }
});

/* Ejemplo de eliminación de usuario (se puede llamar cuando sea necesario)
document.getElementById('btnEliminarUsuario')?.addEventListener('click', function() {
  const email = prompt('Ingresa el email del usuario que deseas eliminar:');
  eliminarUsuario(email);*/

  
