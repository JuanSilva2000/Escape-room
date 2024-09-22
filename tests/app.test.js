require("jest-fetch-mock").enableMocks()
const data_funcs = require("../data/data_func")

test("Debe respnder una pista", async () => {
    const comando = "ver pista"
    const alertaEsperada = data_funcs.procesarComando(comando)
    
    fetch.mockResponseOnce(JSON.stringify({ alerta: alertaEsperada.alerta }))
  
    await fetch("api/habitacion/comando", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ comando })
    })
    .then(response => response.json()) 
    .then(data => {
      expect(data.alerta).toBe("Es una fruta")
    })

})

test("Debe responder felicitaciones", async ()=> {
    const comando = "pera"
    const alertaEsperada = data_funcs.procesarComando(comando)

    fetch.mockResponseOnce(JSON.stringify({alerta: alertaEsperada.alerta}))

    await fetch("api/habitacion/comando", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ comando })
    })
    .then(response => response.json())
    .then(data => {
        expect(data.alerta).toBe("Respuesta correcta. Avanzaste a la siguiente habitación ^_^")
    } )
})


