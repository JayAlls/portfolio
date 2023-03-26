const form = document.getElementById('myForm');
const submitBtn = document.getElementById('submitBtn');



form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(form);
  
  fetch('https://formspree.io/f/xoqznknw', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
        alert("Votre message à bien été envoyer à Jayalls !")
      form.reset();
    } else {
        alert("Veuillez réessayer une erreur est survenue !")
    }
  })
  .catch(error => {
    alert('Une erreur est survenue, veuillez réessayer');
  });
});
