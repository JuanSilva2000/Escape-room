 ## 1: SCRIPT
  Implementamos un codigo `script.js` que va interactuar con nuestra API para actulizar nuestra pagina web del juego, cada vez que se realize una peticion.

  Utilizamos la funcion de `fecth` de JavaScript para hacer solicitudes al servidor y manejar las respuestas. `fecth('/api/habitacion')` realiza una solicitud GET para obtener de la API, la informacion de la habitacion actual y su respectivo acertijo.

  Capturamos la respuesta introducida por el jugador y añadimos un `listener` para que introduzca su respuesta y presiona una tecla especifica tenga un resultado.
  
  Este `listener` utiliza una funcion `fecth` para una solicitud POST para mostrar el resultado dado la respuesta enviada y capturada anteriormente.