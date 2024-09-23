# DATA:  
Nosotros no usamos una base de datos en si, en un modulo data creamos un `data.js` donde está cada habitación con sus respectivos acertijos y respuestas y pistas
![](img/data.png)  
  
Para manipular dichos datos creamos se tienen dos funciones:  
  
`getHabitacionActual()` devuelve la habitación en un objeto donde está la habitación actual del jugador y su acertijo respectivo
![](img/data_func-1.png)  
  
`procesarComando()` el comando que dijite el usuario sera pasado como parámetro y se le dará una respuesta respectiva, los comandos válidos son `ver pista` , la respuesta al acertijo, la función devuelve un mensaje dependiendo del comando, dicho mensaje será mostrado como un alert en el frontend  
![](img/data_func-2.png)