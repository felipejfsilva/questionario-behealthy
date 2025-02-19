document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('questionnaire-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Log the data (for demonstration purposes)
    console.log(data);

    // Send the data to the server using fetch
    fetch('https://formsubmit.co/ajax/rhbehealthy@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao enviar o formulário.');
        }
      })
      .then(data => {
        console.log('Success:', data);
        alert('Questionário enviado com sucesso!');
        form.reset(); // Limpa o formulário após o envio
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Ocorreu um erro ao enviar o questionário: ' + error.message);
      });
  });
});