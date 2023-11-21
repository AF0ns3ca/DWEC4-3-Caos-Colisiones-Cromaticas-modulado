import { fillBalls } from "./main.js";
import { balls } from "./main.js";
//Con query selector se selcciona un elemento del html sin necesidad de class o id, se coje por la etiqueta del elemento
const canvas = document.querySelector("canvas");

//Generamos un contexto, pudiendo ser de 2d y 3d, en este casi sera 2d
export const ctx = canvas.getContext("2d");

//creamos constante width y height, ancho y largo, lo igualamos al que tiene el canvas en el html
export const width = (canvas.width = window.innerWidth);
export const height = (canvas.height = window.innerHeight);

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomRGB = () => {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
};

//Funcion que define el bucle principal del programacion
export const loop = () => {
    fillBalls(75);
    //Asi añadimos el color al contexto, un fondo negro semitransparente
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    //Definimos el tamaño del contexto
    ctx.fillRect(0, 0, width, height);
  
    //bucle que dibuja las bolas en el contexto
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  
    //Metodo propio parecido al addeventlistener pero aplicado a un contexto de canvas en 2d
    requestAnimationFrame(loop);
  };
