const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameForm = document.getElementById('nameForm').value;
  const lastnameForm = document.getElementById('lastnameForm').value;
  const emailForm = document.getElementById('emailForm').value;
  const phoneForm = document.getElementById('phoneForm').value;
  const commentForm = document.getElementById('commentForm').value;
  const dataInput = { nameForm, lastnameForm, emailForm, phoneForm, commentForm };
  const dataJson = JSON.stringify(dataInput);
  fetch('http://localhost:8080', {
    method: 'post',
    body: dataJson,
  });
});
