const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Por favor, rellene todos los campos');
  } else {
    // Aquí iría el código para enviar el formulario
    alert('Formulario enviado correctamente');
    form.reset();
  }
});
