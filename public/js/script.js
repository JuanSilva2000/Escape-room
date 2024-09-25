fetch('/api/habitacion')
  .then(response => response.json())
  .then(data => {
    document.getElementById('numero-hab').textContent = data.habitacion
    document.getElementById('acertijo-text').textContent = data.acertijo
  })

const input_comando = document.getElementById("comando-input")

input_comando.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const comando = input_comando.value;

    fetch('/api/habitacion/comando', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comando })
    })
      .then(response => response.json())
      .then(data => {
        if (data.alerta) {
          alert(data.alerta);
        }

        fetch('/api/habitacion')
          .then(response => response.json())
          .then(data => {
            document.getElementById('numero-hab').textContent = data.habitacion
            document.getElementById('acertijo-text').textContent = data.acertijo
          })
      })

    input_comando.value = ''
  }
})