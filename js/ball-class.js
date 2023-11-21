import { randomRGB } from "./canvas-setup.js";
import { ctx } from "./canvas-setup.js";
import { width } from "./canvas-setup.js";
import { height } from "./canvas-setup.js";
import { balls } from "./main.js";
//Implementacion de una clase (En el examen se pone en otra clase seguro)
export class Ball {
  //La bola consta de una posicion en el eje x, una en el eje y, una velocidad en x y una velocidad en y, un metodo para generar el color y un tamaño
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    //Metodo que inicia una nueva ruta para iniciar una figura. Metodo propio de canvas, de contexto 2d
    ctx.beginPath();
    //Añadimos el color al estilo
    ctx.fillStyle = this.color;
    //Metodo propio de canvas que define cada bola
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    //Metodo que rellenara la bola con el color seleccionado
    ctx.fill();
  }

  pause() {
    this.paused = true;
  }

  play() {
    this.paused = false;
  }

  update() {
    if(!this.paused) {
    //Este metodo tendra 4 condiciones, 4 ifs, hay que tener en cuenta lo que sucedera vertical y horizontalmente
    //Si hay colision en el borde derecho
    if (this.x + this.size >= width) {
      //En el caso de una colision horizontal en la ue hay que tener en cuenta tanto el tamaño de la bola como de la posicion horizontal hay que generar un choque. Para ello cambiamos el signo del sentido de la velocidad.
      this.velX = -Math.abs(this.velX); //this.velX = -this.velX
    }

    //Verifica si la posicion x de la pelota menos su tamaño es menor o igual a 0
    if (this.x - this.size <= 0) {
      //Si hay colision con el borde izquierdo se invierte la direccion horizontal
      this.velX = Math.abs(this.velX);
    }

    //Estos controlaran la posicion Y y la velocidad en el campo vertical
    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    //A medida que se va moviendo la bola hay que actualizar su valor con su nuevo valor debido al movimiento. Actualizaremos las coordenadas de la bola en funcion de las velocidades actuales
    this.x += this.velX;
    this.y += this.velY;
  }
}

  collisionDetect() {
    //Metodo que recorre el array de balls y detectará cuando chocan unas bolas con otras
    //for of que se parece al foreach, tratando cada elemento ball dentro de balls
    for (const ball of balls) {
      //Verificamos si la pelota actual no es la misma que la pelota de la iteracion
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;

        //Metodo posiblemente cambiado en el examen
        //Metodo de colision detectada
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
