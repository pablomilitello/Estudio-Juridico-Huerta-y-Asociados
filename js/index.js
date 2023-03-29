const contactForm = document.getElementById('contactForm');
const nameForm = document.getElementById('nameForm').value;
const lastnameForm = document.getElementById('lastnameForm').value;
const emailForm = document.getElementById('emailForm').value;
const phoneForm = document.getElementById('phoneForm').value;
const commentForm = document.getElementById('commentForm').value;
const dataInput = { nameForm, lastnameForm, emailForm, phoneForm, commentForm };
const dataJson = JSON.stringify(dataInput);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('http://localhost:8080/inputData', {
    method: 'POST',
    body: dataJson,
  });

  Toastify({
    text: 'Su consulta ha sido enviada exitosamente!',
    duration: 2500,
    newWindow: true,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
    callback: function () {
      contactForm.reset();
    },
  }).showToast();
});
