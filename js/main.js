import { Ball } from "./ball-class.js";
import { loop } from "./canvas-setup.js";
import { random } from "./canvas-setup.js";
import { randomRGB } from "./canvas-setup.js";
import { width } from "./canvas-setup.js";
import { height } from "./canvas-setup.js";

export const balls = [];

export const fillBalls = (numBolas) => {
  while (balls.length < numBolas) {
    const size = random(10, 20);
    const ball = new Ball(
      //Generar la posicion en x de forma aleatoria para esta bola en nuestro lienzo, toda esta linea es el valor x del objeto
      random(0 + size, width - size),
      //Posicion y
      random(0 + size, height - size),
      //Velocidad x (Se establece aleatoriamente entre -7 y 7)
      random(-7, 7),
      //Velociad y (Se establece aleatoriamente entre -7 y 7)
      random(-7, 7),
      //color
      randomRGB(),
      //size
      size
    );

    balls.push(ball);

    /*
      const x = random(0 + size, width - size);
      const y = random(0 + size, height - size);
      const velx = random(-7,7);
      const vely = random(-7,7);
      const color = randomRGB;
      const size = random(10,20);
  
      const ball = new Ball(x,y,velx,vely,color,size);*/
  }
};

loop();


//Botones para pausar y continuar
const pauseBtn = document.getElementById("pause");
const pausa = () => {
  for (const ball of balls) {
    ball.pause();
  }
};
const playBtn = document.getElementById("play");
const play = () => {
  for (const ball of balls) {
    ball.play();
  }
};
pauseBtn.addEventListener("click", pausa);
playBtn.addEventListener("click", play);
