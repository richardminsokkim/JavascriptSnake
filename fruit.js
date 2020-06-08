function Fruit() {
  this.x;
  this.y;

  this.draw = function() {
    ctx.fillStyle = "#32CD32";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.pickLocation = function() {
    //math floor takes bottom of (random number which is less than .99) times rows from draw.js which is 30 the number will be 0-29 thats why there is
    //a plus one
    // main takeaway is that we need a random number that is a whole number interger. math.floor makes it a whole number
    //math.random gets a random number.  We multiply it by scale to match the rows and columns we created on the canvase.
    this.x = (Math.floor(Math.random() * rows - 1) + 1 ) * scale;
    this.y = (Math.floor(Math.random() * columns - 1) + 1 ) * scale;
  }
}
