# Boton Ayuda
Se implemento una logica de ayuda seguido con un boton, para comunicar al jugador de las reglas y ayuda que proporcionamos para la mejor jugabilidad del proyecto.  

Modificamos el `index.html` para poder implementar la logica y un script, asi podemos ver el contenido de nuestra informacion sobre las reglas y ayuda con solo pasar el cursor sobre ella.

Se muestra con el siguiente codigo, la implementacion del boton.  


    const ayudaBoton = document.getElementById('ayuda');
    const comandoLista = document.getElementById('comandos-lista');

    ayudaBoton.addEventListener('mouseenter', function () {
      comandoLista.style.display = 'block';
    });

    ayudaBoton.addEventListener('mouseleave', function () {
      comandoLista.style.display = 'none';
    });


Y con su respectivo modelo y visualizacion en nuestro archivo de diseños.  


    #ayuda {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        background-color: rgba(0, 128, 0, 0.9);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }


