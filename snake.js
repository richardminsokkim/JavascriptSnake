function Snake(){
  // over here we need to declare some varriable so that our snake can move
  // x and y is the position
  // the speed is the amount of scales to move
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

//this.draw gets called every 250 miliseconds from draw.js.
//the draw funciton here makes a rectangel from position x = 0 to y = 0 that has an area of 10 pixels by 10  pixel or once square in the graph paper
//fill style fills it with a white color


  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";

    for(let i=0; i<this.tail.length; i++){
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillRect(this.x, this.y, scale, scale);
  }
  // this .update changes the speed to the new coordinate right now it is just moving right because of the speed.  xSpeed = scale * 1 = moving right
  // so when draw gets called again the function it will have updated coordinate to draw the funciton from
  // that is why draw gets called first. because the initial poinit is the starting point.  it doesnt' make sense to update position first then draw or
  // else you will not be at the correct starting point.
  this.update = function(){

//something I always forget is that array starts at 0 so this.tail.length -1 mean that if there is a number inside then the first number of the array
//will be at position 0
    for(let i=0; i<this.tail.length - 1; i++){
      this.tail[i] = this.tail[i+1]
    }
     this.tail[this.total - 1] = {x: this.x, y: this.y};

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width - 1){
      this.x = 0;
    }
    if (this.x < 0){
      this.x = canvas.width;
    }
    if (this.y > canvas.height - 1){
      this.y = 0;
    }
    if (this.y < 0 ){
      this.y = canvas.height;
    }
  }
//when a key is pressed the speed changes
//when a key is pressed the variable changes
//then when the set interval function is called it will read the key that has been pressed
// that is why pressing a key multiple times doesnt really do anything
  this.changeDirection = function(direction) {
    switch(direction) {
      case 'Up':
      this.xSpeed = 0;
      this.ySpeed = (scale * -1);
      break;
      case 'Down':
      this.xSpeed = 0;
      this.ySpeed = (scale * 1);
      break;case 'Left':
      this.xSpeed = (scale * -1);
      this.ySpeed = 0;
      break;
      case 'Right':
      this.xSpeed = (scale * 1);
      this.ySpeed = 0
      break;
    }
  }
  this.eat = function(fruit){
    // console.log(food);
    if (this.x === fruit.x && this.y === fruit.y){
      this.total++;
      return true;
    }

    return false;
  }
}
