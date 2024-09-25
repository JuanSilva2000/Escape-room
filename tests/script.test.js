require("jest-fetch-mock").enableMocks()

test("Debe aparecer la habitación y acertijo", async () => {
  fetch.mockResponseOnce(JSON.stringify({ habitacion: 1, acertijo: "Soy blanco por dentro y verde por fuera ¿Qué soy?" }))

  await fetch("/api/habitacion")
    .then(response => response.json())
    .then(data => {
      expect(data.habitacion).toBe(1)
      expect(data.acertijo).toBe("Soy blanco por dentro y verde por fuera ¿Qué soy?")
    })
})