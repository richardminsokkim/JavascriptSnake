const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

//const rows columns and scale is like a graph paper that gets layered like a flipbook.
//canvas height and width get divided by the scale so there are that many squares
// scal is the square

var snake;

(function setup(){
  snake = new Snake();
  fruit = new Fruit();
  // snake.draw();

  fruit.pickLocation();
  // console.log(fruit);  Used console log to check the location of the fruit

  //set interval with update what ever is in the function every milisecond.  in this case every 250 miliseconds what ever is in this funciton will update function
//   myFunction() {
//   myVar = setInterval(alertFunc, 3000);
// }
//above is the original setInterval function.
//alertFunc has been replaced with an anon function.

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // need to clear Rect so that the previous fill rectangle gets cleared and the new one that is in the draw function will appear
    snake.update();
    fruit.draw();
    snake.draw();

    if (snake.eat(fruit)){
      fruit.pickLocation();

    }

  }, 100);
}());
//addEventListener takes evt data from keydown and print it to the console.log
window.addEventListener('keydown', ((evt) => {
  // console.log(evt);
  const direction = evt.key.replace('Arrow', '')
  //replaced Arrow up that was from console log evt to become Up
  // console.log(direction)
  //when console logging the direction will show on the console
  snake.changeDirection(direction)
}))
