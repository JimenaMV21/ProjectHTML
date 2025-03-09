// // Obtener el formulario
// const form = document.getElementById('formulario');

// // Agregar un evento de envío al formulario
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Evitar el envío del formulario

//     // Validar los campos
//     let isValid = true;

//     // Validar el campo de nombre
//     const nombreInput = document.getElementById('nombre');
//     if (nombreInput.value.trim() === '') {
//         isValid = false;
//         console.log("El campo 'Nombre Completo' es obligatorio."); // Mensaje en consola
//         nombreInput.classList.add('error');
//     } else {
//         nombreInput.classList.remove('error');
//     }

//     // Validar el campo de correo electrónico
//     const correoInput = document.getElementById('correo');
//     if (correoInput.value.trim() === '' || !isValidEmail(correoInput.value)) {
//         isValid = false;
//         console.log("El campo 'Correo Electrónico' es obligatorio y debe tener un formato válido."); // Mensaje en consola
//         correoInput.classList.add('error');
//     } else {
//         correoInput.classList.remove('error');
//     }

//     // Validar el campo de teléfono
//     const telefonoInput = document.getElementById('telefono');
//     if (telefonoInput.value.trim() === '' || !isValidPhone(telefonoInput.value)) {
//         isValid = false;
//         console.log("El campo 'Número de Teléfono' es obligatorio y debe seguir el formato 123-456-7890."); // Mensaje en consola
//         telefonoInput.classList.add('error');
//     } else {
//         telefonoInput.classList.remove('error');
//     }

//     // Validar el campo de dirección
//     const direccionInput = document.getElementById('direccion');
//     if (direccionInput.value.trim() === '') {
//         isValid = false;
//         console.log("El campo 'Dirección' es obligatorio."); // Mensaje en consola
//         direccionInput.classList.add('error');
//     } else {
//         direccionInput.classList.remove('error');
//     }

//     // Si todos los campos son válidos, puedes agregar lógica aquí si lo deseas
//     if (isValid) {
//         console.log("Todos los campos son válidos."); // Mensaje en consola
//     }
// });

// // Función para validar el formato de correo electrónico
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Función para validar el formato de número de teléfono
// function isValidPhone(phone) {
//     const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
//     return phoneRegex.test(phone);
// }