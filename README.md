# promo-t-module-3-pair-6-sprint-1-hangman-game

## Enunciado del ejercicio (primera parte) 


![](./react_ejercicio_ahorcado_enunciado-01.gif)

1. Al arrancar la página, el juego debe obtener una palabra aleatoria de una API. Esta palabra es la que la jugadora debe adivinar.
   1. Una vez la API nos devuelve la palabra aleatoria debemos pintar en el apartado **Solución** varios guiones bajos para indicar a la jugadora la longitud de la palabra que debe adivinar.
1. Cuando la usuaria escriba una letra en **Escribe una letra** tendremos que:
   1. Actualizar la **Solución**:
      - Si la letra escrita por la jugadora está entre las letras de la palabra buscada debemos mostrar las letras acertadas encima de los guiones correspondientes.
   1. Actualizar **Las letras falladas**:
      - Si la letra escrita por la jugadora no está entre las letras de la palabra buscada debemos pintarla en este apartado.
   1. Actualizar el ahorcado:
      - Si la letra escrita por la jugadora no está entre las letras de la palabra buscada debemos actualizar el CSS del ahorcado para que las líneas se pongan blancas.
