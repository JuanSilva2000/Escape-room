Feature: Juego de Escape Room

    El jugador puede solicitar la pista en cualquier momento escribiendo "ver pista". La pista deben ser no tan relevante para resolver el acertijo

    Scenario: Recibir Pista
        Given que el jugador esta resolviendo un acertijo
        When el jugador ingresa "ver pista"
        Then el sistema debe responder con una pista 