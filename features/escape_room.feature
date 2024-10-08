Feature: Juego de Escape Room

    Scenario: Recibir Pista
        Given que el jugador esta resolviendo un acertijo
        When el jugador ingresa "ver pista"
        Then el sistema debe responder con una pista 
          
    Scenario: Mostrar acertijo
        Given que el jugador está en una habitación
        When carga la pagina o avanza a otra habitacion
        Then debe mostrar el acertijo
          
    Scenario: Digitar respuesta
        Given que el jugador lee el acertijo de la primera habitacion
        When digite su respuesta
        Then el juego debe procesar su respuesta para mostrar un alert correspondiente  
          
    Scenario: Respuesta correcta de acertijo
        Given que el jugador ha respondido correctamente
        When la respuesta es procesada 
        Then el jugador recibe una notificacion y avanza de habitacion
    
    Scenario: Felicitaciones al completar todos los acertijos
        Given que el jugador ha resuelto todos los acertijos
        When se procesa la ultima respuesta correcta
        Then el sistema debe mostrar un mensaje de felicitaciones